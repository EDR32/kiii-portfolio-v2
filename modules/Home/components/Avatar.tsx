import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
      <Image
        src="/avatar.png"
        width={737}
        height={678}
        alt="Avatar"
        priority
        className="translate-z-0 w-full h-full object-contain"
      />
    </div>
  );
};

export default Avatar;
