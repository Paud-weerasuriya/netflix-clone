const API_KEY = "7d2a99ce552f390a6ae4338439b744b5";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixoriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: ` /movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY} Swith_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}Swith_genres=35`,
  fetchtorrorMovies: `/discover/movie api_key=${API_KEY} Swith_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}Swith_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}Swith_genres=99`,
};
export default requests;