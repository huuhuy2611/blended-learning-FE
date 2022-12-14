import {
  UseMutationOptions,
  useMutation,
  UseQueryOptions,
  useQuery,
} from "@tanstack/react-query";
import { useMemo } from "react";
import { z } from "zod";
import {
  AddFreeTagPayload,
  AddSyllabusTagsPayload,
  TagItem,
  ZAddFreeTagPayload,
  ZAddSyllabusTagsPayload,
  ZTagItem,
} from "../types/tag.type";
import useApiAuth from "./use-api";

export function useTagsByClassroom(
  classroomId: string,
  config?: UseQueryOptions<TagItem[], Error, TagItem[], Array<any>>
) {
  const apiAuth = useApiAuth();

  const getTagsQuery = useQuery(
    ["get-tags-query", classroomId],

    async () => {
      if (!classroomId) {
        throw Error("Invalid classroomId");
      }

      const { data } = await apiAuth.get(
        `/tags/tag-by-classroom/${classroomId}`
      );

      return data.map((item: TagItem) => ZTagItem.parse(item));
    },
    { enabled: !!classroomId, ...config }
  );

  return getTagsQuery;
}

export function useAddSyllabusTags(args?: {
  config?: UseMutationOptions<
    boolean,
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
        await apiAuth.post("/tags/syllabus", payload);

        return true;
      }),
    args?.config
  );

  return addSyllabusTagsMutation;
}

export function useAddFreeTags(args?: {
  config?: UseMutationOptions<TagItem[], Error, AddFreeTagPayload, Array<any>>;
}) {
  const apiAuth = useApiAuth();

  const addTagMutation = useMutation(
    z
      .function()
      .args(ZAddFreeTagPayload)
      .implement(async (payload: AddFreeTagPayload) => {
        const { data } = await apiAuth.post("/tags/free", payload);

        return data.map((item: TagItem) => ZTagItem.parse(item));
      }),
    args?.config
  );

  return addTagMutation;
}

export function useRemoveChapterTags(args?: {
  config?: UseMutationOptions<boolean, Error, string, Array<any>>;
}) {
  const apiAuth = useApiAuth();

  const removeChapterTagsMutation = useMutation(
    z
      .function()
      .args(z.string())
      .implement(async (chapterId: string) => {
        await apiAuth.delete(`/tags/syllabus/${chapterId}`);

        return true;
      }),
    args?.config
  );

  return removeChapterTagsMutation;
}
