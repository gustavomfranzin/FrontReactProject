import React from 'react';
import * as S from './styled';
import UseGithub from './../../hooks/github-hooks';
import { useState } from 'react';


const Header = () => {
    const  { getUser } = UseGithub();
    const [usernameForSearch, setUsernameForSearch] = useState()

    const submitGetUser = () =>{
        if(!usernameForSearch) return;
        return getUser(usernameForSearch)
    }
  return (
  <header>
    <S.Wrapper>
        <input type="text" placeholder="Digite o username para pesquisa ..." onChange={(event) => setUsernameForSearch(event.target.value)}/>
        <button type="submit" onClick={submitGetUser}><span>Buscar</span></button>
    </S.Wrapper>
  </header>
);
};

export default Header;