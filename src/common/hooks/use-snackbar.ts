import { useState, useEffect, SetStateAction, Dispatch } from "react";

export function useLabelSnackbar(): [string, Dispatch<SetStateAction<string>>] {
  const [labelSnackbar, setLabelSnackbar] = useState("");

  useEffect(() => {
    if (!labelSnackbar) return;

    const funcInterval = setInterval(() => {
      setLabelSnackbar("");
    }, 2000);
    return () => {
      clearInterval(funcInterval);
    };
  }, [labelSnackbar]);

  return [labelSnackbar, setLabelSnackbar];
}
