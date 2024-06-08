import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supbase/config";
import { createUserProfile, getUserProfileById } from "../../../lib/supbase/queries";

export const GET: APIRoute = async ({ url, cookies, redirect }) => {
  const authCode = url.searchParams.get("code");
  if (!authCode) {
    return new Response("No code provided", { status: 400 });
  }

  const { data, error } = await supabase.auth.exchangeCodeForSession(authCode);
  if (error) {
    return new Response(error.message, { status: 500 });
  }

  const { access_token, refresh_token, user } = data.session;
  const userEntity = await getUserProfileById(user.id)
  if (userEntity === null){
    createUserProfile(user.id, user.user_metadata.name, user.user_metadata.picture)
  }

  cookies.set("tt-access-token", access_token, {
    sameSite: "strict",
    path: "/",
    secure: true
  });

  cookies.set("tt-refresh-token", refresh_token, {
    sameSite: "strict",
    path: "/",
    secure: true
  });

  return redirect("/home");
};