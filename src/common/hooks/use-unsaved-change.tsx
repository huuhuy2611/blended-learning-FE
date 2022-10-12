import { css } from "@emotion/react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import Router from "next/router";
import React from "react";
import { SecondaryButton } from "../components/button";
import useCallbackRef from "./use-callback-ref";

export default function useUnsavedChange(hasUnsavedChange: boolean) {
  const { setWarnUnsavedChange } = React.useContext(UnsavedChangeContext);

  React.useEffect(() => {
    const unloadHandler = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      return (e.returnValue =
        "Are you sure you want to leave this page? Any unsaved changes will be lost.");
    };
    const nextHandler = (url: string, { shallow }: { shallow: boolean }) => {
      setWarnUnsavedChange({
        onConfirm: () => {
          Router.events.off("routeChangeStart", nextHandler);
          Router.push(url, url, { shallow });
        },
      });
      // Cancel routeChange event by erroring
      // See https://github.com/zeit/next.js/issues/2476
      const err = `routeChange aborted. This error can be safely ignored - https://github.com/zeit/next.js/issues/2476.`;
      Router.events.emit("routeChangeError", err);
      throw err;
    };
    if (hasUnsavedChange) {
      window.addEventListener("beforeunload", unloadHandler);
      Router.events.on("routeChangeStart", nextHandler);
    }
    return () => {
      window.removeEventListener("beforeunload", unloadHandler);
      Router.events.off("routeChangeStart", nextHandler);
    };
  }, [hasUnsavedChange, setWarnUnsavedChange]);
}

type WarnUnsavedChange = null | {
  onConfirm?: () => any;
  onCancel?: () => any;
};
type UnsavedChangeCtx = {
  setWarnUnsavedChange: React.Dispatch<React.SetStateAction<WarnUnsavedChange>>;
};
const UnsavedChangeContext = React.createContext({} as UnsavedChangeCtx);
export const UnsavedChangeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [warnUnsavedChange, setWarnUnsavedChange] =
    React.useState<WarnUnsavedChange>(null);
  const handleCancel = useCallbackRef(() => {
    warnUnsavedChange?.onCancel?.();
    setWarnUnsavedChange(null);
  });
  const handleAccept = useCallbackRef(() => {
    warnUnsavedChange?.onConfirm?.();
    setWarnUnsavedChange(null);
  });
  return (
    <UnsavedChangeContext.Provider
      value={React.useMemo(() => ({ setWarnUnsavedChange }), [])}
    >
      {children}
      <Dialog open={!!warnUnsavedChange} onClose={handleCancel}>
        <DialogTitle>
          Leave Page?
          <IconButton
            onClick={handleCancel}
            size="large"
            css={css`
              position: absolute;
              top: 12px;
              right: 12px;
            `}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to leave this page? Any unsaved changes will
            be lost.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <SecondaryButton onClick={handleCancel}>Cancel</SecondaryButton>
          <Button onClick={handleAccept} autoFocus>
            Leave
          </Button>
        </DialogActions>
      </Dialog>
    </UnsavedChangeContext.Provider>
  );
};
