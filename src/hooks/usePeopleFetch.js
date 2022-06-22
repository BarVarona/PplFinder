import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let pageNum=0;
  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    pageNum += 1;
    setIsLoading(true);
    const response = await axios.get(`https://randomuser.me/api/?results=25&page=${pageNum}`);
    setIsLoading(false);
    setUsers(users.concat(response.data.results));
  }

  return { users, isLoading, fetchUsers };
};
