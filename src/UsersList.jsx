const UsersList = ({ users, usersWhoLikeMovie }) => {
  if(!usersWhoLikeMovie || usersWhoLikeMovie.length === 0) {
    return<p>None of the current users liked this movie.</p>
  }
  const listOfItems = usersWhoLikeMovie.map((id) => (
    <li key={id}>
      <p>{users[id].name}</p>
    </li>
  ))
  
  return(
    <div>
      <ul>{listOfItems}</ul>
    </div>
  )
}
export default UsersList;