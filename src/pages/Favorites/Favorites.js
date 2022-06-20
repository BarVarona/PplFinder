import React, { useEffect, useState } from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { usePeopleFetch, useLocalStorage } from "hooks";
import * as S from "./style"

const Favorites = () => {


  return (
    <S.Favorites>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Favorites
          </Text>
        </S.Header>
        <UserList users={users} isLoading={isLoading}  />
      </S.Content>
    </S.Favorites>
  );
};

export default Favorites;
