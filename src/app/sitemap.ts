export const baseUrl = "https://portfolio-yelsultan.vercel.app";

const staticRoutes = ["/home", "/experience"];

export default async function sitemap() {
  const currentDate = new Date().toISOString().split("T")[0];

  const routes = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
  }));

  return routes;
}
