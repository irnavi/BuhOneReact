import { Link } from 'react-scroll';
import styles from './header.module.css';
import image from "./image/logo.svg";


function Header() {

    

    return(
        <header>
            <div className={styles.container}> 
            
                <div className={styles.nav}>
                    <div className={styles.nav_img}> 
                        <img src={image} alt="logo" />
                        <p>BuhOne</p>
                    </div>
                    
                    <ul className={styles.nav_ul}>
                        <li><Link to="home_id" smooth={true} duration={500}>Главная</Link></li>
                        <li><Link to="service_id" smooth={true} duration={500}>Услуги</Link></li>
                        <li><Link to="clients_id" smooth={true} duration={500}>Кейсы</Link></li>
                        <li><Link to="about_id" smooth={true} duration={500}>О компании</Link></li>
                        <li><Link to="footer_id" smooth={true} duration={500}>Контакты</Link></li>
                    </ul>

                   
                </div>
           
            </div>
        </header>
    )
}

export default Header