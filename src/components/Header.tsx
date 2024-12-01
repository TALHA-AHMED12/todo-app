import Link from "next/link"

export default function Header(){
    return(
        <nav className="bg-slate-400 h-12">
            <ul className="flex items-center justify-center py-3 gap-8  font-extrabold ">
            <li className="hover:text-white transition duration-1000"><Link href= "#">Home</Link></li>
            <li className="hover:text-white transition duration-1000"><Link href= "#">About</Link></li>
            <li className="hover:text-white transition duration-1000"><Link href= "#">Setting</Link></li>
            </ul>
        </nav>
    )
}