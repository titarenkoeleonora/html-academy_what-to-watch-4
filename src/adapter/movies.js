export const createMovie = (data) =>{
  return {
    id: data.id,
    title: data.name,
    poster: data.poster_image,
    previewImage: data.preview_image,
    bgImage: data.background_image,
    backgroundColor: data.background_color,
    src: data.video_link,
    previewVideoLink: data.preview_video_link,
    description: data.description,
    rating: data.rating,
    votes: data.scores_count,
    director: data.director,
    starring: data.starring,
    runTime: data.run_time,
    genre: data.genre,
    date: data.released,
    isFavorite: data.is_favorite,
  };
};
