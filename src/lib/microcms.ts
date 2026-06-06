import { createClient } from 'microcms-js-sdk'
import type { MicroCMSImage, MicroCMSListContent, MicroCMSObjectContent } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.VITE_MICROCMS_API_KEY,
})

// 施工実績
export type Work = MicroCMSListContent & {
  image: MicroCMSImage
  title: string
  description: string
}

// ビフォーアフター
export type BeforeAfterCase = MicroCMSListContent & {
  before_image: MicroCMSImage
  after_image: MicroCMSImage
  title: string
  description: string
}

// スタッフ（ヒーロー人物）
export type Staff = MicroCMSListContent & {
  image: MicroCMSImage
  name: string
  subtitle: string
}

// フェッチ関数
export const getWorks = () =>
  client.getList<Work>({ endpoint: 'works', queries: { orders: 'createdAt' } })

export const getBeforeAfterCases = () =>
  client.getList<BeforeAfterCase>({ endpoint: 'before-after', queries: { orders: 'createdAt' } })

export const getStaff = () =>
  client.getList<Staff>({ endpoint: 'staff', queries: { orders: 'createdAt' } })
