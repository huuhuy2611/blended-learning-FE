import React from "react";

type UseCallbackRef = <Fn extends (...args: any[]) => any>(
  func: Fn
) => (...args: Parameters<Fn>) => ReturnType<Fn>;
const useCallbackRef: UseCallbackRef = (func) => {
  const funcRef = React.useRef(func);
  funcRef.current = func;

  return React.useCallback((...args) => {
    const ogFunc = funcRef.current;
    return ogFunc(...args);
  }, []);
};

export default useCallbackRef;
