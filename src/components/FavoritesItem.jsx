import React from 'react'
import UserFavorite from './UserFavorite'


const FavoritesItem = ({favoriteObj}) => {
  return (
    <li>
      <p>{favoriteObj.user.name}</p>
      <p>{favoriteObj.user.position}</p>
      <p>{favoriteObj.user.experience}</p>
    <UserFavorite user={favoriteObj.user} />
    </li>
  )
}

export default FavoritesItem