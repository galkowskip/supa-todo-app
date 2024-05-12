import { useEffect, useState } from "react";
import Router from "./router";

import { UserService } from "./services/UserService";
import type { User } from "@supabase/supabase-js";
import { RouterProvider } from "react-router-dom";

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await UserService.getCurrentUser();


      setUser(user);
    };

    fetchUser();
  }, []);

  const signOut = async () => {
    await UserService.signOut();
    setUser(null);
  }

  return (
    <div className="App">
      <button onClick={signOut}>Sign Out</button>

      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
