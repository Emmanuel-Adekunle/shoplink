import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axiosInstance";

// fetch user data from API
const fetchUser = async () => {
  const response = await axiosInstance.get("/api/logged-in-user");
  return response.data.user;
};

