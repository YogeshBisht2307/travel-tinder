import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supbase/config";
import type { Provider } from "@supabase/supabase-js";

const redirectUrl = import.meta.env.GOOGLE_OAUTH_REDIRECT_URL

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
    const formData = await request.formData();
    const provider = formData.get("provider")?.toString();

    const validProviders = ["google"];
    if (provider && validProviders.includes(provider)) {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: provider as Provider,
            options: {
                redirectTo: redirectUrl
            },
        });

        if (error) {
            return new Response(error.message, { status: 500 });
        }

        return redirect(data.url);
    }

    return new Response("Server Error", { status: 500 });
};