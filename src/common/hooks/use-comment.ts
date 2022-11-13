import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";
import { useMemo } from "react";
import { z } from "zod";
import {
  AddCommentPayload,
  CommentItem,
  CommentItemWithoutUser,
  UpdateCommentPayload,
  VoteCommentPayload,
  ZAddCommentPayload,
  ZCommentItem,
  ZCommentItemWithoutUser,
  ZUpdateCommentPayload,
  ZVoteCommentPayload,
} from "../types/comment.type";
import { OrderApi, ORDER_API } from "../types/order.type";
import useApiAuth from "./use-api";

export function useComments(args?: {
  postId?: string;
  classroomId?: string;
  order?: OrderApi;
  config?: UseQueryOptions<CommentItem[], Error, CommentItem[], Array<any>>;
}) {
  const apiAuth = useApiAuth();

  const fetchPosts = useMemo(
    () =>
      z
        .function()
        .args(z.string(), z.string(), z.enum(ORDER_API))
        .implement(
          async (classroomId: string, postId: string, order: OrderApi) => {
            const { data } = await apiAuth.get(
              `/comments?postId=${postId}&classroomId=${classroomId}&order=${order}`
            );
            return data.map((item: CommentItem) => ZCommentItem.parse(item));
          }
        ),
    []
  );

  const getCommentsByPostQueryKeys = [
    "get-posts-by-classroom",
    args?.classroomId,
    args?.postId,
    args?.order,
  ];

  // const optimisticUpdate = useCallbackRef(
  //   (updater: <T extends CommentItem[] | undefined>(x: T) => T) =>
  //     qClient.setQueryData(getCommentsByPostQueryKeys, updater)
  // );

  const getCommentsByPostQuery = useQuery(
    getCommentsByPostQueryKeys,
    () =>
      fetchPosts(
        args?.classroomId || "",
        args?.postId || "",
        args?.order || "DESC"
      ),
    args?.config
  );

  return { ...getCommentsByPostQuery };
}

export function useVoteComment(args?: {
  config?: UseMutationOptions<boolean, Error, VoteCommentPayload, Array<any>>;
}) {
  const apiAuth = useApiAuth();

  const voteCommentMutation = useMutation(
    z
      .function()
      .args(ZVoteCommentPayload)
      .implement(async (payload: VoteCommentPayload) => {
        const { commentId, ...rest } = payload;
        await apiAuth.put(`/comments/vote/${commentId}`, rest);

        return true;
      }),
    args?.config
  );

  return voteCommentMutation;
}

export function useAddComment(args?: {
  config?: UseMutationOptions<
    CommentItem,
    Error,
    AddCommentPayload,
    Array<any>
  >;
}) {
  const apiAuth = useApiAuth();

  const addCommentMutation = useMutation(
    z
      .function()
      .args(ZAddCommentPayload)
      .implement(async (payload: AddCommentPayload) => {
        const { data } = await apiAuth.post("/comments", payload);

        return ZCommentItem.parse(data);
      }),
    args?.config
  );

  return addCommentMutation;
}

export function useUpdateComment(args?: {
  config?: UseMutationOptions<
    CommentItemWithoutUser,
    Error,
    UpdateCommentPayload,
    Array<any>
  >;
}) {
  const apiAuth = useApiAuth();

  const updateCommentMutation = useMutation(
    z
      .function()
      .args(ZUpdateCommentPayload)
      .implement(async (payload: UpdateCommentPayload) => {
        const { commentId, ...rest } = payload;
        const { data } = await apiAuth.put(`/comments/${commentId}`, rest);

        return ZCommentItemWithoutUser.parse(data);
      }),
    args?.config
  );

  return updateCommentMutation;
}

export function useDeleteComment(args?: {
  config?: UseMutationOptions<boolean, Error, string, unknown>;
}) {
  const apiAuth = useApiAuth();

  const deleteCommentMutation = useMutation(
    z
      .function()
      .args(z.string())
      .implement(async (commentId: string) => {
        await apiAuth.delete(`/comments/${commentId}`);

        return true;
      }),
    args?.config
  );

  return deleteCommentMutation;
}
