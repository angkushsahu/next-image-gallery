import Search from "./search";
import Link from "next/link";

export default function Header() {
   return (
      <header className="bg-black/[0.85] sticky top-0 z-10 p-2 backdrop-blur-md">
         <nav className="flex flex-col gap-4 sm:flex-row sm:justify-between items-center p-4 font-bold max-w-6xl mx-auto text-white">
            <h1 className="text-2xl sm:text-3xl text-center whitespace-nowrap">
               <Link href="/">Next.js Image Gallery</Link>
            </h1>
            <Search />
         </nav>
      </header>
   );
}
