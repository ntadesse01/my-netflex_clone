 
 const API_KEY = process.env.REACT_APP_API_KEY;
   

 const requests =  {

    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
 
 
 export default requests

 

// https://api.themoviedb.org/3/discover/tv?api_key=9d1b683ef99e55f00965f0bd10db8903&with_networks=213
// https://api.themoviedb.org/3/yJjxO44EvaMYeeM9VHXHzdZ1kYL.jpg