import React from 'react';
import Menu from './components/Menu';
import dadosIniciais from './components/data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carrocel from './components/Carousel';
//import Footer from './components/Footer';

function App() {
  return (
    <div>
     <Menu />

     <BannerMain 
      videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      url={dadosIniciais.categorias[0].videos[0].url}
      videoDescription={"O que faz uma desenvolvedora front-end? #HipstersPontoTube"}
     />

     <Carrocel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
     />
      <Carrocel
        category={dadosIniciais.categorias[1]}
     />
     <Carrocel
        category={dadosIniciais.categorias[2]}
     />
     <Carrocel
        category={dadosIniciais.categorias[3]}
     />

    </div>
  );
}

export default App;
