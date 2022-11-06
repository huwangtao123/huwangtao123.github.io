// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Web3 Journey for Pacman',
  tagline: 'Web3, Cypto',
  url: 'https://huwangtao123.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'huwangtao123', // Usually your GitHub org/user name.
  projectName: 'huwangtao123.github.io', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB'
      }
    }
  },

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        language: ['en', 'zh']
      }
    ]
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: {
          blogTitle: 'All the blogs related to CLever',
          showReadingTime: true,
          postsPerPage: 'ALL',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All Blogs',
          feedOptions: {
            type: 'all'
          }
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
        gtag: {
          trackingID: 'GT-KFNPNFH',
          anonymizeIP: true
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg'
        },
        items: [
          {
            label: 'Tutorial',
            type: 'doc',
            docId: 'Defi-basics/Clever',
            position: 'left'
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/booster', label: 'Booster Program', postion: 'left' },
          {
            href: 'https://github.com/huwangtao123/huwangtao123.github.io',
            label: 'GitHub',
            position: 'right'
          },
          {
            href: 'https://twitter.com/taowang1',
            label: 'Twitter',
            position: 'right'
          },
          {
            type: 'localeDropdown',
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/Defi-basics/Clever'
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/taowang1'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/huwangtao123'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`
      },
      prism: {
        theme: darkCodeTheme,
        lightTheme: lightCodeTheme
      }
    })
};

module.exports = config;
