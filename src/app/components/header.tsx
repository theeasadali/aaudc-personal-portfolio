import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return(
        <header>
            <div className="container">
                <Image src={"/AUDC\ LOGO.svg"} height={50} width={100} alt="Asad's Unique Design & Code"/>
                <nav>
                    <Link href={"/about-me"}>About me</Link>
                    <Link href={"/contact-me"}>Contact me</Link>
                    <Link href={"/free tools"}>Free Tools</Link>
                </nav>
            </div>
        </header>
    )
}