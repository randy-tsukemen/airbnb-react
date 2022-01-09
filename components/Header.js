import Image from "next/image";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5">
      {/* left */}
      <div className="relative flex items-center h-32 cursor-pointer">
        <Image
          src="https://pbs.twimg.com/media/FInd8i-XwAIv8kp?format=jpg"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Middle */}
      <div></div>
      {/* Right */}
      <div></div>
    </header>
  );
};

export default Header;
