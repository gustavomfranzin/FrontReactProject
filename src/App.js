import React from "react";
import Layout from "./components/layout/index";
import Profile from "./components/profile/index";
import Repositories from "./components/repositories/index";
import UseGithub from "./hooks/github-hooks";
import NoSearch from "./components/no-search/index";

function App() {
  const { githubState } = UseGithub();
  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
}

export default App;
