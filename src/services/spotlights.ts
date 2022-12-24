import api from "./api";

export async function getSpotlights() {
  const response = await api.get("/u/courses/spotlights/natacion", {
    headers: {
      ["Content-Type"]: "application/json",
      ["x-mejor-key"]: "unycos",
    },
  });

  return response.data.spotlights;
}
