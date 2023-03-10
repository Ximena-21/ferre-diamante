// import Link from 'next/link';
import React from 'react';
import Image from 'next/image'

import logo from '.././src/assets/logo.png'
// import { navLinks } from '@config';
// import { IconLogo } from '@components/icons/index'
// import { Menu } from '@components/index'

const Header = () => {
    //   const ResumeLink = (
    //     <a className=" button button--small" href="/resume.pdf" target="_blank" rel='noreferrer'>
    //       Curriculum
    //     </a>
    //   );

    return (
        <div className="header">

            <div className="header__icon" onClick={openMenu}>
                <svg className='menu' width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H19C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.48043 20 0.734784 20 1C20 1.26522 19.8946 1.51957 19.7071 1.70711C19.5196 1.89464 19.2652 2 19 2H1C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1Z" fill="white" />
                    <path d="M0 7.032C0 6.76678 0.105357 6.51243 0.292893 6.32489C0.48043 6.13735 0.734784 6.032 1 6.032H19C19.2652 6.032 19.5196 6.13735 19.7071 6.32489C19.8946 6.51243 20 6.76678 20 7.032C20 7.29721 19.8946 7.55157 19.7071 7.73911C19.5196 7.92664 19.2652 8.032 19 8.032H1C0.734784 8.032 0.48043 7.92664 0.292893 7.73911C0.105357 7.55157 0 7.29721 0 7.032Z" fill="white" />
                    <path d="M1 12.064C0.734784 12.064 0.48043 12.1694 0.292893 12.3569C0.105357 12.5444 0 12.7988 0 13.064C0 13.3292 0.105357 13.5836 0.292893 13.7711C0.48043 13.9586 0.734784 14.064 1 14.064H19C19.2652 14.064 19.5196 13.9586 19.7071 13.7711C19.8946 13.5836 20 13.3292 20 13.064C20 12.7988 19.8946 12.5444 19.7071 12.3569C19.5196 12.1694 19.2652 12.064 19 12.064H1Z" fill="white" />
                </svg>
                <svg width="14" className='close hidden' height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.64341 6.99901L13.6552 1.99813C13.8747 1.77862 13.998 1.48091 13.998 1.17048C13.998 0.860046 13.8747 0.562331 13.6552 0.342824C13.4358 0.123318 13.1381 0 12.8277 0C12.5173 0 12.2196 0.123318 12.0002 0.342824L7 5.35536L1.99983 0.342824C1.78036 0.123318 1.48268 -2.31288e-09 1.1723 0C0.861913 2.31288e-09 0.56424 0.123318 0.344765 0.342824C0.125289 0.562331 0.00198911 0.860046 0.00198911 1.17048C0.00198911 1.48091 0.125289 1.77862 0.344765 1.99813L5.35659 6.99901L0.344765 11.9999C0.235521 12.1083 0.148811 12.2372 0.0896384 12.3792C0.0304655 12.5213 0 12.6736 0 12.8275C0 12.9814 0.0304655 13.1338 0.0896384 13.2758C0.148811 13.4179 0.235521 13.5468 0.344765 13.6552C0.453117 13.7644 0.582027 13.8512 0.724059 13.9103C0.866091 13.9695 1.01843 14 1.1723 14C1.32616 14 1.47851 13.9695 1.62054 13.9103C1.76257 13.8512 1.89148 13.7644 1.99983 13.6552L7 8.64265L12.0002 13.6552C12.1085 13.7644 12.2374 13.8512 12.3795 13.9103C12.5215 13.9695 12.6738 14 12.8277 14C12.9816 14 13.1339 13.9695 13.2759 13.9103C13.418 13.8512 13.5469 13.7644 13.6552 13.6552C13.7645 13.5468 13.8512 13.4179 13.9104 13.2758C13.9695 13.1338 14 12.9814 14 12.8275C14 12.6736 13.9695 12.5213 13.9104 12.3792C13.8512 12.2372 13.7645 12.1083 13.6552 11.9999L8.64341 6.99901Z" fill="white" />
                </svg>

            </div>
            <div className="header__logo">
                <Image src={logo} alt='logo' className="logo" />
            </div>
            <nav id="menuHeader" className="header__menu">
                <ul className="menu-container">
                    <li id="home"><a href="#inicio">Home</a></li>
                    <li id="intro" ><a href="#nosotros">Nosotros</a></li>
                    <li id="proceso"><a href="#categorias">Categoria</a></li>
                    <li id="productos"><a href="#servicios">Servicios</a></li>
                </ul>
            </nav>

        </div>

    )
}



function openMenu() {
    let menu : any = document.querySelector('#menuHeader')
    menu.classList.toggle("menu--visibility")

    let menuIcon : any = document.querySelector('.menu')
    let closeIcon : any = document.querySelector('.close')
      menuIcon.classList.toggle("hidden")
      closeIcon.classList.toggle("hidden")

}

export default Header