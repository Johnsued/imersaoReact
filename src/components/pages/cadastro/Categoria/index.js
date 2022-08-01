import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../../../FormField';
import PageDefault from '../../../PageDefault';


function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategoria] = useState([[]]);
  const [values, setValues] = useState(valoresIniciais);
  
  


  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    })
    
  }

  function HandleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategoria([
          ...categorias,
          values
        ]);

        setValues(valoresIniciais)
      }}>

      <FormField 
        type="text"
        name="nome"
        value={values.nome}
        onChange={HandleChange}
      />

        <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={HandleChange}
            />
          </label>
        </div>

        <FormField 
        type="color"
        name="cor"
        value={values.cor}
        onChange={HandleChange}
      />

       {/*<div>
          <label>
            Cor:
            <input
              type="color"
              value={values.cor}
              name="color"
              onChange={HandleChange}
            />
          </label>
    </div>*/} 

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;