import React from 'react';

import* as S from './main_style';

export default function Card({imagem, texto}) {
  return (
    <S.Card>
      <section>
          <div class='card'>
            <div class='teste'>
                <img src={imagem} alt="img" />
                <p>{texto}</p>
                <button>Clique aqui</button>
            </div>
          </div>
      </section>
    </S.Card>
  )
}
