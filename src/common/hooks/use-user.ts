import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";
import { useMemo } from "react";
import { z } from "zod";
import {
  AddUserPayload,
  UpdateUserPayload,
  UserItem,
  ZAddUserPayload,
  ZUpdateUserPayload,
  ZUserItem,
} from "../types/user.type";
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

export function useAddUser(args?: {
  config?: UseMutationOptions<UserItem, Error, AddUserPayload, Array<any>>;
}) {
  const apiAuth = useApiAuth();

  const addUserMutation = useMutation(
    z
      .function()
      .args(ZAddUserPayload)
      .implement(async (payload: AddUserPayload) => {
        const { data } = await apiAuth.post("/users", { payload });

        return ZUserItem.parse(data);
      }),
    args?.config
  );

  return addUserMutation;
}

export function useUpdateUser(args?: {
  config?: UseMutationOptions<UserItem, Error, UpdateUserPayload, Array<any>>;
}) {
  const apiAuth = useApiAuth();

  const updateUserMutation = useMutation(
    z
      .function()
      .args(ZUpdateUserPayload)
      .implement(async (payload: UpdateUserPayload) => {
        const { userId, ...rest } = payload;

        const { data } = await apiAuth.put(`/users/${userId}`, rest);

        return ZUserItem.parse(data);
      }),
    args?.config
  );

  return updateUserMutation;
}

export function useDeleteUser(args?: {
  config?: UseMutationOptions<boolean, Error, string, Array<any>>;
}) {
  const apiAuth = useApiAuth();

  const updateUserMutation = useMutation(
    z
      .function()
      .args(z.string())
      .implement(async (userId: string) => {
        const { data } = await apiAuth.delete(`/users/${userId}`);

        return true;
      }),
    args?.config
  );

  return updateUserMutation;
}
