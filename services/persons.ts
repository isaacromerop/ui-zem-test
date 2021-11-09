import axios from "axios";
import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";

const authAxios = axios.create({
  baseURL: "http://localhost:4000/",
});

const GET_PERSONS_ENDPOINT = "persons";
const VOTE_PERSON_ENDPOINT = (_id: string): string =>
  `${GET_PERSONS_ENDPOINT}/${_id}`;
const PERSONS_KEY = GET_PERSONS_ENDPOINT;

type PersonAttr = {
  _id: string;
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

const useGetPersons = (): UseQueryResult<Array<PersonAttr>> => {
  const queryResult = useQuery(PERSONS_KEY, async () => {
    const response = await authAxios.get<Array<PersonAttr>>(
      GET_PERSONS_ENDPOINT
    );

    return response.data;
  });

  return queryResult;
};

const useVotePerson = (
  _id: string
): UseMutationResult<PersonAttr, unknown, Omit<PersonAttr, "_id">> => {
  const queryClient = useQueryClient();

  const mutationResult = useMutation(
    async ({
      category,
      description,
      votes,
      lastUpdated,
      name,
      picture,
    }: Omit<PersonAttr, "_id">) => {
      const response = await authAxios.patch<PersonAttr>(
        VOTE_PERSON_ENDPOINT(_id),
        {
          category,
          description,
          votes,
          lastUpdated,
          name,
          picture,
        }
      );

      return response.data;
    },
    { onSuccess: () => queryClient.invalidateQueries(PERSONS_KEY) }
  );

  return mutationResult;
};

export { useGetPersons, useVotePerson };
export type { PersonAttr };
