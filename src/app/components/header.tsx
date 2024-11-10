"use client"
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const navOpen = () => {
        const navMobile = document.getElementsByClassName('mobile-nav');
        navMobile[0].classList.toggle("active")
    }

    const navClose = () => {
        const navMobile = document.getElementsByClassName('mobile-nav');
        navMobile[0].classList.remove("active");
    }
    return(
        <header>
            <div className="container">
                <Link href={"/"}><Image src={"/AUDC\ LOGO.svg"} height={40} width={100} alt="Asad's Unique Design & Code"/></Link>
                <nav>
                    <Link href={"/about-me"}>About me</Link>
                    <Link href={"/contact-me"}>Contact me</Link>
                    <Link href={"/free-tools"}>Free Tools</Link>
                </nav>
                    <Image src={"/hamburger\ icon.svg"} height={24} width={24} alt="hamburger icon" className="hamburger-icon" onClick={navOpen}/>
            </div>
            <div className="mobile-nav container">
                <div>
                    <Link href={"/about-me"}>About me</Link>
                    <Link href={"/contact-me"}>Contact me</Link>
                    <Link href={"/free-tools"}>Free Tools</Link>
                </div>
                <Image src={"/cross.svg"} height={24} width={24} alt="hamburger icon" onClick={navClose}/>
            </div>
        </header>
    )
}