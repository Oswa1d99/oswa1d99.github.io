export const siteConfig = {
  title: 'Jay Baek',
  description: '개발과 일상에 대한 기록',
  author: 'Jay Baek',
  siteUrl: 'https://oswa1d99.github.io',
  locale: 'ko',

  social: [
    { name: 'GitHub', url: 'https://github.com/Oswa1d99' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jaybaek99' },
    { name: 'X', url: 'https://x.com/Oswa1d99' },
  ],

  // giscus configuration
  giscus: {
    repo: 'Oswa1d99/oswa1d99.github.io' as `${string}/${string}`,
    repoId: '',
    category: 'Comments',
    categoryId: '',
    mapping: 'pathname' as const,
    reactionsEnabled: true,
  },

  // Umami analytics
  umami: {
    enabled: false,
    src: '', // e.g., 'https://analytics.example.com/script.js'
    websiteId: '',
  },

  categories: ['Dev', 'Philosophy', 'Essay'] as const,
};