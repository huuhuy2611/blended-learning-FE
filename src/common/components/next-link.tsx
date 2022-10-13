import { css } from "@emotion/react";
import Link from "next/link";
import React, { AnchorHTMLAttributes } from "react";

// https://stackoverflow.com/a/19709846
const isAbsoluteUrl = (url: string) =>
  new RegExp("^(?:[a-z]+:)?//", "i").test(url);

type NextLinkProps = {
  href?: string;
};
const NextLink = React.forwardRef<
  HTMLAnchorElement,
  NextLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>
>(function NextLink({ href, ...props }, ref) {
  const childRender = (
    <a
      href={href}
      ref={ref}
      css={css`
        display: block;
      `}
      {...props}
    />
  );
  if (!href || isAbsoluteUrl(href)) return childRender;
  return (
    <Link href={href} passHref>
      {childRender}
    </Link>
  );
});

export default NextLink;
