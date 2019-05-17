/* DO NOT CHANGE THE GLOBAL VARIABLE NAME */

window.VUELOG_DATABASE = {

  config: {
    // The name of your site, will be displayed in browser tab and site header.
    brand: 'PeakFish',

    // Put the site brand behind current page in `document.title`.
    brandTrailing: true,

    // The image displayed in site header right beside the brand.
    logo: './static/PeakFish.jpg',

    // Path to the domain root that serves your site, starts and ends with slash (`/`).
    // Set to `'/'` if your site is under domain root.
    base: '/',

    // The path to route to when you visit `/`.
    // Set to `/home`, `/blog` or a valid path at your need.
    homePath: '/blog',

    // Whether footer is visible on `homePath` or not.
    homeFooter: false,

    // Vuelog interface language. Currently only support 'zh-CN' and 'en-US'.
    defaultLang: 'zh-CN',

    // Allow/disallow visitors to switch interface language.
    switchLang: false,

    // Available languages for switching. Must be a subset of supported languages, or leave empty.
    selectedLangs: [],

    // Number of posts listed in a blog/category view.
    postsCount: 12,

    // // Fill in the shortname to integrate Disqus with your blog.
    // disqusShortname: '',

    // // Fill in the account to integrate IntenseDebate with your blog.
    // intenseDebateAccount: '',

    // // Fill in the uid to integrate LiveRe with your blog.
    // livereUid: '',

    // Options for marked, see https://github.com/chjj/marked#options-1 for detail
    markedOptions: {
      gfm: true,
      breaks: true,
      sanitize: false
    }
  },

  navigation: [
    {
      label: '归档',
      type: 'archive',
      path: '/archive'
    },
    {
      label: 'demo',
      type: 'page',
      path: '/page/demo'
    },
    {
      label: '关于',
      type: 'page',
      path: '/page/about'
    },
    {
      label: '链接',
      type: 'dropdown',
      path: '', // (OPTIONAL) dropdown can be routable too if you set a valid route path
      children: [
        {
          label: '微博',
          type: 'outgoing',
          link: 'https://weibo.com/806660666'
        },
        {
          label: 'GitHub',
          type: 'outgoing',
          link: 'https://github.com/PeakFish'
        }
      ]
    }
  ],

  pages: [
    {
      title: '关于',
      slug: 'about',
      exclude: true,      // (OPTIONAL) `true` to exclude the page from archive view
      titleless: false,   // (OPTIONAL) `true` to hide the title in page view
      commentless: false, // (OPTIONAL) `true` to disable comments for the page
      draft: false        // (OPTIONAL) `true` to make the page temporarily inaccessible
    },
    {
      title: '项目',
      slug: 'demo'
    }
  ],

  categories: [
    {
      title: '文章',
      slug: 'articles'
    }
  ],

  posts: [
    /* 2017 */
    {
      title: 'js getter 和 setter',
      slug: 'js-setter-getter',
      category: 'articles',
      date: '2017-10-04'
    },
    {
      title: 'js 复制',
      slug: 'js-copy',
      category: 'articles',
      date: '2017-09-29'
    },
    /* 2016 */
    {
      title: '几种使元素固定在页面底部的布局方案',
      slug: 'sticky-footer',
      category: 'articles',
      date: '2016-06-16'
    },
    {
      title: 'javascript 文件上传',
      slug: 'javascript-file-upload',
      category: 'articles',
      date: '2016-04-05'
    },
    {
      title: 'nginx 笔记',
      slug: 'nginx-note',
      category: 'articles',
      date: '2016-03-17'
    },
    {
      title: 'onmouseenter 和 onmouseleave事件 非 ie 浏览器 模拟函数',
      slug: 'mouseover-mouseout',
      category: 'articles',
      date: '2016-03-15'
    },
    {
      title: 'html 的 br 标签会占多高？',
      slug: 'html-br-height',
      category: 'articles',
      date: '2016-03-15'
    },
    {
      title: '前端备忘',
      slug: 'FE-skills',
      category: 'articles',
      date: '2016-03-15'
    }
  ]
  
}
