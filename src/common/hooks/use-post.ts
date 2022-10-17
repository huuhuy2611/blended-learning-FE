import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useMemo } from "react";
import { z } from "zod";
import { PostItem, ZPostItem } from "../types/post.type";
import useApiAuth from "./use-api";

export function usePortsByClassroom(args?: {
  classroomId: string;
  keySearch: string;
  config?: UseQueryOptions<PostItem[], Error, PostItem[], Array<any>>;
}) {
  const apiAuth = useApiAuth();

  const fetchPosts = useMemo(
    () =>
      z
        .function()
        .args(z.string(), z.string())
        .implement(async (classroomId: string, keySearch: string) => {
          const { data } = await apiAuth.get(
            `/posts/posts-by-classroom/${classroomId}?keySearch=${
              keySearch || ""
            }`
          );
          return data.map((item: unknown) => ZPostItem.parse(item));
        }),
    []
  );

  const getPostsByClassroomQuery = useQuery(
    ["get-posts-by-classroom", args?.classroomId, args?.keySearch],
    () => fetchPosts(args?.classroomId || "", args?.keySearch || "")
  );

  return getPostsByClassroomQuery;
}
