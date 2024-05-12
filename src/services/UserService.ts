import supabase from "../supabaseConnector";

import { AuthError, User } from "@supabase/supabase-js";

export class UserService {
    static async getCurrentUser(): Promise<User | null> {
        const { data, error} = await supabase.auth.getSession();

        if (error || !data) {
            console.error(error);
            return null;
        }

        const user = data.session?.user

        if (!user) {
            return null;
        }

        return user
    }

    static async loginWithPassword(email: string, password: string): Promise<{ data: User | null, error: AuthError | null }> {
        const { error, data } = await supabase.auth.signInWithPassword({
            email,
            password
        });


        if (data?.session) supabase.auth.setSession(data.session);

        return { data: data?.user || null, error };
    }

    static async signUp(email: string, password: string): Promise<{
        data: User | null,
        error: AuthError | null
    }> {
        const { error, data } = await supabase.auth.signUp({
            email,
            password
        });

        return { data: data?.user || null, error };
    }

    static async signOut(): Promise<void> {
        await supabase.auth.signOut();
    }
}