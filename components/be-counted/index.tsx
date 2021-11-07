import { useState } from "react";
import { Close } from "../../public/assets/icons";

const BeCounted = (): React.ReactElement => {
  const [visible, setVisible] = useState<string>("inline-block");

  return (
    <div
      className={`bg-gray-50 ${visible} flex gap-x-3 m-4 p-3 lg:py-6 lg:mx-32 lg:gap-x-0`}
    >
      <div className="w-2/5 flex flex-col justify-center text-center md:w-1/4 lg:w-1/5">
        <p className="text-sm font-light">Speak out. Be heard.</p>
        <p className="text-2xl font-bold">Be counted</p>
      </div>
      <div className="relative w-3/5 md:w-3/4">
        <p className="text-sm inline-block font-light md:text-base lg:w-4/5">
          Rule of Thumb is a crowd sourced court of public opinion where anyone
          and everyone can speak out and speak freely. It&apos;s easy: You share
          your opinion, we analyze and put the data in a public report.
        </p>
      </div>
      <div
        onClick={() => setVisible("hidden")}
        className="hidden justify-center items-center lg:flex"
      >
        <Close className="text-2xl" />
      </div>
    </div>
  );
};

export { BeCounted };
