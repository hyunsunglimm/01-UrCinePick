import axios from "axios";

export const fetchMovies = async (paramIds, setter) => {
  try {
    const responses = await Promise.all(
      paramIds.map((id) =>
        axios.get(`https://omdbapi.com/?apikey=ef297970&i=${id}`)
      )
    );
    const movieData = responses.map((response) => response.data);
    setter(movieData);
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};

export const fetchSearchMovies = async (
  { text, year = "Year", type = "Type" },
  setter
) => {
  try {
    const validYear = year === "Year" ? "" : year;
    const validType = type === "Type" ? "" : type;
    const response = await axios.get(
      `https://omdbapi.com/?apikey=ef297970&s=${text}&y=${validYear}&type=${validType}`
    );
    setter(response.data.Search);
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};
