import Link from "next/link";

export default function Navbar(){
    return (
        <nav >
            <div className="absolute z-50 p-2">
                <ul>
                    <div className="flex gap-3">
                        <Link href={'/'}>
                            <li>Home</li>
                        </Link>
                        <Link href={'/about'}>
                            <li>About</li>
                        </Link>
                    </div>
                </ul>
            </div>
        </nav>
    )
}