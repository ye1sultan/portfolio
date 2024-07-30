export const baseUrl = "https://portfolio-yelsultan.vercel.app";

export default async function sitemap() {
  let routes = ["/home", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return routes;
}
