
import React from 'react'
import imgQuarent from '/src/assets/img/Site-Quarentena.png'
import imgCorp from '/src/assets/img/CorposCelestes.png'
import imgEsZ from '/src/assets/img/Essenzialle.png'

export default function Trabalhos() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12'>
        <h2 className='work-text d-flex justify-content-center'>Projetos Realizados</h2>
        </div>
        <div className='col'>
        <div className='works'>
          <div className='img-works img-fluid d-flex justify-content-center'>
          <img src={imgQuarent} alt="" />
          </div>
               <div className='title-link d-flex justify-content-center'>
                    <a  href="https://www.quarentenadadevocao.com.br/">Site-QuarentenaDaDevoção</a>
                    </div>

        </div><br /><br />

</div>
 

<div className='col'>
        <div className='works d-flex justify-content-center' >
          <div className='img-works img-fluid'>
          <img src={imgCorp} alt="" />
          </div>
        </div>
      </div>

      <div className='col'>
        <div className='works d-flex justify-content-center' >
          <div className='img-works img-fluid'>
          <img src={imgEsZ} alt="" />
          </div>
        </div>
      </div>




      </div>
    </div>




    









  )
}

