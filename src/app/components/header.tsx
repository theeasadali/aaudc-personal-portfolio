import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return(
        <header>
            <div className="container">
                <Link href={"/"}><Image src={"/AUDC\ LOGO.svg"} height={40} width={100} alt="Asad's Unique Design & Code"/></Link>
                <nav>
                    <Link href={"/about-me"}>About me</Link>
                    <Link href={"/contact-me"}>Contact me</Link>
                    <Link href={"/free-tools"}>Free Tools</Link>
                </nav>
            </div>
        </header>
    )
}