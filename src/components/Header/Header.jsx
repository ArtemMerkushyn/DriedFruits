import { Link, NavLink, useLocation } from 'react-router-dom';
import { IoIosCall } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import styles from './Header.module.css';
import { useState } from 'react';

export const Header = () => {
    const [ navbar, setNavbar ] = useState(false);
    const location = useLocation();
    return (
        <header className={styles.header}>
            <div className={styles.header__wrapper} style={{ maxWidth: '1722px', width: '100%', margin: '0 auto', padding: '0 5px'}}>
            <div className={styles.header__item}>
                <Link to={'/'} className={styles.logo}>
                    <img src='./img/main/logo.svg' alt='logo' />
                </Link>
                <nav className={styles.nav}>
                    <Link className={location.pathname === '/' ? styles.active : styles.inactive} to={'/'}>Main</Link>
                    <NavLink className={location.pathname === '/catalog' ? styles.active : styles.inactive} to={'/catalog'}>Catalog</NavLink>
                    <NavLink className={location.pathname === '/about' ? styles.active : styles.inactive} to={'/about'}>About us</NavLink>
                    <NavLink className={location.pathname === '/delivery' ? styles.active : styles.inactive} to={'/delivery'}>Delivery</NavLink>
                    <NavLink className={location.pathname === '/shops' ? styles.active : styles.inactive} to={'/shops'}>Shops</NavLink>
                    <NavLink className={location.pathname === '/contacts' ? styles.active : styles.inactive} to={'/contacts'}>Contacts</NavLink>
                </nav>
            </div>
            <div className={styles.header__item}>
                <a className={styles.call} href="tel:+48123456789"><IoIosCall />+48123456789</a>
                <NavLink className={styles.favorites} to={'/favorites'}>Favorites</NavLink>
                <Link className={styles.cart} to={'/cart'}>
                    Cart
                    <span>3</span>
                </Link>
                <button className={styles.navbar__btn} onClick={() => setNavbar(true)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div className={styles.navbar} style={{ transform: navbar ? 'translateY(0%)' : 'translateY(-100%)' }}>
                <Link className={location.pathname === '/' ? styles.active : styles.inactive} to={'/'} onClick={() => setNavbar(false)}>
                    Main
                </Link>
                <NavLink className={location.pathname === '/catalog' ? styles.active : styles.inactive} to={'/catalog'} onClick={() => setNavbar(false)}>Catalog</NavLink>
                <NavLink className={location.pathname === '/about' ? styles.active : styles.inactive} to={'/about'} onClick={() => setNavbar(false)}>About us</NavLink>
                <NavLink className={location.pathname === '/delivery' ? styles.active : styles.inactive} to={'/delivery'}onClick={() => setNavbar(false)}>Delivery</NavLink>
                <NavLink className={location.pathname === '/shops' ? styles.active : styles.inactive} to={'/shops'}onClick={() => setNavbar(false)}>Shops</NavLink>             
                <NavLink className={location.pathname === '/contacts' ? styles.active : styles.inactive} to={'/contacts'}onClick={() => setNavbar(false)}>Contacts</NavLink>
                <button className={styles.close} style={{opacity: 1}} onClick={() => setNavbar(false)}><IoClose/></button>
            </div>
            </div>
        </header>
    );
}
