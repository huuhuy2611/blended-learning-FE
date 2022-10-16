import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useMemo } from "react";
import { z } from "zod";
import { ClassroomItem, ZClassroomItem } from "../types/classroom.type";
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

  const getReservationDetailQuery = useQuery(
    ["get-classrooms-by-user-query", args?.userId],
    () => fetchClassrooms(args?.userId || ""),
    args?.config
  );

  return getReservationDetailQuery;
}
