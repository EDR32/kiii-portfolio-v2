import CountUp from "react-countup";

const AboutCounters = () => {
  return (
    <div className="flex flex-1 xl:gap-x-6">
      {/* Experience */}
      <div className="relative flex-1 after:w-px after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
        <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
          <CountUp start={0} end={10} duration={5} /> +
        </div>
        <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-25">
          Years of experience
        </div>
      </div>

      {/* Clients */}
      <div className="relative flex-1 after:w-px after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
        <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
          <CountUp start={0} end={250} duration={5} /> +
        </div>
        <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-25">
          Satisfied clients
        </div>
      </div>

      {/* Projects */}
      <div className="relative flex-1 after:w-px after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
        <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
          <CountUp start={0} end={650} duration={5} /> +
        </div>
        <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-25">
          Finished projects
        </div>
      </div>

      {/* Awards */}
      <div className="relative flex-1">
        <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
          <CountUp start={0} end={8} duration={5} /> +
        </div>
        <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-25">
          Winning awards
        </div>
      </div>
    </div>
  );
};

export default AboutCounters;
