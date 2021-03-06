// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'faster',
  tagline: 'causing performance',
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
          // TODO(ernado): Enable blog back
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: '/docs/slack/',
            position: 'right',
            className: 'header-slack-link',
            'aria-label': 'Slack channel',
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
            title: 'docs',
            items: [
              {
                label: 'projects',
                to: '/docs/projects/',
              },
            ],
          },
          {
            title: 'community',
            items: [
              {
                label: 'telegram',
                href: 'https://t.me/go_faster_dev',
              }
            ],
          },
          {
            title: 'more',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'github',
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
