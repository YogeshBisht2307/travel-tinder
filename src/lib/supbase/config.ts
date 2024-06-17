import { createClient } from "@supabase/supabase-js";
import { createServerClient } from '@supabase/ssr'

export const supabase = createClient(
  import.meta.env.SUPABASE_URL,
  import.meta.env.SUPABASE_ANON_KEY,
  {
    auth: {
      flowType: "pkce",
      autoRefreshToken: false
    },
  },
);

export const supabaseServer = createServerClient(
  import.meta.env.SUPABASE_URL,
  import.meta.env.SUPABASE_ANON_KEY
);
