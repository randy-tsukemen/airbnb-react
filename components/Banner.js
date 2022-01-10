import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-screen">
      <Image
        // src="https://pbs.twimg.com/media/FIFq_AhaAAAew_e?format=jpg&name=4096x4096"
        src="https://pbs.twimg.com/media/FIoV2kKaQAkAhH8?format=jpg&name=large"
        layout="fill"
        objectFit="cover"
        objectPosition="center 20%"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
      </div>
    </div>
  );
};

export default Banner;
