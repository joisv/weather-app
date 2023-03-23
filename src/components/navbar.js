import Link from "next/link";

export default function Navbar(){
    return (
        <nav >
            <div className="flex flex-wrap justify-center">
                <div className="absolute z-20 p-2 max-w-screen-sm mx-auto w-full right">
                    <ul>
                        <div className="flex gap-3 text-sm font-medium  justify-end">
                            <Link href={'/'}>
                                <li>// home</li>
                            </Link>
                            <Link href={'/about'}>
                                <li>// about</li>
                            </Link>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}