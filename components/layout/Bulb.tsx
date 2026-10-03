import Image from "next/image";

const Bulb = () => {
  return (
    <div className="absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-50 xl:w-65 pointer-events-none select-none">
      <Image
        src="/bulb.png"
        width={256}
        height={392}
        className="w-full h-auto"
        style={{ width: "100%", height: "auto" }}
        alt="Bulb decoration"
      />
    </div>
  );
};

export default Bulb;
