import React from "react";
import * as S from "./styled";
import Header from './../header/index';
import UseGithub from './../../hooks/github-hooks';


const Layout = ({ children }) => {
  const { githubState } = UseGithub();
  return (<S.WrapperLayout>
  <Header/>
  {githubState.loading ? <p>Loading</p> : <>{children}</>}
  </S.WrapperLayout>
  
)};

export default Layout;
