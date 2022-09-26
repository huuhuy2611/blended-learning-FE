import Router from "next/router";

export const redirect = (url: string) => {
  if (Router.pathname !== url) Router.push(url);
};
