
import imgLogo from '/src/assets/img/SPENCER.png'
export default function Navbar() {
  return (
      <section id='home'>
     <div className='container-fluid'>
    <div className='row'>
    <div className='col-12'>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top " aria-label="Offcanvas navbar large">
    <div className="container-fluid">
      <div className='imgLogo'>
      <img src={imgLogo}/>
      </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
        <div className="offcanvas-header">
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#trabalhos">Trabalhos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
    </div>
    </div>
  </div> 
  </section> 
  ) 
}
