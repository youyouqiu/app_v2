import Storage from 'react-native-storage'
import AsyncStorage from '@react-native-community/async-storage'

const _storage = new Storage({
  size: 1000,                     // 最大容量
  storageBackend: AsyncStorage,   // 如果不指定存储引擎则数据只会保存在内存中，重启后数据丢失
  defaultExpires: null,           // 数据过期时间(ms)，null永不过期
  enableCache: true,              // 读写时在内存中缓存数据
})

const storage = {
  /**
   * 通用的本地存储函数
   * @param {string} key
   * @param {any} data data不能为空
   */
  save: async (key: string, data: any): Promise<void> => {
    if (!key) {throw new Error('key不能为空!')}
    if (data === undefined) {throw new Error('data不能为空!')}
    if (key.includes('_')) {throw new Error('key不能包含下划线!')}
    await _storage.save({
      key,  // 不要在key中使用_下划线符号
      data: JSON.stringify(data),
      expires: null,
    })
  },

  // 读取数据
  get: async (key: string): Promise<any> => {
    return JSON.parse(await _storage.load({ key }))
  },

  // 删除单个数据
  remove: async (key: string): Promise<void> => {
    await _storage.remove({ key })
  },
}

export async function getUserInfo(): Promise<string> {
  return await storage.get('user')
}

export default storage
