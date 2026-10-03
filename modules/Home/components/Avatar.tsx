import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
      <Image
        src="/avatar.png"
        width={700}
        height={700}
        alt="Avatar"
        priority
        className="translate-z-0 w-180 h-180 object-contain"
      />
    </div>
  );
};

export default Avatar;
