import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import { z } from "zod";
import {
  AddSyllabusTagsPayload,
  TagItem,
  ZAddSyllabusTagsPayload,
  ZTagItem,
} from "../types/tag.type";
import useApiAuth from "./use-api";

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
