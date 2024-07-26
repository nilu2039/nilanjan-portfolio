import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-medium underline decoration-4 decoration-primary underline-offset-4 text-xl">
        Notable Projects
      </p>
      <ul className="leading-8 list-disc list-inside">
        <li>
          <Link
            href="https://flixr.nilanjan.xyz/"
            target="_blank"
            className="font-bold underline"
          >
            Flixr - Automated YouTube Video Upload Tool:
          </Link>{" "}
          Developed a tool to automate YouTube video uploads with a seamless
          approval workflow. Utilized Express for the backend, Next.js for the
          frontend, and integrated the YouTube Data API v3. Leveraged Docker,
          PostgreSQL, and Redis for robust data management.
        </li>
        <li>
          <Link
            href="https://kaigi.nilanjan.xyz/"
            target="_blank"
            className="font-bold underline"
          >
            Kaigi - Real-time Video Chat:
          </Link>{" "}
          Designed a real-time video chat application with seamless peer-to-peer
          communication via WebRTC. Featured enhanced real-time messaging with
          Socket.IO and a collaborative whiteboard. Built with Next.js for the
          frontend and Fastify for the backend.
        </li>
      </ul>
    </div>
  );
};

export default Projects;
