/**
 * 致谢名单配置
 */

export interface Acknowledgement {
  /**
   * 描述或贡献说明
   */
  description?: string
  /**
   * 头像或Logo URL
   */
  avatar?: string
  /**
   * 社交媒体链接
   */
  links?: {
    /**
     * 链接类型（用于显示图标）
     */
    type?: 'bilibili' | 'weibo' | 'twitter' | 'wechat' | 'blog' | 'website' | 'email'
    /**
     * 显示文本
     */
    label: string
    /**
     * 链接地址
     */
    href: string
    /**
     * 打开方式
     */
    target?: '_blank' | '_self'
  }[]
}

/**
 * 个人致谢名单（简单列表）
 */
export interface PersonalAcknowledgement {
  /**
   * 姓名
   */
  name: string
  /**
   * 个人链接（可选）
   */
  link?: string
}

/**
 * 致谢名单
 */
export const acknowledgements: Acknowledgement[] = [
  {
    description: '提供优质的菜谱数据来源',
    links: [
      {
        type: 'bilibili',
        label: '哔哩哔哩 美食专区',
        href: 'https://www.bilibili.com/blackboard/dynamic/306882',
        target: '_blank',
      },
    ],
  },
  {
    description: '以下开源项目使得项目得以快速实现',
    links: [
      {
        type: 'website',
        label: 'Nuxt',
        href: 'https://nuxt.com',
        target: '_blank',
      },
      {
        type: 'website',
        label: 'Vue',
        href: 'https://vuejs.org',
        target: '_blank',
      },
      {
        type: 'website',
        label: 'UnoCSS',
        href: 'https://unocss.dev',
        target: '_blank',
      },
      {
        type: 'website',
        label: 'VueUse',
        href: 'https://vueuse.org',
        target: '_blank',
      },
    ],
  },
]

/**
 * 个人致谢名单
 */
export const personalAcknowledgements: PersonalAcknowledgement[] = [
]
