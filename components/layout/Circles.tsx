import Image from "next/image";

const Circles = () => {
  return (
    <div className="w-50 xl:w-75 absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse z-10 pointer-events-none select-none transform-gpu">
      <Image
        src="/circles.png"
        width={450}
        height={273}
        className="w-full h-auto"
        style={{ width: "100%", height: "auto" }}
        alt="Circles decoration"
      />
    </div>
  );
};

export default Circles;
