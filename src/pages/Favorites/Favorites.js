import React, { useEffect, useState } from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { usePeopleFetch, useLocalStorage, useFavorites } from "hooks";
import * as S from "./style"

const Favorites = () => {

const {toggleUser, favList , checkIfFavorite} = useFavorites()

  return (
    <S.Favorites>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
             Favorites List
          </Text>
        </S.Header>
        <UserList users={favList} toggleUser={toggleUser} checkIfFavorite={checkIfFavorite} />
      </S.Content>
    </S.Favorites>
  );
};

export default Favorites;
