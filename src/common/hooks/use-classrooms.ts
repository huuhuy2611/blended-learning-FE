import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";
import { useMemo } from "react";
import { z } from "zod";
import {
  AddClassroomPayload,
  ClassroomItem,
  UpdateClassroomPayload,
  ZAddClassroomPayload,
  ZClassroomItem,
  ZUpdateClassroomPayload,
} from "../types/classroom.type";
import useApiAuth from "./use-api";

export function useClassroomsByUser(args?: {
  userId: string;
  config?: UseQueryOptions<ClassroomItem[], Error, ClassroomItem[], Array<any>>;
}) {
  const apiAuth = useApiAuth();

  const fetchClassrooms = useMemo(
    () =>
      z
        .function()
        .args(z.string())
        .implement(async (userId: string) => {
          const { data } = await apiAuth.get(
            `/classrooms/classrooms-by-user/${userId}`
          );
          return data.map((item: unknown) => ZClassroomItem.parse(item));
        }),
    []
  );

  const getClassroomsByUserQuery = useQuery(
    ["get-classrooms-by-user-query", args?.userId],
    () => fetchClassrooms(args?.userId || ""),
    args?.config
  );

  return getClassroomsByUserQuery;
}

export function useClassrooms(args?: {
  classroomId: string;
  config?: UseQueryOptions<ClassroomItem[], Error, ClassroomItem[], Array<any>>;
}) {
  const apiAuth = useApiAuth();

  const fetchClassrooms = useMemo(
    () =>
      z
        .function()
        .args()
        .implement(async () => {
          const { data } = await apiAuth.get(`/classrooms`);
          return data.map((item: ClassroomItem) => ZClassroomItem.parse(item));
        }),
    []
  );

  const getClassroomsQuery = useQuery(
    ["get-classrooms-query"],
    () => fetchClassrooms(),
    args?.config
  );

  return getClassroomsQuery;
}

export function useClassroom(args?: {
  classroomId: string;
  config?: UseQueryOptions<ClassroomItem, Error, ClassroomItem, Array<any>>;
}) {
  const apiAuth = useApiAuth();

  const fetchClassroom = useMemo(
    () =>
      z
        .function()
        .args(z.string())
        .implement(async (classroomId: string) => {
          const { data } = await apiAuth.get(`/classrooms/${classroomId}`);
          return ZClassroomItem.parse(data);
        }),
    []
  );

  const getClassroomQuery = useQuery(
    ["get-classroom-query", args?.classroomId],
    () => fetchClassroom(args?.classroomId || ""),
    args?.config
  );

  return getClassroomQuery;
}

export function useAddClassroom(args?: {
  config?: UseMutationOptions<
    ClassroomItem,
    Error,
    AddClassroomPayload,
    Array<any>
  >;
}) {
  const apiAuth = useApiAuth();

  const addClassroomMutation = useMutation(
    z
      .function()
      .args(ZAddClassroomPayload)
      .implement(async (payload: AddClassroomPayload) => {
        const { data } = await apiAuth
          .post(`/classrooms`, payload)
          .catch((err) => {
            throw err;
          });
        return ZClassroomItem.parse(data);
      }),
    args?.config
  );

  return addClassroomMutation;
}

export function useUpdateClassroom(args?: {
  config?: UseMutationOptions<
    ClassroomItem,
    Error,
    UpdateClassroomPayload,
    Array<any>
  >;
}) {
  const apiAuth = useApiAuth();

  const updateClassroomMutation = useMutation(
    z
      .function()
      .args(ZUpdateClassroomPayload)
      .implement(async (payload: UpdateClassroomPayload) => {
        const { classroomId, ...rest } = payload;
        const { data } = await apiAuth.put(`/classrooms/${classroomId}`, {
          ...rest,
        });
        return ZClassroomItem.parse(data);
      }),
    args?.config
  );

  return updateClassroomMutation;
}

export function useDeleteClassroom(args?: {
  config?: UseMutationOptions<boolean, Error, string, unknown>;
}) {
  const apiAuth = useApiAuth();

  const deleteClassroomMutation = useMutation(
    z
      .function()
      .args(z.string())
      .implement(async (classroomId: string) => {
        await apiAuth.delete(`/classrooms/${classroomId}`);
        return true;
      }),
    args?.config
  );

  return deleteClassroomMutation;
}
