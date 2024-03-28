import React from 'react';
import Header from './components/Header/Header';
import Card from './components/Main/Card';

import * as S from './components/Header/header_style';

export default function App() {
  return (
    <>
    <S.GlobalStyle/>
    <Header/>

    <Card imagem = {''} texto = {'Teste 1'}/>
    <Card imagem = {''} texto = {'Teste 2'}/>
    <Card imagem = {''} texto = {'Teste 3'}/>
    </>
  );
}
