import { PersonAttr } from "../../services/persons";
import { Card } from "../card";

type TabletDesktopPreviousRulingsProps = {
  data: Array<PersonAttr>;
  view: string;
};

const TabletDesktopPreviousRulings = ({
  data,
  view,
}: TabletDesktopPreviousRulingsProps): React.ReactElement => {
  return (
    <div
      className={`hidden h-auto w-full px-4 mt-10 gap-4 ${
        view === "Grid" ? "grid-cols-2" : "grid-cols-1"
      }  md:grid lg:${
        view === "Grid" ? "grid-cols-3" : "grid-cols-1"
      } lg:px-24`}
    >
      {data.map((each) => (
        <Card
          _id={each._id}
          key={each.name}
          name={each.name}
          votes={each.votes}
          picture={each.picture}
          category={each.category}
          description={each.description}
          lastUpdated={each.lastUpdated}
        />
      ))}
    </div>
  );
};

export { TabletDesktopPreviousRulings };
