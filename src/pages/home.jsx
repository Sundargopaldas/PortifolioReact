import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Trabalhos from './trabalhos'
import '../styles/home.css'
import BanerHome from '/img/home banner-100.jpg'
import Sobre from './sobre'
export default function Home() {
useEffect(()=>{

Aos.init({})
}),[]

  return (
    <div className='container-fluid'>
    <div className='row'>
    <div className='col'>
      <div className='bannerHome object-contain img-fluid'>
   <img  src={BanerHome} alt=""></img>
</div>
   <Sobre/>
   <Trabalhos/>
   
    </div>
    </div>
    </div>
    
  )
}
