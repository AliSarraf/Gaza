// Content caching service for offline module data
import { openDB } from 'idb';

class ContentCachingService {
  constructor() {
    this.db = null;
    this.initDB();
  }

  async initDB() {
    try {
      this.db = await openDB('firstAidTraining', 1, {
        upgrade(db) {
          if (!db.objectStoreNames.contains('modules')) {
            db.createObjectStore('modules', { keyPath: 'id' });
          }
          if (!db.objectStoreNames.contains('quizzes')) {
            db.createObjectStore('quizzes', { keyPath: 'moduleId' });
          }
          if (!db.objectStoreNames.contains('content')) {
            db.createObjectStore('content', { keyPath: 'key' });
          }
        },
      });
    } catch (error) {
      console.error('Failed to initialize content database:', error);
    }
  }

  async cacheModuleData(moduleData) {
    if (!this.db) await this.initDB();

    try {
      // Cache module information
      await this.db.put('modules', {
        id: moduleData.id,
        title: moduleData.title,
        description: moduleData.description,
        icon: moduleData.icon,
        color: moduleData.color,
        duration: moduleData.duration,
        videos: moduleData.videos,
        cachedAt: new Date().toISOString()
      });

      // Cache quiz data separately
      if (moduleData.quiz) {
        await this.db.put('quizzes', {
          moduleId: moduleData.id,
          questions: moduleData.quiz.questions,
          cachedAt: new Date().toISOString()
        });
      }

      // Send message to service worker to cache thumbnails and other assets
      if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({
          type: 'CACHE_MODULE_DATA',
          payload: moduleData
        });
      }

      return { success: true };
    } catch (error) {
      console.error('Failed to cache module data:', error);
      return { success: false, error: error.message };
    }
  }

  async getModuleData(moduleId) {
    if (!this.db) await this.initDB();

    try {
      const module = await this.db.get('modules', moduleId);
      const quiz = await this.db.get('quizzes', moduleId);

      if (module) {
        return {
          ...module,
          quiz: quiz ? { questions: quiz.questions } : null
        };
      }

      return null;
    } catch (error) {
      console.error('Failed to get cached module data:', error);
      return null;
    }
  }

  async getAllCachedModules() {
    if (!this.db) await this.initDB();

    try {
      return await this.db.getAll('modules');
    } catch (error) {
      console.error('Failed to get all cached modules:', error);
      return [];
    }
  }

  async cacheAllModules(modules) {
    const results = [];

    for (const module of modules) {
      const result = await this.cacheModuleData(module);
      results.push({ moduleId: module.id, ...result });
    }

    return results;
  }

  async isModuleCached(moduleId) {
    if (!this.db) await this.initDB();

    try {
      const module = await this.db.get('modules', moduleId);
      return !!module;
    } catch (error) {
      console.error('Failed to check module cache status:', error);
      return false;
    }
  }

  async clearModuleCache(moduleId) {
    if (!this.db) await this.initDB();

    try {
      await this.db.delete('modules', moduleId);
      await this.db.delete('quizzes', moduleId);
      return { success: true };
    } catch (error) {
      console.error('Failed to clear module cache:', error);
      return { success: false, error: error.message };
    }
  }

  async clearAllCache() {
    if (!this.db) await this.initDB();

    try {
      await this.db.clear('modules');
      await this.db.clear('quizzes');
      await this.db.clear('content');
      return { success: true };
    } catch (error) {
      console.error('Failed to clear all cache:', error);
      return { success: false, error: error.message };
    }
  }

  // Cache general content like app settings, user preferences, etc.
  async cacheContent(key, data) {
    if (!this.db) await this.initDB();

    try {
      await this.db.put('content', {
        key,
        data,
        cachedAt: new Date().toISOString()
      });
      return { success: true };
    } catch (error) {
      console.error('Failed to cache content:', error);
      return { success: false, error: error.message };
    }
  }

  async getCachedContent(key) {
    if (!this.db) await this.initDB();

    try {
      const content = await this.db.get('content', key);
      return content ? content.data : null;
    } catch (error) {
      console.error('Failed to get cached content:', error);
      return null;
    }
  }

  // Get cache statistics
  async getCacheStats() {
    if (!this.db) await this.initDB();

    try {
      const modules = await this.db.getAll('modules');
      const quizzes = await this.db.getAll('quizzes');
      const content = await this.db.getAll('content');

      return {
        totalModules: modules.length,
        totalQuizzes: quizzes.length,
        totalContent: content.length,
        lastUpdated: modules.length > 0 ?
          Math.max(...modules.map(m => new Date(m.cachedAt).getTime())) : null
      };
    } catch (error) {
      console.error('Failed to get cache stats:', error);
      return {
        totalModules: 0,
        totalQuizzes: 0,
        totalContent: 0,
        lastUpdated: null
      };
    }
  }
}

// Export singleton instance
export default new ContentCachingService();
