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
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

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
    <nav className="backdrop-blur-md fixed top-0 overflow-hidden flex flex-row justify-between w-11/12 md:w-4/5 lg:w-8/12 px-4 pb-2 pt-4 items-center gap-4">
      <p
        className="text-xl lg:text-2xl font-medium cursor-pointer"
        onClick={() => {
          animateScroll.scrollToTop();
        }}
      >
        {NAME}
      </p>
      <div className="flex flex-1 gap-4 justify-end">
        <div className="hidden lg:flex justify-end gap-6 flex-1 ">
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
        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="flex lg:hidden">
              <HamburgerMenuIcon className="w-5 h-5" />
            </Button>
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
      </div>
    </nav>
  );
};

export default NavBar;
