import { useEffect } from "react";
import Router from "./router";

import { UserService } from "./services/UserService";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import UserStore from "./store";

function App() {
  useEffect(() => {
    const fetchUser = async () => {
      await UserService.getCurrentUser();
    };

    fetchUser();
  }, []);

  const signOut = async () => {
    await UserService.signOut();
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
