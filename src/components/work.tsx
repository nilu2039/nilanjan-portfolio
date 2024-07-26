const Work = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-medium underline decoration-4 decoration-primary underline-offset-4 text-xl">
        Professional Expertise
      </p>
      <p className="font-normal text-lg">
        My journey as a software engineer has equipped me with a versatile skill
        set and the ability to tackle complex challenges. At{" "}
        <span className="font-extrabold">StepOut</span> Remote, I have a proven
        track record of integrating diverse technologies to enhance application
        functionality and user engagement. Here are some highlights of my
        expertise:
      </p>
      <ul className="leading-8 list-disc list-inside">
        <li>
          <span className="font-bold">Frontend Development: </span>Creating
          intuitive user interfaces with Next.js and React Native, integrating
          chart libraries and Skia Graphics for enhanced visual experiences.
        </li>
        <li>
          <span className="font-bold">Payment Gateway Integration: </span>
          Implementing the Razorpay payment gateway to handle secure and
          efficient transaction processes.
        </li>
        <li>
          <span className="font-bold">Analytics and Insights: </span>
          Utilizing MixPanel and Google Analytics 4 to gain valuable insights
          into user interactions and improve decision-making processes.
        </li>
        <li>
          <span className="font-bold">Seamless Updates: </span>
          Delivering over-the-air updates with CodePush in React Native,
          minimizing user downtime.
        </li>
        <li>
          <span className="font-bold">Multi-Language Support: </span>
          Expanding user bases by integrating multi-language support, making
          applications accessible to a broader audience.
        </li>
        <li>
          <span className="font-bold">Backend Development: </span>
          Optimizing performance and scalability, improving video upload
          solutions with multi-part uploads, and implementing Lambda functions
          using Playwright for tasks such as PDF generation and merging.
        </li>
      </ul>
    </div>
  );
};

export default Work;
