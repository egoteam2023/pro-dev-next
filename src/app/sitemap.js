
export default async function sitemap() {
    return [
        {
            url: `${process.env.PUBLIC_BASE_URL}/`,
            lastModified: new Date(),
        }
    ]
}