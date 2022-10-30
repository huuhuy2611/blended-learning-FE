import {
  UseMutationOptions,
  useMutation,
  UseQueryOptions,
  useQuery,
} from "@tanstack/react-query";
import { useMemo } from "react";
import { z } from "zod";
import {
  AddSyllabusTagsPayload,
  TagItem,
  ZAddSyllabusTagsPayload,
  ZTagItem,
} from "../types/tag.type";
import useApiAuth from "./use-api";

export function useTags(args?: {
  keySearch?: string;
  config?: UseQueryOptions<TagItem[], Error, TagItem[], Array<any>>;
}) {
  const apiAuth = useApiAuth();

  const fetchTags = useMemo(
    () =>
      z
        .function()
        .args(z.string())
        .implement(async (keySearch: string) => {
          const { data } = await apiAuth.get(`/tags?keySearch=${keySearch}`);

          return data.map((item: TagItem) => ZTagItem.parse(item));
        }),
    []
  );

  const getTagsQuery = useQuery(
    ["get-tags-query", args?.keySearch],
    () => fetchTags(args?.keySearch || ""),
    args?.config
  );

  return getTagsQuery;
}

export function useSyllabusTagsByClassroom(args?: {
  classroomId: string;
  config?: UseQueryOptions<TagItem[], Error, TagItem[], Array<any>>;
}) {
  const apiAuth = useApiAuth();

  const fetchSyllabusTagsByClassroom = useMemo(
    () =>
      z
        .function()
        .args(z.string())
        .implement(async (classroomId: string) => {
          const { data } = await apiAuth.get(`/tags/syllabus/${classroomId}`);

          return data.map((item: TagItem) => ZTagItem.parse(item));
        }),
    []
  );

  const getSyllabusTagsByClassroomQuery = useQuery(
    ["get-syllabus-tags-by-classroom", args?.classroomId],
    () => fetchSyllabusTagsByClassroom(args?.classroomId || ""),
    args?.config
  );

  return getSyllabusTagsByClassroomQuery;
}

export function useAddSyllabusTags(args?: {
  config?: UseMutationOptions<
    TagItem[],
    Error,
    AddSyllabusTagsPayload,
    Array<any>
  >;
}) {
  const apiAuth = useApiAuth();

  const addSyllabusTagsMutation = useMutation(
    z
      .function()
      .args(ZAddSyllabusTagsPayload)
      .implement(async (payload: AddSyllabusTagsPayload) => {
        const { data } = await apiAuth.post("/tags/syllabus", payload);

        return data.map((item: TagItem) => ZTagItem.parse(item));
      }),
    args?.config
  );

  return addSyllabusTagsMutation;
}

export function useAddTag(args?: {
  config?: UseMutationOptions<TagItem, Error, string, Array<any>>;
}) {
  const apiAuth = useApiAuth();

  const addTagMutation = useMutation(
    z
      .function()
      .args(z.string())
      .implement(async (tag: string) => {
        const { data } = await apiAuth.post("/tags", { tag });

        return ZTagItem.parse(data);
      }),
    args?.config
  );

  return addTagMutation;
}
