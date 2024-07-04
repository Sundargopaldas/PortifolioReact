import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Trabalhos from './trabalhos'
import '../styles/home.css'
import BanerHome from '/img/home banner-100.jpg'
import Sobre from './sobre'
import Contato from './contato'
export default function Home() {
useEffect(()=>{

Aos.init({})
}),[]

  return (
    <div className='container-fluid'>
    <div className='row'>
    <div className='col'>
      <div className='bannerHome'>
   <img  src={BanerHome} alt=""></img>
</div>
   <Sobre/>
   <Trabalhos/>
   <Contato/>
   

   
    </div>
    </div>
    </div>
    
  )
}
