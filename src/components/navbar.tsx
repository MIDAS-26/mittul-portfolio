import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-6 py-3">
      <ul className="flex items-center gap-6 text-sm font-medium text-neutral-300">
        <li>
          <Link href="#home" className="hover:text-white transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link href="#resume" className="hover:text-white transition-colors">
            Experience
          </Link>
        </li>
        <li>
          <Link href="#projects" className="hover:text-white transition-colors">
            Projects
          </Link>
        </li>
        <li>
          <Link href="#contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}