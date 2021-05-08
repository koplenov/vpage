/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'V programming guide',
  tagline: 'Dinosaurs are cool',
  url: 'https://koplenov.github.io/vbyexample/',
  baseUrl: '/vbyexample/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: '', // Usually your GitHub org/user name.
  projectName: 'vbyexample', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Page',
      logo: {
        alt: 'V Logo',
        src: 'img/v-logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'docs/intro',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'doc',
          docId: 'tutorials/intro',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/koplenov/vbyexample',
          label: 'GitHub',
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
              label: 'Official language site',
              to: 'https://vlang.io/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/vlang',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/vlang',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/v_language',
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
              label: 'GitHub',
              href: 'https://github.com/vlang/v',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
	hideableSidebar: true,
  },
    i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  
};
