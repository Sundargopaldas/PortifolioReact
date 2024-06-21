
export default function Navbar(){

    return(

     <div className="container-fluid">
     <div className="row">
     <div className="col-sm">
<nav className="navbar navbar-expand-lg  ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
     <img className="logo" src="/img/logo-spencer-8.png" alt="logo" width="60" ></img>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto fw-bold">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/sobre">Sobre</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/trabalhos">Trabalhos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contato">Contato</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


</div>
</div>
</div>




    )
}