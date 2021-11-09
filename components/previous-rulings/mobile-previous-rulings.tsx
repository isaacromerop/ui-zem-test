import ScrollContainer from "react-indiana-drag-scroll";
import { PersonAttr } from "../../services/persons";
import { Card } from "../card";

type MobilePreviousRulingsProps = {
  data: Array<PersonAttr>;
};

const MobilePreviousRulings = ({
  data,
}: MobilePreviousRulingsProps): React.ReactElement => {
  return (
    <div className="md:hidden">
      <ScrollContainer className="h-80 flex gap-x-4" vertical={false}>
        <section className="px-4 mr-2 h-full flex w-full justify-between">
          {data.map(
            ({
              votes,
              category,
              name,
              description,
              picture,
              lastUpdated,
              _id,
            }) => (
              <div
                key={name}
                className="cursor-move flex items-center justify-center w-72 h-72 flex-1 my-8 mx-2"
              >
                <div className="w-72 mr-4">
                  <Card
                    _id={_id}
                    name={name}
                    votes={votes}
                    category={category}
                    picture={picture}
                    description={description}
                    lastUpdated={lastUpdated}
                  />
                </div>
              </div>
            )
          )}
        </section>
      </ScrollContainer>
    </div>
  );
};

export { MobilePreviousRulings };
