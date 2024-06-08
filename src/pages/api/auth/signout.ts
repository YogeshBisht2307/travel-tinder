import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ cookies, redirect }) => {
  cookies.delete("tt-access-token", { path: "/" });
  cookies.delete("tt-refresh-token", { path: "/" });
  return redirect("/auth/signin");
};
