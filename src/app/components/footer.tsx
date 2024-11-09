import Link from "next/link";
import Image from "next/image";
export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-info">
                <Link href={"/"}><Image src={"/AUDC\ LOGO.svg"} height={40} width={100} alt="Asad's Unique Design & Code"/></Link>
                </div>
                <div className="footer-links">
                    <p>Explore</p>
                    <Link href={"/about-me"}>About Me</Link>
                    <Link href={"/contact-me"}>Contact Me</Link>
                    <Link href={"/free-tools"}>Free Tools</Link>
                </div>
            <p>&copy;copyright AUDC 2024-25. All right reserved.</p>
            </div>
        </footer>
    )
}