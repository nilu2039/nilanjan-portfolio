import { NAME } from "@/constants";
import {
  DownloadIcon,
  GitHubLogoIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import NextLink from "next/link";
import { Link, animateScroll } from "react-scroll";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const navLinks = [
  {
    id: 0,
    label: "Works",
    icon: null,
    to: "works",
    type: "internal",
  },
  {
    id: 1,
    label: "Projects",
    icon: null,
    to: "projects",
    type: "internal",
  },
  {
    id: 2,
    label: "Resume",
    icon: <DownloadIcon />,
    to: "/docs/resume.pdf",
    type: "external",
  },
  {
    id: 3,
    label: "Source",
    icon: <GitHubLogoIcon className="w-4 h-4" />,
    to: "https://github.com/nilu2039/nilanjan-portfolio",
    type: "external",
  },
];

const NavBar = () => {
  return (
    <nav className="backdrop-blur-md fixed top-0 overflow-hidden grid grid-cols-[1fr_auto] w-11/12 md:w-4/5 lg:w-8/12 px-4 py-8">
      <p
        className="text-xl lg:text-2xl font-medium cursor-pointer"
        onClick={() => {
          animateScroll.scrollToTop();
        }}
      >
        {NAME}
      </p>
      <div className="hidden md:flex justify-between gap-6">
        {navLinks.map((link) =>
          link.type === "internal" ? (
            <Link
              key={link.id}
              to={link.to}
              smooth
              offset={-100}
              duration={500}
              className="hover:underline hover:text-primary flex flex-row gap-1 items-center cursor-pointer"
            >
              {link.icon}
              {link.label}
            </Link>
          ) : (
            <NextLink
              key={link.id}
              href={link.to}
              target="_blank"
              rel="noopener noreferrer"
              locale={false}
              download
              className="hover:underline hover:text-primary flex flex-row gap-1 items-center cursor-pointer"
            >
              {link.icon}
              {link.label}
            </NextLink>
          )
        )}
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <HamburgerMenuIcon className="block md:hidden cursor-pointer w-5 h-5" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {navLinks.map((link) => (
            <DropdownMenuItem key={link.id}>
              {link.type === "internal" ? (
                <Link
                  to={link.to}
                  smooth
                  offset={-100}
                  duration={500}
                  className="flex flex-row gap-1 items-center"
                >
                  {link.icon}
                  {link.label}
                </Link>
              ) : (
                <NextLink
                  key={link.id}
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  locale={false}
                  download
                  className="flex flex-row gap-1 items-center "
                >
                  {link.icon}
                  {link.label}
                </NextLink>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default NavBar;
