import React from 'react';
import Header from './components/Header/Header';
import Card from './components/Main/Card';
import Main from './components/Main/Main';
import Banner_sofa from './assets/Banner_sofa.png';
import Banner_rest from './assets/Banner_rest.png';
import Banner_medidas from './assets/Banner_medidas.png';

import * as S from './components/Header/header_style';

export default function App() {
  return (
    <>
    <S.GlobalStyle/>
    <Header/>
    <Main/>

    <Card imagem = {Banner_sofa} texto = {'Que tal um #MéquiNoSofá?'}/>
    <Card imagem = {Banner_rest} texto = {'Venha conhecer nossa nova loja'}/>
    <Card imagem = {Banner_medidas} texto = {'Confira as medidas que o Méqui adotou!'}/>
    </>
  );
}
