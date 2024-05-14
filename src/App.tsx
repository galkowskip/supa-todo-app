import { useEffect, useState } from "react";
import Router from "./router";

import type { User } from "@supabase/supabase-js";

import { UserService } from "./services/UserService";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import UserStore from "./store";

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
    <Provider store={UserStore}>
      <div className="App">
        <button onClick={signOut}>Sign Out</button>

        <RouterProvider router={Router} />
      </div>
    </Provider>
  );
}

export default App;
