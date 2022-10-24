import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";
import { useMemo } from "react";
import { z } from "zod";
import { OrderApi, ORDER_API } from "../types/order.type";
import {
  AddPostPayload,
  PostItem,
  PostItemWithoutUser,
  UpdatePostPayload,
  VotePostPayload,
  ZAddPostPayload,
  ZPostItem,
  ZPostItemWithoutUser,
  ZUpdatePostPayload,
  ZVotePayload,
  ZVotePostPayload,
} from "../types/post.type";
import useApiAuth from "./use-api";

export function usePortsByClassroom(args?: {
  classroomId: string;
  keySearch?: string;
  order?: OrderApi;
  config?: UseQueryOptions<PostItem[], Error, PostItem[], Array<any>>;
}) {
  const apiAuth = useApiAuth();

  const fetchPosts = useMemo(
    () =>
      z
        .function()
        .args(z.string(), z.string(), z.enum(ORDER_API))
        .implement(
          async (classroomId: string, keySearch: string, order: OrderApi) => {
            const { data } = await apiAuth.get(
              `/posts/posts-by-classroom/${classroomId}?keySearch=${
                keySearch || ""
              }&order=${order}`
            );
            return data.map((item: unknown) => ZPostItem.parse(item));
          }
        ),
    []
  );

  const getPostsByClassroomQuery = useQuery(
    ["get-posts-by-classroom", args?.classroomId, args?.keySearch, args?.order],
    () =>
      fetchPosts(
        args?.classroomId || "",
        args?.keySearch || "",
        args?.order || "DESC"
      )
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

export function useUpdatePost(args?: {
  config?: UseMutationOptions<
    PostItemWithoutUser,
    Error,
    UpdatePostPayload,
    Array<any>
  >;
}) {
  const apiAuth = useApiAuth();

  const updatePostMutation = useMutation(
    z
      .function()
      .args(ZUpdatePostPayload)
      .implement(async (payload: UpdatePostPayload) => {
        const { postId, ...rest } = payload;
        const { data } = await apiAuth.put(`/posts/${postId}`, rest);

        return ZPostItemWithoutUser.parse(data);
      }),
    args?.config
  );

  return updatePostMutation;
}

export function useVotePost(args?: {
  config?: UseMutationOptions<boolean, Error, VotePostPayload, Array<any>>;
}) {
  const apiAuth = useApiAuth();

  const votePostMutation = useMutation(
    z
      .function()
      .args(ZVotePostPayload)
      .implement(async (payload: VotePostPayload) => {
        const { postId, ...rest } = payload;
        await apiAuth.put(`/posts/vote/${postId}`, rest);

        return true;
      }),
    args?.config
  );

  return votePostMutation;
}

export function useDeletePost(args?: {
  config?: UseMutationOptions<boolean, Error, string, unknown>;
}) {
  const apiAuth = useApiAuth();

  const deletePostMutation = useMutation(
    z
      .function()
      .args(z.string())
      .implement(async (postId: string) => {
        await apiAuth.delete(`/posts/${postId}`);

        return true;
      }),
    args?.config
  );

  return deletePostMutation;
}
