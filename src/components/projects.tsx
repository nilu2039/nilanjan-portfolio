import flixrProjectImage from "@/assets/images/flixr.png";
import kaigiProjectImage from "@/assets/images/kaigi.png";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  href,
  repos = [],
}: {
  title: string;
  description: string;
  image: StaticImageData;
  tags: string[];
  href: string;
  repos: {
    title: string;
    url: string;
  }[];
}) => {
  return (
    <div className="">
      <Link href={href} target="_blank">
        <Card className="cursor-pointer">
          <CardHeader>
            <CardTitle className="hover:underline">{title}</CardTitle>
            <CardDescription className="flex flex-col">
              <Image src={image} alt={title + " Image"} />
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className=" flex flex-row items-center justify-center gap-4 flex-wrap">
              {tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </Link>
      <div className="flex flex-row items-center justify-center gap-4">
        {repos.map((repo) => (
          <Button
            key={repo.url}
            variant="outline"
            size="sm"
            className="flex flex-row gap-2 rounded-none"
            asChild
          >
            <Link href={repo.url} target="_blank">
              <GitHubLogoIcon className="w-5 h-5" />
              <p>{repo.title}</p>
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-medium underline decoration-4 decoration-primary underline-offset-4 text-xl">
        Notable Projects
      </p>
      <div className="flex flex-col gap-6">
        <ProjectCard
          href="https://flixr.nilanjan.xyz/"
          title="Flixr - Automated YouTube Video Upload Tool"
          description="A tool to automate YouTube video uploads with a seamless approval
          workflow. Utilized Express for the backend, Next.js for the
          frontend, and integrated the YouTube Data API v3. Leveraged
          Docker, PostgreSQL, and Redis for robust data management."
          image={flixrProjectImage}
          tags={[
            "Express",
            "Next.js",
            "Docker",
            "Youtube Data API V3",
            "PostgreSQL",
            "Redis",
          ]}
          repos={[
            {
              title: "Client",
              url: "https://github.com/nilu2039/flixr-client",
            },
            {
              title: "Server",
              url: "https://github.com/nilu2039/flixr-server",
            },
          ]}
        />
        <ProjectCard
          href="https://kaigi.nilanjan.xyz/"
          title="Kaigi - Real-time Video Chat"
          description="Designed a real-time video chat application with seamless peer-to-peer
          communication via WebRTC. Featured enhanced real-time messaging with
          Socket.IO and a collaborative whiteboard. Built with Next.js for the
          frontend and Fastify for the backend."
          image={kaigiProjectImage}
          tags={[
            "Next.js",
            "Fastify",
            "WebRTC",
            "Socket.IO",
            "Redis",
            "Docker",
          ]}
          repos={[
            {
              title: "Client",
              url: "https://github.com/nilu2039/kaigi-client",
            },
            {
              title: "Server",
              url: "https://github.com/nilu2039/kaigi-server",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Projects;
