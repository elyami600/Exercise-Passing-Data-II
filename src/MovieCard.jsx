import UsersList from "./UsersList"

const MovieCard = ({ users, usersWhoLikeMovie, movieInfo }) => {
  return(
    <div>
     <li key={movieInfo.id}>
       <h2>{movieInfo.name}</h2>
       <h3>Liked By:</h3>
       <UsersList 
         usersWhoLikeMovie={usersWhoLikeMovie} 
         users={users}/>
     </li>
    </div>
  )
}
export default MovieCard;