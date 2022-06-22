import React from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { usePeopleFetch,useFavorites } from "hooks";
import * as S from "./style";

const Home = () => {
  const { users, isLoading, fetchUsers  } = usePeopleFetch();
  const {toggleUser,checkIfFavorite}=useFavorites();

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>
        <UserList users={users} isLoading={isLoading} toggleUser={toggleUser} checkIfFavorite={checkIfFavorite} fetchUsers={fetchUsers} />
      </S.Content>
    </S.Home>
  );
};

export default Home;
