import CountUp from "react-countup";
import { aboutCountersData } from "@/modules/About/utils/constants";

const AboutCounters = () => {
  return (
    <div className="flex flex-1 xl:gap-x-6">
      {aboutCountersData.map((counter, index) => {
        const isLast = index === aboutCountersData.length - 1;
        return (
          <div
            key={counter.label}
            className={`relative flex-1 ${
              !isLast
                ? "after:w-px after:h-full after:bg-border after:absolute after:top-0 after:right-0"
                : ""
            }`}
          >
            <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
              <CountUp
                start={0}
                end={counter.value}
                decimals={counter.decimals}
                duration={3}
              />
              {counter.suffix ? counter.suffix : ""}
            </div>
            <div className="text-sm sm:text-sm uppercase tracking-[1px] leading-[1.4] max-w-25 text-muted-foreground font-medium">
              {counter.label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutCounters;
