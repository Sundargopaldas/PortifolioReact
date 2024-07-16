import logo from'/img/logo-spencer-8.png'
import '../styles/footer.css'
export default function Footer(){

    return(
        
        <div className="footer bg-light">
            <div className='logoSpencer'>
            <img src={logo} alt="logoSpencer" />
            </div>
            <p>Copy Right {new Date().getFullYear()}</p>
        
        </div>
        

    )
}