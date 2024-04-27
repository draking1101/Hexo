import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'



export const siteConfig: SiteConfig = {
  //左上角首頁icon旁的Text
  title: 'Fuwari',
  subtitle: 'Demo Site',
  lang: 'zh',
  themeHue: 250,
  // 上方橫幅
  banner: {
    enable: true,
    src: 'assets/images/2gungirls.jpg',
  },
  // favicon - 網站上方分頁的圖示
  favicon: [    // Leave this array empty to use the default favicon
    {
      src: '/favicon/favicon-dark-192.png',    // Path of the favicon, relative to the /public directory
      //theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
      //sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'GitHub',
      url: 'https://github.com/draking1101?tab=repositories',
      external: true,
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/demo-avatar.png',
  name: 'Lorem Ipsum',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  links: [
    // 模板
    // {
    //   name: '',
    //   icon: 'fa6-brands:name',
    //   url: '',
    // },
    {
      name: 'Twitch',
      icon: 'fa6-brands:twitch',
      url: 'https://www.twitch.tv/xiaotian1101',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/draking1101?tab=repositories',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
