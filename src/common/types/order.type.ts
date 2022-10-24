export const ORDER_LABEL = ["Newest", "Oldest", "High scores"] as const;
export type OrderLabel = typeof ORDER_LABEL[number];

export const ORDER_API = ["DESC", "ASC", "HIGH_SCORES"] as const;
export type OrderApi = typeof ORDER_API[number];

export const ORDER_ITEM: Record<OrderLabel, OrderApi> = {
  Newest: "DESC",
  Oldest: "ASC",
  "High scores": "HIGH_SCORES",
};
