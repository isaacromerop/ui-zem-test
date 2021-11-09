import Image from "next/image";
import people from "../../public/assets/img/bg-people.@2x.png";

const AddPerson = (): React.ReactElement => {
  return (
    <div
      style={{ backgroundImage: "url" }}
      className="relative bg-gray-50 flex gap-x-3 mx-4 mt-4 lg:mx-32 lg:gap-x-0"
    >
      <div className="inset-0 absolute h-full w-full">
        <Image
          src={people}
          alt=""
          layout="fill"
          className="object-cover"
          placeholder="blur"
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-white bg-opacity-75 py-4 px-8 h-full w-full relative text-black md:flex-row">
        <p className="text-center text-2xl md:text-xl md:mr-4">
          Is there anyone else you would want us to add?
        </p>
        <button className="w-full border-2 text-lg border-black p-2 mt-2 transition hover:bg-black hover:text-white md:w-1/3">
          Submit a name
        </button>
      </div>
    </div>
  );
};

export { AddPerson };
