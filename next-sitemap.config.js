/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://jmair-install-service.vercel.app',
  generateRobotsTxt: true, // robots.txt를 자동으로 생성합니다.
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: [],
}
