// Video download service for offline PWA functionality
import { openDB } from 'idb';

class VideoDownloadService {
  constructor() {
    this.db = null;
    this.downloadQueue = new Map();
    this.downloadProgress = new Map();
    this.initDB();
    this.setupServiceWorkerListener();
  }

  async initDB() {
    try {
      this.db = await openDB('firstAidTraining', 1, {
        upgrade(db) {
          if (!db.objectStoreNames.contains('videos')) {
            db.createObjectStore('videos', { keyPath: 'id' });
          }
          if (!db.objectStoreNames.contains('downloadProgress')) {
            db.createObjectStore('downloadProgress', { keyPath: 'videoId' });
          }
        },
      });
    } catch (error) {
      console.error('Failed to initialize video database:', error);
    }
  }

  setupServiceWorkerListener() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('message', (event) => {
        const { type, payload } = event.data;

        switch (type) {
          case 'VIDEO_DOWNLOADED':
            this.handleVideoDownloaded(payload);
            break;
          case 'VIDEO_DELETED':
            this.handleVideoDeleted(payload);
            break;
          case 'DOWNLOAD_PROGRESS':
            this.handleDownloadProgress(payload);
            break;
        }
      });
    }
  }

  async downloadVideo(video, onProgress = () => {}, onComplete = () => {}) {
    const { id, videoUrl, title, thumbnail } = video;

    // Check if already downloaded
    if (await this.isVideoDownloaded(id)) {
      onComplete({ success: true, message: 'Video already downloaded' });
      return;
    }

    // Add to queue
    this.downloadQueue.set(id, { video, onProgress, onComplete });
    this.downloadProgress.set(id, { progress: 0, status: 'queued' });

    try {
      // Update progress
      this.updateProgress(id, 10, 'downloading');
      onProgress(10);

      // Send message to service worker to download video
      if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({
          type: 'DOWNLOAD_VIDEO',
          payload: { videoUrl, videoId: id }
        });
      }

      // Download and cache thumbnail
      if (thumbnail) {
        await this.downloadThumbnail(thumbnail);
        this.updateProgress(id, 50, 'downloading');
        onProgress(50);
      }

      // Store video metadata in IndexedDB
      await this.storeVideoMetadata(video);
      this.updateProgress(id, 80, 'processing');
      onProgress(80);

    } catch (error) {
      console.error('Download failed:', error);
      this.updateProgress(id, 0, 'error');
      onComplete({ success: false, error: error.message });
      this.downloadQueue.delete(id);
    }
  }

  async downloadThumbnail(thumbnailUrl) {
    try {
      // Service worker will handle caching thumbnails
      await fetch(thumbnailUrl);
    } catch (error) {
      console.warn('Failed to cache thumbnail:', error);
    }
  }

  async storeVideoMetadata(video) {
    if (!this.db) await this.initDB();

    try {
      await this.db.put('videos', {
        id: video.id,
        title: video.title,
        description: video.description,
        duration: video.duration,
        thumbnail: video.thumbnail,
        videoUrl: video.videoUrl,
        downloadDate: new Date().toISOString(),
        transcript: video.transcript || ''
      });
    } catch (error) {
      console.error('Failed to store video metadata:', error);
      throw error;
    }
  }

  async deleteVideo(videoId) {
    try {
      // Send message to service worker to delete cached video
      if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({
          type: 'DELETE_VIDEO',
          payload: { videoId }
        });
      }

      // Remove from IndexedDB
      if (!this.db) await this.initDB();
      await this.db.delete('videos', videoId);
      await this.db.delete('downloadProgress', videoId);

      // Clean up local state
      this.downloadQueue.delete(videoId);
      this.downloadProgress.delete(videoId);

      return { success: true };
    } catch (error) {
      console.error('Failed to delete video:', error);
      return { success: false, error: error.message };
    }
  }

  async isVideoDownloaded(videoId) {
    if (!this.db) await this.initDB();

    try {
      const video = await this.db.get('videos', videoId);
      return !!video;
    } catch (error) {
      console.error('Failed to check video download status:', error);
      return false;
    }
  }

  async getDownloadedVideos() {
    if (!this.db) await this.initDB();

    try {
      return await this.db.getAll('videos');
    } catch (error) {
      console.error('Failed to get downloaded videos:', error);
      return [];
    }
  }

  async getVideoMetadata(videoId) {
    if (!this.db) await this.initDB();

    try {
      return await this.db.get('videos', videoId);
    } catch (error) {
      console.error('Failed to get video metadata:', error);
      return null;
    }
  }

  updateProgress(videoId, progress, status) {
    this.downloadProgress.set(videoId, { progress, status });
  }

  getDownloadProgress(videoId) {
    return this.downloadProgress.get(videoId) || { progress: 0, status: 'not_started' };
  }

  handleVideoDownloaded(payload) {
    const { videoId, success, error } = payload;
    const queueItem = this.downloadQueue.get(videoId);

    if (queueItem) {
      if (success) {
        this.updateProgress(videoId, 100, 'completed');
        queueItem.onProgress(100);
        queueItem.onComplete({ success: true, message: 'Video downloaded successfully' });
      } else {
        this.updateProgress(videoId, 0, 'error');
        queueItem.onComplete({ success: false, error });
      }

      this.downloadQueue.delete(videoId);
    }
  }

  handleVideoDeleted(payload) {
    const { videoId, success } = payload;
    this.downloadProgress.delete(videoId);
    console.log(`Video ${videoId} deleted:`, success ? 'success' : 'failed');
  }

  handleDownloadProgress(payload) {
    const { videoId, progress } = payload;
    const queueItem = this.downloadQueue.get(videoId);

    if (queueItem) {
      this.updateProgress(videoId, progress, 'downloading');
      queueItem.onProgress(progress);
    }
  }

  // Get storage usage information
  async getStorageInfo() {
    try {
      if ('storage' in navigator && 'estimate' in navigator.storage) {
        const estimate = await navigator.storage.estimate();
        return {
          used: estimate.usage || 0,
          available: estimate.quota || 0,
          usedMB: Math.round((estimate.usage || 0) / (1024 * 1024)),
          availableMB: Math.round((estimate.quota || 0) / (1024 * 1024))
        };
      }
    } catch (error) {
      console.error('Failed to get storage info:', error);
    }
    return { used: 0, available: 0, usedMB: 0, availableMB: 0 };
  }

  // Clear all downloads
  async clearAllDownloads() {
    try {
      const downloadedVideos = await this.getDownloadedVideos();

      for (const video of downloadedVideos) {
        await this.deleteVideo(video.id);
      }

      return { success: true, deletedCount: downloadedVideos.length };
    } catch (error) {
      console.error('Failed to clear all downloads:', error);
      return { success: false, error: error.message };
    }
  }
}

// Export singleton instance
export default new VideoDownloadService();
