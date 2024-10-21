export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/public/*.svg$',
      },
    ],
    sitemap: `${process.env.PUBLIC_BASE_URL}/sitemap.xml`,
  };
}
