import { supabase } from "./config";
import type { UserProfileEntity } from "./entity";

export const createUserProfile = async (userId: String, name: String, profilePicture: String): Promise<UserProfileEntity | null> => {
    const { data, error } = await supabase
        .from("tt_user_profile")
        .insert({ user_id: userId, name: name, profile_picture: profilePicture })
        .select("*")
        .single()

    if (error) {
        console.error(`Unable to create user: ${userId} with error ${error}`)
        return null
    }

    return data as UserProfileEntity
}

export const getUserProfileById = async (userId: String): Promise<UserProfileEntity | null> => {
    const { data, error } = await supabase
        .from("tt_user_profile")
        .select("*")
        .eq("user_id", userId)
        .single()

    if (error) {
        console.error(`Unable to read user: ${userId} with error ${error}`)
        return null
    }

    return data as UserProfileEntity
}
