import Link from "next/link";
import Image from "next/image";
export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-info">
                <Link href={"/"}><Image src={"/AUDC\ LOGO\ Light.svg"} height={40} width={100} alt="Asad's Unique Design & Code"/></Link>
                <Link href={"tel:+923053174570"}>+92 305 3174570</Link>
                <Link href={"mailto:theeasadali@gmail.com"}>theeasadali@gmail.com</Link>
                </div>
                <div className="footer-links">
                    <p>Explore</p>
                    <Link href={"/about-me"}>About Me</Link>
                    <Link href={"/contact-me"}>Contact Me</Link>
                    <Link href={"/free-tools"}>Free Tools</Link>
                </div>
            </div>
            <p>&copy;copyright AUDC 2024-25. All right reserved.</p>
        </footer>
    )
}