import React from 'react'

export default function Card({imagem, texto}) {
  return (
    <div>
        <div>
            <img src={imagem} alt="img" />
            <p>{texto}</p>
            <button>Clique aqui</button>
        </div>
    </div>
  )
}
