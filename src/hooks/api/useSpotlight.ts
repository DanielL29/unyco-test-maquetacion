import useAsync from "../useAsync";
import { getSpotlights } from "../../services/spotlights";

export interface Spotlight {
  _id: string;
  title: string;
  description: string;
  order: number;
  image: string;
}

export default function useSpotlight() {
  const { data, error, loading, act } = useAsync<Spotlight[]>(getSpotlights);

  return {
    spotlights: data,
    createSpotlightsError: error,
    createSpotlightsLoading: loading,
    getSpotlights: act,
  };
}
