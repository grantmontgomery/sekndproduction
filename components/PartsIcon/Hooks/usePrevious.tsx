import * as React from "react";

export const usePrevious = (value: number) => {
  const ref = React.useRef<number>();

  React.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};
