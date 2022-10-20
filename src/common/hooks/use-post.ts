import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";
import { useMemo } from "react";
import { z } from "zod";
import {
  AddPostPayload,
  PostItem,
  ZAddPostPayload,
  ZPostItem,
} from "../types/post.type";
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

export function useAddPost(args?: {
  config?: UseMutationOptions<PostItem, Error, AddPostPayload, Array<any>>;
}) {
  const apiAuth = useApiAuth();

  const addPostMutation = useMutation(
    z
      .function()
      .args(ZAddPostPayload)
      .implement(async (payload: AddPostPayload) => {
        const { data } = await apiAuth.post("/posts", payload);

        return ZPostItem.parse(data);
      }),
    args?.config
  );

  return addPostMutation;
}
