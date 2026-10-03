import CountUp from "react-countup";

const AboutCounters = () => {
  return (
    <div className="flex flex-1 xl:gap-x-6">
      {/* GPA */}
      <div className="relative flex-1 after:w-px after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
        <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
          <CountUp start={0} end={3.71} decimals={2} duration={3} />
        </div>
        <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-25">
          IPK / GPA (Scale 4.0)
        </div>
      </div>

      {/* Experience */}
      <div className="relative flex-1 after:w-px after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
        <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
          <CountUp start={0} end={4} duration={3} /> +
        </div>
        <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-25">
          Years Tech Journey
        </div>
      </div>

      {/* Projects */}
      <div className="relative flex-1 after:w-px after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
        <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
          <CountUp start={0} end={15} duration={3} /> +
        </div>
        <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-25">
          Projects & Repos
        </div>
      </div>

      {/* Certifications */}
      <div className="relative flex-1">
        <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
          <CountUp start={0} end={2} duration={3} /> +
        </div>
        <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-25">
          Certified Credentials
        </div>
      </div>
    </div>
  );
};

export default AboutCounters;
