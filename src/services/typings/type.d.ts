export interface ResponseData<T> {
  code: string
  message: string
  data?: T
}

export type PromiseResponseData = Promise<ResponseData<any>>

