import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-50 xl:w-100 opacity-30 pointer-events-none select-none transform-gpu hidden dark:block">
      <Image
        src="/top-left-img.png"
        width={411}
        height={405}
        className="w-full h-auto"
        style={{ width: "100%", height: "auto" }}
        alt="Top Left Decoration"
        priority
      />
    </div>
  );
};

export default TopLeftImg;
