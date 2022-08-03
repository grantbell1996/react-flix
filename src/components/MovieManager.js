export const fetchSingleMovieFromAPI = (async (movieId) => {
    return await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=e623222adcf057666d3c1dd36f72f3d6`
    ).then((data) => data.json())

})