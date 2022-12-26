import { unycosInstanceApi } from "./api";

export async function getSpotlights() {
  const response = await unycosInstanceApi.get(
    "/u/courses/spotlights/natacion",
    {
      headers: {
        ["Content-Type"]: "application/json",
        ["x-mejor-key"]: "unycos",
      },
    }
  );

  return response.data.spotlights;
}
