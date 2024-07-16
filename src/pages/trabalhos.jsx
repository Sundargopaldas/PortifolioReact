
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import '../styles/trabalhos.css'
import  Img from '/img/flor.jpg'
import  Img2 from '/img/lotus de vidro.jpg'
import  Img3 from '/img/olho oculto.jpg'
import  Img4 from '/img/outras imagens-100.jpg'
import  Img5 from '/img/pedaços de imagens-100.jpg'
import  Img6 from '/img/selvagem.jpg'
import  Img7 from '/img/Sem Título-1.jpg'
import  Img8 from '/img/passaros.jpg'
import  Img9 from '/img/planeta.jpg'
import  Img10 from '/img/visão.jpg'
import  Img11 from '/img/retrato.jpg'
import  Img12 from '/img/Reflexões.jpg'
import  Img13 from '/img/rena.jpg'
import  Img14 from '/img/shock.jpg'
import  Img15 from '/img/Lotus Estilizada.jpg'
import  imgQuarentena from '/img/Quarentena.png'
import  imgEssenziale from '/img/essenziale.png'
import  imgCorposCelestes from '/img/corposCelestes.png'



export default function Trabalhos() {
 
  
useEffect(()=>{

Aos.init({})
}),[]

  return (
      <section className='trabalhos'>
     <div className="container">
     <div className="row mt-5">
     <div className="col-sm col-md mt-3">

     <h3 className="works-text d-flex justify-content-center">ALGUNS TRABALHOS DE DESIGN ARTISTICO</h3>
     </div>

     <div className="container text-center">
  <div className="row align-items-start">
    <div className="col m-4">
      <div className='imagem' data-aos='flip-right'>
      <img  src={Img} alt='img'></img>
      </div>
    </div>
    <div className="col mt-4">
      <div className='imagem' data-aos='flip-right'>
      <img src={Img2} alt='img'></img>
      </div>
    </div>
    <div className="col m-4">
      <div className='imagem' data-aos='flip-right'>
      <img src={Img3} alt='img'></img>
      </div>
    </div>

<div className="col m-4">
      <div className='imagem'data-aos='fade-up'>
      <img src={Img4} alt='img'></img>
      </div>
    </div>

<div className="col m-4">
      <div className='imagem'data-aos='fade-up'>
      <img src={Img5} alt='img'></img>
      </div>
    </div>
<div className="col m-4">
      <div className='imagem'data-aos='fade-up'>
      <img src={Img6} alt='img'></img>
      </div>
    </div>

<div className="col m-4">
      <div className='imagem'data-aos='flip-right'>
      <img src={Img7} alt='img'></img>
      </div>
    </div>

<div className="col m-4">
      <div className='imagem'data-aos='flip-right'>
      <img src={Img8} alt='img'></img>
      </div>
    </div>

<div className="col m-4">
      <div className='imagem'data-aos='flip-right'>
      <img src={Img9} alt='img'></img>
      </div>
    </div>

<div className="col m-4">
      <div className='imagem'data-aos='flip-right'>
      <img src={Img10} alt='img'></img>
      </div>
    </div>
<div className="col m-4">
      <div className='imagem'data-aos='flip-right'>
      <img src={Img11} alt='img'></img>
      </div>
    </div>
<div className="col m-4">
      <div className='imagem'data-aos='flip-right'>
      <img src={Img12} alt='img'></img>
      </div>
    </div>

<div className="col m-4">
      <div className='imagem'data-aos='flip-right'>
      <img src={Img13} alt='img'></img>
      </div>
    </div>
<div className="col m-4">
      <div className='imagem'data-aos='flip-right'>
      <img src={Img14} alt='img'></img>
      </div>
    </div>

<div className="col m-4">
      <div className='imagem'data-aos='flip-right'>
      <img src={Img15} alt='img'></img>
      </div>
    </div>
  </div>
</div>
</div>
</div>
<div className="container">
     <div className="row">
     <div className="col-sm col-md">

<h3 className="works-text-projetos d-flex justify-content-center"> PROJETOS DE SITES DESENVOLVIDOS</h3>


<div className="container text-center">
  <div className="row align-items-start">
    <div className="col ">
      <div className='sites mt-4' data-aos='fade-up'>
      <img src={imgQuarentena} alt='img'></img>
      </div>
    </div>
    <div className="col ">
      <div className='sites mt-4' data-aos='fade-up'>
      <img src={imgEssenziale} alt='img'></img>
      </div>
    </div>
    <div className="col">
      <div className='sites mt-4' data-aos='fade-up'>
      <img src={imgCorposCelestes} alt='img'></img>
      </div>
    </div>




     </div>
     </div>
     </div>

</div>
</div>
</section>
 )
}
