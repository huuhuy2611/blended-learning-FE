import { axiCreate } from "../lib/axios-clean-trace";

export const blendedApi = axiCreate({
  baseURL: process.env.NEXT_PUBLIC_BLENDED_BACKEND_API,
  timeout: 30 * 1000,
  headers: {},
});
