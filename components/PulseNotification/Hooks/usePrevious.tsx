import * as React from "react";

export const usePrevious: (value: number) => number = (value) => {
  const ref = React.useRef<number>();

  React.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
