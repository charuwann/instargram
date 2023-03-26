import React from "react";
import { createContext } from "react";

import PostList from "./PostList";
import Profile from "./Profile";

export const DefaultPage = createContext();
function Page() {
  const mode = "dark";
  return (
    <DefaultPage.Provider value={mode}>
      <Profile/>
      <PostList/>
    </DefaultPage.Provider>
  );
}

export default Page;