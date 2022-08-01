import React from 'react';
import Menu from '../../Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../BannerMain';
import Carrocel from '../../Carousel';
import Footer from '../../Footer';

function Home() {
  return (
    <div style={{ background: 'black' }}>
     <Menu />

     <BannerMain 
      videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      url={dadosIniciais.categorias[0].videos[0].url}
      videoDescription={"Estrelando: Louis Hofmann,Oliver Masucci,Jördis Triebel"}
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
     <Footer/>

    </div>
  );
}

export default Home;
