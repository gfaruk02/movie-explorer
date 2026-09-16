const MovieCard = ({movie}) => {
    console.log("object", movie)
  return (
    <div>MovieCard : { movie.name}</div>
  );
};

export default MovieCard;