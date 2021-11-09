import Image from "next/image";
import { getDistanceDate } from "../../utils/dates";
import { useState } from "react";
import { ThumbDown, ThumbUp } from "../../public/assets/icons";
import { PersonAttr, useVotePerson } from "../../services/persons";

type CardProps = {
  _id: PersonAttr["_id"];
  name: PersonAttr["name"];
  description: PersonAttr["description"];
  category: PersonAttr["category"];
  picture: PersonAttr["picture"];
  lastUpdated: PersonAttr["lastUpdated"];
  votes: {
    positive: PersonAttr["votes"]["positive"];
    negative: PersonAttr["votes"]["negative"];
  };
};

const Card = ({
  name,
  description,
  category,
  picture,
  lastUpdated,
  votes,
  _id,
}: CardProps): React.ReactElement => {
  const [seeAllDescription, setSeeAllDescription] = useState<boolean>(false);
  const [thumbUp, setThumbUp] = useState<boolean>(false);
  const [thumbDown, setThumbDown] = useState<boolean>(false);
  const [successVote, setSuccessVote] = useState<boolean>(false);

  const { mutateAsync } = useVotePerson(_id);

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

  const handleVote = (): void => {
    if (successVote) {
      setSuccessVote(false);
      return;
    }

    const newVotes = {
      ...votes,
      positive: thumbUp ? votes.positive + 1 : votes.positive,
      negative: thumbDown ? votes.negative + 1 : votes.negative,
    };

    mutateAsync({
      category,
      description,
      lastUpdated,
      name,
      picture,
      votes: newVotes,
    });

    setThumbDown(false);
    setThumbUp(false);
    setSuccessVote(true);
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
          {successVote ? (
            <p className="text-xs text-right font-light mt-2">
              Thank you for your vote!
            </p>
          ) : (
            <p className="text-xs text-right font-light mt-2">
              {getDistanceDate(new Date(lastUpdated), new Date(), true)}
              <span className="capitalize"> in {category}</span>
            </p>
          )}
          <div className="flex justify-end gap-x-4 mt-4">
            <button
              disabled={successVote}
              value="up"
              type="button"
              onClick={(e) => handleThumb(e)}
              className={`h-9 w-9 bg-teal flex justify-center ${
                successVote ? "opacity-40" : ""
              } items-center ${thumbUp ? "border-2 border-white" : ""}`}
            >
              <ThumbUp />
            </button>
            <button
              disabled={successVote}
              value="down"
              type="button"
              onClick={(e) => handleThumb(e)}
              className={`h-9 w-9 bg-yellow-300 flex justify-center ${
                successVote ? "opacity-40" : ""
              } items-center ${thumbDown ? "border-2 border-white" : ""}`}
            >
              <ThumbDown />
            </button>
            <button
              disabled={thumbUp || thumbDown || successVote ? false : true}
              className={`h-9 w-24 border border-white bg-black bg-opacity-40 ${
                thumbUp || thumbDown || successVote ? "" : "opacity-40"
              }`}
              onClick={handleVote}
            >
              {successVote ? "Vote Again" : "Vote Now"}
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
