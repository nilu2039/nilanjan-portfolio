import { NAME } from "@/constants";
import { Github, Menu } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const navLinks = [
  {
    id: 0,
    label: "About",
    icon: null,
  },
  {
    id: 1,
    label: "Works",
    icon: null,
  },
  {
    id: 2,
    label: "Projects",
    icon: null,
  },
  {
    id: 3,
    label: "Source",
    icon: <Github size={15} />,
  },
];

const NavBar = () => {
  return (
    <nav className="backdrop-blur-md fixed top-0 overflow-hidden grid grid-cols-[1fr_auto] w-11/12 md:w-9/12 md:8/12 lg:w-7/12 px-4 py-8">
      <p className="text-xl md:text-2xl font-medium">{NAME}</p>
      <div className="hidden md:flex justify-between gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.id}
            href={"#"}
            className="hover:underline hover:text-primary flex flex-row gap-1 items-center"
          >
            {link.icon}
            {link.label}
          </Link>
        ))}
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Menu className="block md:hidden cursor-pointer" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {navLinks.map((link) => (
            <DropdownMenuItem key={link.id}>
              <Link href={"#"} className="flex flex-row gap-1 items-center">
                {link.icon}
                {link.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default NavBar;
