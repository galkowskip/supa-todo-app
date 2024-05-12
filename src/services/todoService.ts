import supabase from "../supabaseConnector";

import type { Todo } from "../types/todo";

export class TodoService {
    static async getAll(): Promise<Todo[]> {
        const { data, error } = await supabase.from('todos').select()

        if (error) {
            console.error(error);
            return [] as Todo[];
        }

        return data as Todo[];
    }
}