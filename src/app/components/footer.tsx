import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <p>&copy;copyright AUDC 2024-25. All right reserved.</p>
                <div className="footer-links">
                    <Link href={"/about-me"}>About Me</Link>
                    <Link href={"/contact-me"}>Contact Me</Link>
                    <Link href={"/free-tools"}>Free Tools</Link>
                </div>
            </div>
        </footer>
    )
}