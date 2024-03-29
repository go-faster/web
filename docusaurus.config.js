// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'faster',
  tagline: 'Causing Performance, Asserting Go Domination',
  url: 'https://go-faster.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'go-faster', // Usually your GitHub org/user name.
  projectName: 'web', // Usually your repo name.
  favicon: 'img/favicon.ico',
  scripts: [
    "https://buttons.github.io/buttons.js",
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
    "/js/code-block-buttons.js",
    "/js/custom.js"
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/go-faster/web/edit/main/',
        },
        /* TODO(ernado): Enable blog back
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/gotd/docs/edit/main/',
        },
        */
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'go faster',
        logo: {
          alt: 'go faster logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'projects/list',
            position: 'left',
            label: 'projects',
          },
          {to: '/blog', label: 'blog', position: 'left'},
          {
            href: '/docs/telegram/',
            position: 'right',
            className: 'header-telegram-link',
            'aria-label': 'Telegram Group',
          },
          {
            href: 'https://github.com/go-faster',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Our projects',
                to: '/docs/projects/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram Chat',
                href: 'https://t.me/go_faster_dev',
              },
              {
                label: 'Telegram News Channel',
                href: 'https://t.me/go_faster_news',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/go-faster',
              },
            ],
          },
        ]
      },
      docs: {
        sidebar: {
          hideable: true,
        }
      },
    }),
};

module.exports = config;
