import * as React from "react";
import { usePrevious } from "./Hooks";
import { usePartsState } from "../../state/DatePartsContext";

export const PulseNotification: React.FC = () => {
  const { parts } = usePartsState();
  const previousValue = usePrevious(parts.length);
  console.log(parts.length);
  console.log(previousValue);
  return <div></div>;
};
