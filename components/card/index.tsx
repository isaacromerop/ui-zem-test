import Image from "next/image";
import { getDistanceDate } from "../../utils/dates";
import { useState } from "react";
import { ThumbDown, ThumbUp } from "../../public/assets/icons";

type CardProps = {
  name: string;
  description: string;
  category: string;
  picture: string;
  lastUpdated: string;
  votes: {
    positive: number;
    negative: number;
  };
};

const Card = ({
  name,
  description,
  category,
  picture,
  lastUpdated,
  votes,
}: CardProps): React.ReactElement => {
  const [seeAllDescription, setSeeAllDescription] = useState<boolean>(false);
  const [thumbUp, setThumbUp] = useState<boolean>(false);
  const [thumbDown, setThumbDown] = useState<boolean>(false);

  const totalVotes = votes.positive + votes.negative;
  const percentagePositiveVotes = Math.floor(
    (votes.positive / totalVotes) * 100
  );
  const percentageNegativeVotes = Math.floor(
    (votes.negative / totalVotes) * 100
  );

  const handleThumb = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    const type = e.currentTarget.value;
    if (type === "up") {
      if (thumbUp) {
        setThumbUp(false);
      } else {
        setThumbUp(true);
        setThumbDown(false);
      }
    } else {
      if (thumbDown) {
        setThumbDown(false);
      } else {
        setThumbDown(true);
        setThumbUp(false);
      }
    }
  };

  return (
    <div className="w-72 h-72 relative text-white md:w-full md:h-80 lg:h-72 lg:w-full">
      <div className="inset-0 absolute h-full w-full">
        <Image
          src={picture}
          alt=""
          layout="fill"
          className="object-cover filter brightness-75"
        />
      </div>
      <div className="relative flex flex-col justify-end h-full w-full">
        {votes.positive >= votes.negative ? (
          <div className="absolute h-9 w-9 top-1/4 bg-teal flex justify-center items-center">
            <ThumbUp />
          </div>
        ) : (
          <div className="absolute h-9 w-9 top-1/4 bg-yellow-300 flex justify-center items-center">
            <ThumbDown />
          </div>
        )}
        <div className="pl-10 pr-6">
          <p className="text-2xl mb-2">{name}</p>
          {seeAllDescription ? (
            <p className="text-sm pl-2">
              {`${description}`}{" "}
              <span
                onClick={() => setSeeAllDescription(false)}
                className="underline text-xs font-extralight"
              >
                see less
              </span>{" "}
            </p>
          ) : (
            <p className="text-sm pl-2">
              {`${description.slice(0, 50)}...`}{" "}
              <span
                onClick={() => setSeeAllDescription(true)}
                className="underline text-xs font-extralight"
              >
                see more
              </span>{" "}
            </p>
          )}
          <p className="text-xs text-right font-light mt-2">
            {getDistanceDate(new Date(lastUpdated), new Date(), true)}
            <span className="capitalize"> in {category}</span>
          </p>
          <div className="flex justify-end gap-x-4 mt-4">
            <button
              value="up"
              type="button"
              onClick={(e) => handleThumb(e)}
              className={`h-9 w-9 bg-teal flex justify-center items-center ${
                thumbUp ? "border-2 border-white" : ""
              }`}
            >
              <ThumbUp />
            </button>
            <button
              value="down"
              type="button"
              onClick={(e) => handleThumb(e)}
              className={`h-9 w-9 bg-yellow-300 flex justify-center items-center ${
                thumbDown ? "border-2 border-white" : ""
              }`}
            >
              <ThumbDown />
            </button>
            <button
              disabled={thumbUp || thumbDown}
              className={`h-9 w-24 border border-white bg-black bg-opacity-40 ${
                thumbUp || thumbDown ? "" : "opacity-40"
              }`}
            >
              Vote Now
            </button>
          </div>
        </div>
        <div className="flex w-full mt-6 h-10">
          <div
            style={{ width: `${percentagePositiveVotes}%` }}
            className="flex justify-start items-center gap-x-2 pl-4 bg-teal bg-opacity-70"
          >
            <ThumbUp />
            <p className="text-lg">{percentagePositiveVotes}%</p>
          </div>
          <div className="flex flex-grow justify-end items-center gap-x-2 pr-4 bg-yellow-300 bg-opacity-70">
            <p className="text-lg">{percentageNegativeVotes}%</p>
            <ThumbDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };
