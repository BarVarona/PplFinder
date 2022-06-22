import {useLocalStorage } from "./useLocalStorage";

export function useFavorites(){
const [favUsers,setFavUsers] = useLocalStorage('favoritesUsers',{}) 

function toggleUser(user){
    if (favUsers.includes(user)) {
        setFavUsers(favUsers.filter(favorite => favorite != user))
      }
      else {
        setFavUsers([...favUsers, user])
      }
}
function checkIfFavorite(userEmail){
    return favUsers.includes(userEmail);
    
}

return {toggleUser, favList:Object.values(favUsers) , checkIfFavorite};
}
