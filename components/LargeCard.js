import Image from "next/image";

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <section className="relative py-16">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-16 left-12">
        <h3 className="text-4xl mb-3 w-128">{title}</h3>
        <p>{description}</p>
        <button
          className="text-white bg-cyan-900 px-4 py-2 
        cursor-pointer rounded-lg mt-5 text-xl
        hover:scale-105 transform transition duration-300
        ease-out"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
