import React from 'react';

import bigmac from '../../assets/bigmac.svg';
import bigmac_p from '../../assets/bigmac_p.svg';
import batata from '../../assets/batata.svg';
import sorvete from '../../assets/sorvete.svg';

import* as S from './main_style';
import { useState } from 'react';

export default function Main() {

    const [pedido, setPedido] = useState(bigmac);
    
  return (
    <S.Main>
        <section>
            <div class='imagem'>
                <img src={pedido} alt="" />
                <h1>Bateu aquela <span>#fome</span> de <span>méqui</span>?</h1>
            </div>
        </section>

        <section>
            <div class='imagens'>
                <img onClick={(e) => {setPedido(bigmac)}} src={bigmac_p} alt="" />
                <img onClick={(e) => {setPedido(batata)}} src={batata} alt="" />
                <img onClick={(e) => {setPedido(sorvete)}} src={sorvete} alt="" />
            </div>
            
        </section>

        <section class='parte2'>
            <h2>Promoção</h2>
        </section>
    </S.Main>
  )
}
