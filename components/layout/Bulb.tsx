import Image from "next/image";

const Bulb = () => {
  return (
    <div className="absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px] pointer-events-none select-none">
      <Image
        src="/bulb.png"
        width={260}
        height={200}
        className="w-full h-full"
        alt="Bulb decoration"
      />
    </div>
  );
};

export default Bulb;
