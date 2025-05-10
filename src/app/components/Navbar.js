"use client";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { CiHeart, CiBag1, CiUser, CiSaveDown1, CiSaveUp1 } from "react-icons/ci";
import NavbarStyles from "../styles/navbar.module.css";
import Image from 'next/image';
import Logo from "../images/appLogo.png";
import { useState } from "react";

export default function Navbar() {
    const [status, setStatus] = useState(false);
    const handleClick = () => {
        setStatus(!status);
        console.log(status);
    };

    return (
        <nav className={NavbarStyles.navbar}>
            <div className={NavbarStyles.navbar_top}>
                <div className={NavbarStyles.navbar_logo}>
                    <a href="/" className={NavbarStyles.navbar_a}>DotMax</a>
                </div>
                <div>
                    <a href="/"><Image src={Logo} width={75}
                        height={75} alt="Logo" /></a>
                </div>
                <div className={NavbarStyles.navbar_search}>
                    <FaMagnifyingGlass />
                    <CiHeart />
                    <CiBag1 />
                    <CiUser />
                    <select name="language" id="language-select" className={NavbarStyles.language_select}>
                        <option value="en">English</option>
                        <option value="ar" dir="rtl">العربية</option>
                        <option value="fr">Français</option>
                        <option value="es">Español</option>
                    </select>
                </div>
            </div>
            <div>
                <div>

                </div>
                <div className={NavbarStyles.navbar_bottom}>
                    <ul className={`${NavbarStyles.navbar_links} + ${(status ? NavbarStyles.navbar_links_active : "")}`}>
                        <li>
                            <a href="/" className={NavbarStyles.navbar_a}>SHOP</a>
                        </li>
                        <li>
                            <a href="/skills" className={NavbarStyles.navbar_a}>SKILLS</a>
                        </li>
                        <li>
                            <a href="/stories" className={NavbarStyles.navbar_a}>STORIES</a>
                        </li>
                        <li>
                            <a href="/about" className={NavbarStyles.navbar_a}>ABOUT</a>
                        </li>
                        <li>
                            <a href="/contact" className={NavbarStyles.navbar_a}>CONTACT US</a>
                        </li>
                        <CiSaveDown1 className={`${NavbarStyles.dragdown} ${status ? NavbarStyles.goUp : ""}`} onClick={() => handleClick()} />
                    </ul>
                </div>
            </div>
        </nav>
    );
}