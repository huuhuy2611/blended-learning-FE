import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useMemo } from "react";
import { z } from "zod";
import { qClient } from "../lib/react-query";
import { CommentItem, ZCommentItem } from "../types/comment.type";
import useApiAuth from "./use-api";
import useCallbackRef from "./use-callback-ref";

export function useAnswersByPost(args?: {
  postId: string;
  config?: UseQueryOptions<CommentItem[], Error, CommentItem[], Array<any>>;
}) {
  const apiAuth = useApiAuth();

  const fetchPosts = useMemo(
    () =>
      z
        .function()
        .args(z.string())
        .implement(async (postId: string) => {
          const { data } = await apiAuth.get(`/comments?postId=${postId}`);
          return data.map((item: unknown) => ZCommentItem.parse(item));
        }),
    []
  );

  const getCommentsByPostQueryKeys = ["get-posts-by-classroom", args?.postId];

  const optimisticUpdate = useCallbackRef(
    (updater: <T extends CommentItem[] | undefined>(x: T) => T) =>
      qClient.setQueryData(getCommentsByPostQueryKeys, updater)
  );

  const getCommentsByPostQuery = useQuery(getCommentsByPostQueryKeys, () =>
    fetchPosts(args?.postId || "")
  );

  return { ...getCommentsByPostQuery, optimisticUpdate };
}
