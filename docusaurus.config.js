// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ABCD Software Documentation',
  tagline: 'Knowledge base',
  favicon: 'img/favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://ABCD-DEVCOM.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ABCD-DEVCOM', // Usually your GitHub org/user name.
  projectName: 'ABCD-DEVCOM.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',    // Branch onde o site estático ficará (padrão)
  trailingSlash: false,            // Recomendado pelo GitHub Pages
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  markdown: {
    mermaid: true,
  },

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'algolia-site-verification', // Confirme se o nome pedido é este
        content: '96027C8806F3B990',
      },
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          includeCurrentVersion: true, // Garante que a pasta 'docs' seja publicada
          lastVersion: 'current', // Define que a versão 'current' é a última versão estável
          versions: {
            current: {
              label: '3.1.X', // O nome que aparece no menu (em vez de Next)
              path: '3.1', // A URL muda de /docs/next/... para /docs/3.1/...
              banner: 'none', 
            },
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
 // themes: ['@docusaurus/theme-search-algolia'],
  themes: [
    '@docusaurus/theme-mermaid',
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "pt"],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      algolia: {
        contextualSearch: false,
        appId: 'AV1I37IPEK',
        indexName: 'docs_abcd',
        apiKey: '32900ef65effb8906fc43597b7376aef',
      },
      navbar: {
        title: '',
        logo: {
          alt: 'ABCD Logo',
          src: 'img/logo_abcd.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Start',
          },
        {
        type: 'docsVersionDropdown',
        position: 'right',
        dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
        dropdownActiveClassDisabled: true,
      },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/ABCD-DEVCOM/ABCD-DEVCOM.github.io',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
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
                label: 'Tutorial',
                to: '/docs/3.1/category/tutorials--how-to',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'ABCD Forums',
                href: 'https://abcd-community.org/forums/',
              },
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
                label: 'Development repository',
                href: 'https://github.com/ABCD-DEVCOM/ABCD',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ACBD Docs.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
