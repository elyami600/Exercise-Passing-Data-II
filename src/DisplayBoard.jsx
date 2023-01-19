import MovieCard from "./MovieCard"

const DisplayBoard = ({usersByMovie, movies, users}) => {

//console.log(usersByMovie)
  const movieCards = Object.keys(movies).map((id) => (
    <MovieCard
      key={id}
      users={users}
      usersWhoLikeMovie={usersByMovie[id]}
      movieInfo={movies[id]}
      />
  ));
return (
	<div>
    <ul>{movieCards}</ul>
	</div>
)
}

export default DisplayBoard
