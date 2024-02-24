// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ITTSR Wiki',
  tagline: 'An incredible tagline',
  favicon: 'img/May_Cody.png',

  // Production URL
  url: 'https://ITTSR.github.io',
  baseUrl: '/ITTSR-Wiki',

  // GitHub pages deployment config.
  organizationName: 'ITTSR',
  projectName: 'ITTSR-Wiki',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    discordUrl: 'http://discord.itt.run/',
    githubUrl: 'https://github.com/ITTSR/ITTSR-Wiki',
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/ITTSR/ITTSR-Wiki/blob/main/',

          admonitions: {
            keywords: ['note', 'tip', 'info', 'caution', 'danger', 'easy', 'medium', 'hard'],
            extendDefaults: true
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'ITTSR Wiki',
        logo: {
          src: 'img/May_Cody.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorials',
          },
          {
            type: 'docSidebar',
            sidebarId: 'knowledgeSidebar',
            position: 'left',
            label: 'Knowledge'
          },
          {
            type: 'docSidebar',
            sidebarId: 'moddingSidebar',
            position: 'left',
            label: 'Modding'
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/category/welcome',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'http://discord.itt.run/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ITTSR/ITTSR-Wiki',
              },
            ],
          },
        ],
        copyright: `Made with Docusaurus by the ITTSR Community`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
