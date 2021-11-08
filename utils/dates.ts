import { formatDistance } from "date-fns";

const getDistanceDate = (from: Date, to: Date, suffix: boolean): string =>
  formatDistance(from, to, { addSuffix: suffix });

export { getDistanceDate };
