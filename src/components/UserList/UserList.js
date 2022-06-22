import React, { useEffect, useState } from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";

const UserList = ({ users, isLoading, toggleUser, checkIfFavorite , fetchUsers  }) => {
  const [hoveredUserId, setHoveredUserId] = useState();
  const [filters,setFilters]= useState([]);

  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };

  const handleFiltersChange = (value)=>{
    if(filters.includes(value)){
      setFilters(filters.filter(item=>item!==value));
    }
    else{
      setFilters([...filters,value]);
    }
  }

  const handleScroll = (ev) => {
    const {scrollTop, clientHeight, scrollHeight} = ev.currentTarget;
    if(Math.round(scrollHeight) - Math.round(scrollTop) - 1  <= Math.round(clientHeight)){
      if(fetchUsers) fetchUsers();
    }
  }

  const filteredUsers = filters.length===0?users:users.filter(user=>filters.includes(user.nat));
  return (
    <S.UserList>
      <S.Filters>
        <CheckBox value="BR" label="Brazil" onChange={handleFiltersChange} />
        <CheckBox value="AU" label="Australia" onChange={handleFiltersChange} />
        <CheckBox value="CA" label="Canada" onChange={handleFiltersChange} />
        <CheckBox value="DE" label="Germany" onChange={handleFiltersChange} />
        <CheckBox value="NZ" label="New Zealand" onChange={handleFiltersChange} />
      </S.Filters>
      <S.List onScroll={handleScroll} >
        {filteredUsers.map((user, index) => {
          return (
            <S.User
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <S.UserPicture src={user?.picture.large} alt="" />
              <S.UserInfo>
                <Text size="22px" bold>
                  {user?.name.title} {user?.name.first} {user?.name.last}
                </Text>
                <Text size="14px">{user?.email}</Text>
                <Text size="14px">
                  {user?.location.street.number} {user?.location.street.name}
                </Text>
                <Text size="14px">
                  {user?.location.city} {user?.location.country}
                </Text>
              </S.UserInfo>
              <S.IconButtonWrapper isVisible={index === hoveredUserId || checkIfFavorite(user)}>
                <IconButton onClick={()=>toggleUser(user)}>
                  <FavoriteIcon color="error" />
                </IconButton>
              </S.IconButtonWrapper>
            </S.User>
          );
        })}
        {isLoading && (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        )}
      </S.List>
    </S.UserList>
    );
  };

export default UserList;
