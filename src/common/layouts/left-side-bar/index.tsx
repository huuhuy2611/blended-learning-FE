import { css } from "@emotion/react";
import {
  Divider,
  Drawer,
  PaperProps,
  Stack,
  Theme,
  alpha,
  Button,
  ButtonProps,
  useTheme,
} from "@mui/material";
import styles from "./index.module.scss";
import AccountBoxTwoToneIcon from "@mui/icons-material/AccountBoxTwoTone";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import PaidTwoToneIcon from "@mui/icons-material/PaidTwoTone";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";
import SupportTwoToneIcon from "@mui/icons-material/SupportTwoTone";
import { useRouter } from "next/router";
import NextLink from "../../components/next-link";
import React from "react";
import useIsAnimating from "@/common/hooks/use-is-animating";
import clsx from "clsx";
import Image from "next/image";
import { useIsoLayoutEffect } from "@/common/utils";
import { PrimaryButton } from "@/common/components/button";

export type LeftSideBarCtx = {
  setMainBarEl: React.Dispatch<React.SetStateAction<React.ReactNode>>;
  setMainBarWidth: React.Dispatch<React.SetStateAction<number>>;
};

export interface LeftSideBarItemProps extends ButtonProps {
  text?: string | React.ReactNode;
  href?: string;
  icon?: React.ReactNode;
}

const LEFT_SIDEBAR_TOP_ITEMS: LeftSideBarItemProps[] = [
  {
    text: <>Home</>,
    href: "/reservation",
    icon: <HomeTwoToneIcon fontSize="medium" />,
  },
  {
    text: <>Customers</>,
    href: "/customers",
    icon: <AccountBoxTwoToneIcon fontSize="medium" />,
  },
  {
    text: <>Transactions</>,
    href: "/transactions",
    icon: <PaidTwoToneIcon fontSize="medium" />,
  },
];

const LEFT_SIDEBAR_BOTTOM_ITEMS: LeftSideBarItemProps[] = [
  {
    text: <>Support</>,
    href: "/support",
    icon: <SupportTwoToneIcon fontSize="medium" />,
  },
  {
    text: <>Settings</>,
    href: "/settings",
    icon: <SettingsTwoToneIcon fontSize="medium" />,
  },
];

const useLeftSideBarCtx = () => {
  const ctx = React.useContext(LeftSideBarContext);
  if (!ctx) throw Error("LeftSideBarProvider not found");
  return ctx;
};

export function LeftSideBarMainNav({
  children,
  width = 272,
}: {
  children: React.ReactNode;
  width?: number;
}) {
  const { setMainBarEl, setMainBarWidth } = useLeftSideBarCtx();

  useIsoLayoutEffect(() => {
    setMainBarWidth(width);
  }, [width]);

  useIsoLayoutEffect(() => {
    setMainBarEl(children);
    return () => setMainBarEl(null);
  }, [children]);

  return null;
}

export const LeftSideBarContext = React.createContext<LeftSideBarCtx | null>(
  null
);

export default function LeftSideBar({
  children,
  drawerClassName,
  mainClassName,
}: {
  children: React.ReactNode;
  drawerClassName?: string;
  mainClassName?: string;
}) {
  const router = useRouter();

  const miniBarWidth = 94;
  const [mainBarWidth, setMainBarWidth] = React.useState(0);
  const [mainBarEl, setMainBarEl] = React.useState<React.ReactNode>(null);

  const { transitions } = useTheme();
  const ctx = React.useMemo(() => ({ setMainBarEl, setMainBarWidth }), []);
  const open = !!mainBarEl;
  const isAnimating = useIsAnimating(open);

  const createTransition = React.useCallback(
    (type: string | string[]) =>
      transitions.create(type, {
        easing: transitions.easing.sharp,
        duration: transitions.duration.short,
      }),
    [transitions]
  );

  return (
    <LeftSideBarContext.Provider value={ctx}>
      <Drawer
        variant="permanent"
        PaperProps={{ component: "nav", elevation: 16 } as PaperProps}
        className={clsx("LeftSideBar-root", drawerClassName)}
        css={css`
          .MuiPaper-root {
            flex-direction: row;
            overflow-x: ${!isAnimating ? "visible" : "hidden"};
          }
        `}
      >
        <Stack
          className="LeftSideBarMiniNav-root"
          width={miniBarWidth}
          padding="16px 8px"
          spacing={3.125}
          direction="column"
          divider={<Divider orientation="horizontal" flexItem />}
        >
          <NextLink href="/" className={styles["LeftSideBar-logo"]}>
            <Image
              src="/images/logo_item.jpg"
              alt="Logo"
              width={60}
              height={60}
            />
          </NextLink>
          {/* <LeftSidebarNavigation /> */}
          <PrimaryButton
            onClick={() => {
              localStorage.clear();
              router.push("/login");
            }}
          >
            Sign out
          </PrimaryButton>
        </Stack>
        <Divider orientation="vertical" />
        <div
          className="LeftSideBarMainNav-root"
          css={css`
            width: ${open ? mainBarWidth : 0}px;
            transition: ${createTransition("width")};
            overflow-x: ${!isAnimating ? "visible" : "hidden"};
          `}
        >
          <Stack
            className="LeftSideBarMiniNav-root"
            width={mainBarWidth}
            display={!open && !isAnimating ? "none" : "flex"}
            height="100%"
            direction="column"
          >
            {mainBarEl}
          </Stack>
        </div>
      </Drawer>
      <main
        className={clsx("LeftSideBarMain-root", mainClassName)}
        css={css`
          margin-left: ${open ? miniBarWidth + mainBarWidth : miniBarWidth}px;
          transition: ${createTransition("margin-left")};
          display: flex;
          flex-direction: column;
          min-height: 100%;
        `}
      >
        <div
          className="LeftSideBarMainContent-root"
          css={css`
            padding: 24px;
            max-width: 1832px;
            margin: auto;
            width: 100%;
            flex: 1;
            display: flex;
            flex-direction: column;
            min-height: 100%;
            position: relative;
          `}
        >
          {children}
        </div>
      </main>
    </LeftSideBarContext.Provider>
  );
}

function LeftSidebarNavigation() {
  const itemSpacing = 2.5;

  return (
    <Stack spacing={0} justifyContent="space-between" flex="1">
      <Stack spacing={itemSpacing}>
        {LEFT_SIDEBAR_TOP_ITEMS.map((item) => (
          <LeftSidebarItem {...item} key={item?.href} />
        ))}
      </Stack>
      <Stack spacing={itemSpacing}>
        {LEFT_SIDEBAR_BOTTOM_ITEMS.map((item) => (
          <LeftSidebarItem {...item} key={item?.href} />
        ))}
      </Stack>
    </Stack>
  );
}

const LeftSidebarItem: React.FC<LeftSideBarItemProps> = (props) => {
  const { href, text, icon } = props;
  const router = useRouter();
  const theme = useTheme();
  const grey = theme.palette.grey;
  const isActive = (() => {
    if (!href) return false;
    if (router.pathname.startsWith(href)) {
      return true;
    }
    return false;
  })();

  const getBackgroundColor = (
    theme: Theme,
    isHover: boolean = false
  ): string => {
    if (!isHover) {
      if (isActive) return alpha(theme.palette.primary.main, 0.08);
      return "transparent";
    }
    if (isActive) return alpha(theme.palette.primary.main, 0.08);
    return grey[100];
  };

  const getTextColor = (theme: Theme, isHover: boolean = false): string => {
    if (!isHover) {
      if (isActive) return theme.palette.primary.main;
      return grey[600];
    }
    if (isActive) return theme.palette.primary.main;
    return grey[900];
  };

  return (
    <Button
      component={NextLink}
      href={href}
      className={styles.LeftSidebarItemBtn}
      sx={{
        backgroundColor: getBackgroundColor(theme),
        color: getTextColor(theme),
        padding: "8px 0",
        height: "58px",
        "&:hover": {
          backgroundColor: getBackgroundColor(theme, true),
          color: getTextColor(theme, true),
        },
      }}
    >
      <Stack spacing={0} alignItems="center" justifyContent="center" flex="1">
        {icon}
        <div
          css={css`
            font-size: 12px;
            line-height: 18px;
            font-weight: 500;
          `}
        >
          {text}
        </div>
      </Stack>
    </Button>
  );
};
