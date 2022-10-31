import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useMemo } from "react";
import { z } from "zod";
import { UserItem, ZUserItem } from "../types/user.type";
import useApiAuth from "./use-api";

export function useUsers(args?: {
  classroomId: string;
  config?: UseQueryOptions<UserItem[], Error, UserItem[], Array<any>>;
}) {
  const apiAuth = useApiAuth();

  const fetchUsers = useMemo(
    () =>
      z
        .function()
        .args()
        .implement(async () => {
          const { data } = await apiAuth.get(`/users`);
          return data.data.map((item: UserItem) => ZUserItem.parse(item));
        }),
    []
  );

  const getUsersQuery = useQuery(
    ["get-users-query"],
    () => fetchUsers(),
    args?.config
  );

  return getUsersQuery;
}
