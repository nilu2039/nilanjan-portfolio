import { NAME } from "@/constants";

const About = () => {
  return (
    <div id="about" className="flex flex-col gap-4">
      <p className="font-medium underline decoration-4 decoration-primary underline-offset-4 text-xl">
        About
      </p>
      <p className="font-normal text-lg">
        {`Hello! I'm ${NAME}, a dedicated and innovative software engineer with a passion for developing seamless user experiences and robust backend solutions. With extensive hands-on experience in both frontend and backend development, I thrive on creating efficient, scalable, and user-friendly applications.`}
      </p>
      <p className="font-medium underline underline-offset-4 text-base">
        Skills & Technologies
      </p>
      <ul className="leading-8 list-disc list-inside">
        <li>
          <span className="font-bold">Languages: </span>TypeScript, JavaScript,
          Go, Python, SQL
        </li>
        <li>
          <span className="font-bold">Technologies & Tools: </span>
          Next.js, Docker, AWS, S3, React Native, Express, MySQL, PostgreSQL,
          Git
        </li>
      </ul>
    </div>
  );
};

export default About;
