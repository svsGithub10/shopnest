import React from 'react';
import { Link } from 'react-router-dom'
import Facebook from '../../Assets/icons/facebook.svg';
import Twitter from '../../Assets/icons/twitter.svg';
import Instagram from '../../Assets/icons/instagram.svg';
import Linkedin from '../../Assets/icons/linkedin.svg';
import Github from '../../Assets/icons/github.svg';
import logo from '../../Assets/logo-blue.png';
const FooterTop = () => {
    return (
        <div className="container lg:px-12 py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col text-gray-500">
            <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                <Link to="/" className="flex title-font font-extrabold items-center md:justify-start justify-center text-primary">
                <img className="w-50" src={logo} alt="" />
                </Link>
                <p className="mt-2 text-sm">They key is to have every key, the key to open every door. the key to open every. the key to open every.</p>
                <div className="flex justify-center mt-4">
                    <Link to="https://www.facebook.com/share/z5pkrAedjLB1V6wD/" className="mr-6 ">
                        <img src={Facebook} alt="" className='w-6 h-6' />
                    </Link>
                    <Link to="https://www.linkedin.com/in/shantveeresh-sheelavantar-3193061b7/" className="mr-6 ">
                        <img src={Linkedin} alt="" className='w-7 h-7' />
                    </Link>
                    <Link to="https://x.com/SVSheelavantar" className="mr-6 ">
                        <img src={Twitter} alt="" className='w-6 h-6' />
                    </Link>
                    <Link to="https://www.instagram.com/_s_v_sheelavantar_/" className="mr-6 ">
                        <img src={Instagram} alt="" className='w-7 h-7' />
                    </Link>
                    <Link to="https://github.com/svsGithub10/" className="mr-6 ">
                        <img src={Github} alt="" className='w-6 h-6' />
                    </Link>
                </div>
            </div>
            <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-bold text-primary tracking-widest text-sm mb-3">CATEGORIES</h2>
                    <nav className="list-none mb-10">
                        <li>
                            <Link to="shop?category=Electronics" className="hover:text-secondary">Electronics</Link>
                        </li>
                        <li>
                            <Link to="shop?category=Fashion" className="hover:text-secondary">Fashion</Link>
                        </li>
                        <li>
                            <Link to="shop?category=Laptop" className="hover:text-secondary">Laptop</Link>
                        </li>
                        <li>
                            <Link to="shop?category=Watch" className="hover:text-secondary">Watches</Link>
                        </li>
                    </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-bold text-primary tracking-widest text-sm mb-3">BRANDS</h2>
                    <nav className="list-none mb-10">
                        <Link to="shop?brand=Apple">
                            <span className="hover:text-secondary">Apple</span>
                        </Link>
                        <Link to="shop?brand=Samsung">
                            <span className="hover:text-secondary">Samsung</span>
                        </Link>
                        <Link to="shop?brand=GUESS">
                            <span className="hover:text-secondary">GUESS</span>
                        </Link>
                        <Link to="shop?brand=Casio">
                            <span className="hover:text-secondary">Casio</span>
                        </Link>
                    </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-bold text-primary tracking-widest text-sm mb-3">QUICK LINKS</h2>
                    <nav className="list-none mb-10">
                        <li>
                            <Link to="policy" className="hover:text-secondary">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="policy" className="hover:text-secondary">Terms & Condition</Link>
                        </li>
                        <li>
                            <Link to="policy" className="hover:text-secondary">Shippin & Returns</Link>
                        </li>
                        <li>
                            <Link to="contact" className="hover:text-secondary">Contact Us</Link>
                        </li>
                    </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-bold text-primary tracking-widest text-sm mb-3">CONTACT</h2>
                    <nav className="list-none mb-10">
                        <li className='flex items-center justify-center md:justify-start'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="mr-3 h-5 w-5">
                                <path
                                    d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                <path
                                    d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                            </svg>
                            BTM Layout, Bengaluru-560068
                        </li>
                        <li className='flex items-center justify-center md:justify-start'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="mr-3 h-5 w-5">
                                <path
                                    d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                <path
                                    d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                            </svg>
                            shantaveereshvs@gmail.com
                        </li>
                        <li className='flex items-center justify-center md:justify-start'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="mr-3 h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                    clipRule="evenodd" />
                            </svg>
                            +918431983269
                        </li>
                        <li className='flex items-center justify-center md:justify-start'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="mr-3 h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z"
                                    clipRule="evenodd" />
                            </svg>
                            + 01 234 567 89
                        </li>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default FooterTop;