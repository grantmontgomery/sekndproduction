import * as React from "react";
import css from "./PartsIcon.module.scss";
import { usePrevious } from "./Hooks";
import { useModalDispatch, useModalState } from "../../state/ModalContext";
import { usePartsState } from "../../state/DatePartsContext";

export const PartsIcon: React.FC = () => {
  const modalDispatch = useModalDispatch();
  const { allowToggle, allowDisplay } = useModalState();
  const [pulse, setPulse] = React.useState<boolean>(false);
  const { parts } = usePartsState();

  const previousValue = usePrevious(parts.length);

  const handleClick: () => void = () => {
    modalDispatch({
      type: allowDisplay.dateParts ? "CLOSE_MODAL" : "DATE_PARTS",
    });
  };

  React.useEffect(() => {
    return clearTimeout();
  }, []);

  React.useEffect(() => {
    if (previousValue && parts.length > previousValue) {
      setPulse(true);
      const pulseTimeOut = () =>
        setTimeout(() => {
          setPulse(false);
        }, 500);

      const pulseTimeOutId = pulseTimeOut();

      return () => {
        clearTimeout(pulseTimeOutId);
      };
    }
  }, [parts.length]);

  return (
    <div
      className={css.iconWrapper}
      onClick={() => allowToggle.dateParts && handleClick()}
    >
      <div className={`${css.pulser} ${pulse ? css.pulse : undefined}`}></div>
      <svg
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        viewBox="0 0 290 290"
        enableBackground="new 0 0 290 290"
        // className={css.partsIcon}
      >
        <g>
          <path
            className={allowDisplay.dateParts ? css.st1 : css.st0}
            style={{ stroke: "black", strokeWidth: "0.5vh" }}
            d="M289,145c0,79.5-64.5,144-144,144c-39.8,0-72-32.2-72-72s32.2-72,72-72s72-32.2,72-72S184.8,1,145,1
    C224.5,1,289,65.5,289,145z"
          />
          <g>
            <path
              className={allowDisplay.dateParts ? css.st2 : css.st1}
              style={{ strokeWidth: "0.5vh" }}
              d="M116,284.5C51.3,271.1,2.5,213.6,2.5,145C2.5,66.4,66.4,2.5,145,2.5c38.9,0,70.5,31.6,70.5,70.5
        s-31.6,70.5-70.5,70.5c-40.5,0-73.5,33-73.5,73.5C71.5,247.2,89.8,273.3,116,284.5z"
            />
            <path
              d="M145,4c38,0,69,31,69,69s-31,69-69,69c-41.4,0-75,33.6-75,75c0,26.5,13.8,49.8,34.6,63.2c-22.2-6.6-42.5-18.6-59.3-35.4
        C18.7,218.1,4,182.7,4,145s14.7-73.1,41.3-99.7S107.3,4,145,4 M145,1C65.5,1,1,65.5,1,145c0,79.5,64.5,144,144,144
        c-39.8,0-72-32.2-72-72s32.2-72,72-72s72-32.2,72-72S184.8,1,145,1L145,1z"
            />
          </g>
          <path
            className={allowDisplay.dateParts ? css.st1 : undefined}
            d="M180.3,93.4v-4.7h-6.7v2.3h4.3v2.3h-24.3v-2.3h17.6v-2.3h-14.5V70.2l21.8-24.5c0.8-0.8,1.2-1.9,1.2-3.1
    c0-1.5-0.7-2.9-1.9-3.8c-0.8-0.6-1.7-0.9-2.7-0.9c-1.3,0-2.6,0.6-3.5,1.6l-5.1,5.8l1.8,1.6l5.1-5.8c0.4-0.5,1.1-0.8,1.7-0.8
    c0.5,0,0.9,0.1,1.3,0.4c0.6,0.4,0.9,1.1,0.9,1.8c0,0.6-0.2,1.1-0.6,1.5l-12.2,13.7l-3.4-3l5.4-6.2l-1.8-1.6L154.5,59h-4.9v-2.8
    c1.1-0.7,1.9-1.7,2.6-2.8h1.4c2.4,0,4.3-1.9,4.3-4.3v-3.1c0-7.1-5.8-12.9-12.9-12.9s-12.9,5.8-12.9,12.9V49c0,2.4,1.9,4.3,4.3,4.3
    h1.4c0.6,1.1,1.5,2.1,2.6,2.8v3l-4.3,0.7l0.4,2.3l4.6-0.8c1,1.1,2.4,1.8,3.9,1.8c1.6,0,3-0.7,4-1.9h6.5l4.2-4.8l3.4,3l-8.6,9.7
    v19.5h-3.1v4.7h-12.7v-4.7h-3.1V70.9h-2.5l-2.2,5.9l-4.3-1.7l3.3-9.1c0.6-1.7,2.1-3,4-3.3l0.2,0l-0.4-2.3l-0.2,0
    c-2.6,0.4-4.9,2.3-5.8,4.8l-8.6,23.7h-9.4v4.7H105V113h14.8v-2.3h-12.4V95.8h75.3v14.9h-60.5v2.3H185V93.4H180.3z M150.9,47.2
    l-2.5-3.3h-8.9c0.8-2.3,3-3.9,5.5-3.9c3.2,0,5.9,2.6,5.9,5.9V47.2z M155.6,49c0,1.1-0.9,2-2,2h-0.6c0.1-0.5,0.2-1.1,0.2-1.6
    c0,0,0-3.7,0-3.8h0.4c1.1,0,2,0.9,2,2V49z M145,35.3c5,0,9.2,3.5,10.3,8.2c-0.5-0.2-1.1-0.3-1.7-0.3h-0.9c-1.1-3.2-4.2-5.5-7.7-5.5
    s-6.6,2.3-7.7,5.5h-0.9c-0.6,0-1.2,0.1-1.7,0.3C135.8,38.8,140,35.3,145,35.3z M136.4,51c-1.1,0-2-0.9-2-2v-1.6c0-1.1,0.9-2,2-2
    h0.4c0,0.1,0,3.8,0,3.8c0,0.6,0.1,1.1,0.2,1.6H136.4z M139.1,49.4v-3.1h8.1l3.4,4.6c-0.7,2.5-3,4.4-5.7,4.4
    C141.8,55.2,139.1,52.6,139.1,49.4z M145,60.9c-0.9,0-1.7-0.4-2.3-1.1v-2.5c0.7,0.2,1.5,0.3,2.3,0.3s1.5-0.1,2.3-0.3v2.5
    C146.7,60.5,145.9,60.9,145,60.9z M133.2,77.4v11.4H129L133.2,77.4z M125.8,77.2l4.3,1.7l-3.6,9.8h-4.9L125.8,77.2z M112,91.1h24.3
    v2.3H112V91.1z"
          />
          <g>
            <path
              className={allowDisplay.dateParts ? css.st2 : css.st1}
              d="M123.9,256.5c-0.7,0-1.1-0.5-1.1-1c-0.1-0.4,0.1-1.1,0.8-1.3l17.5-6.1v-5.4c0-0.4,0.3-0.7,0.7-0.7
        c0.4,0,0.7,0.3,0.7,0.7v4.9l1.2-0.4c0.4-0.2,0.7-0.2,0.8-0.2c0.2,0,0.4,0.1,0.8,0.2l1.2,0.4v-22.8l-0.6,0.1
        c-0.4,0.1-0.9,0.1-1.3,0.1c-0.5,0-1-0.1-1.6-0.2l-0.6-0.1V238c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7v-13.9l-0.4-0.3
        c-0.7-0.4-0.8-0.6-11.3-13.3c-3.4-4.1-7.8-9.5-13.7-16.6c-0.4-0.4-0.4-1-0.2-1.5c0.2-0.5,0.7-0.8,1.3-0.8h40.9l0.1-0.2
        c3.7-6.2,9.3-11,16.1-13.8c0.1,0,0.2-0.1,0.3-0.1c0.3,0,0.5,0.2,0.6,0.4c0.1,0.2,0.1,0.4,0,0.5c-0.1,0.2-0.2,0.3-0.4,0.4
        c-6.1,2.5-11.1,6.7-14.7,12l-0.5,0.8H172c0.6,0,1,0.3,1.3,0.8c0.2,0.5,0.2,1.1-0.2,1.5l-16.9,20.7c-0.1,0.2-0.3,0.2-0.5,0.2
        c0,0,0,0,0,0c-0.2,0-0.3-0.1-0.4-0.2c-0.1-0.1-0.2-0.3-0.2-0.5c0-0.2,0-0.4,0.1-0.5l8-9.8h-3.6l-0.1,0.4c-0.5,2.9-3,4.9-5.9,4.9
        s-5.4-2.1-5.9-4.9l-0.1-0.4h-22.1l14.5,17.5c1.2,1.4,2.7,2.2,4.4,2.2c1.6,0,3.1-0.7,4.1-1.9c0.1-0.1,0.1-0.1,1.2-1.5l2.4-2.9
        c0.1-0.2,0.3-0.3,0.5-0.3c0.2,0,0.3,0.1,0.4,0.2c0.3,0.2,0.3,0.7,0.1,1c-0.6,0.8-1.1,1.4-1.6,2c-2.2,2.7-2.6,3.2-3.7,3.8l-0.2,0.1
        v23.9l3.7,1.3c0.2,0.1,0.3,0.2,0.4,0.3c0.1,0.2,0.1,0.3,0,0.5c-0.1,0.3-0.4,0.5-0.6,0.5c-0.1,0-0.2,0-0.2,0l-6.6-2.3
        c0,0-16.5,5.8-16.6,5.8l-2.8,1h38.7l-8.3-2.9c-0.2-0.1-0.3-0.2-0.4-0.3c-0.1-0.2-0.1-0.3,0-0.5c0.1-0.3,0.4-0.5,0.6-0.5
        c0.1,0,0.2,0,0.2,0l9.3,3.3c0.7,0.2,0.8,0.8,0.8,1.3c-0.1,0.4-0.4,1-1.1,1H123.9z M149.2,204.6c0.6,2,2.3,3.3,4.4,3.3
        c2.1,0,3.9-1.3,4.4-3.3l0.2-0.6H149L149.2,204.6z M158.2,193.2c-1.1,2.1-1.7,3.7-1.9,4.3l-0.1,0.4l0.3,0.2c1.5,0.9,2.6,2.3,2.9,4
        l0.1,0.4h4.7l7.9-9.6h-13.8L158.2,193.2z M153.6,198.7c-2.1,0-3.8,1.3-4.4,3.2l-0.2,0.7h9.2L158,202
        C157.4,200,155.7,198.7,153.6,198.7z M124.5,202.6h23.2l0.1-0.4c0.5-2.8,3-4.8,5.9-4.8c0.3,0,0.6,0,0.9,0.1l0.4,0.1l0.1-0.4
        c0.2-0.6,0.6-1.8,1.4-3.4l0.3-0.7h-40.3L124.5,202.6z"
            />
            <path
              className={allowDisplay.dateParts ? css.st2 : css.st1}
              d="M174.1,178c0.1,0,0.1,0,0.2,0.1c0,0.1,0,0.2-0.1,0.2c-6.2,2.5-11.3,6.8-14.9,12.2l-1,1.5h1.8H172
        c0.4,0,0.6,0.2,0.7,0.4h-1.6h-12.4h-0.6l-0.3,0.5c-1.1,2.1-1.7,3.8-1.9,4.4l-0.2,0.8l0.7,0.4c1.4,0.8,2.3,2.1,2.6,3.7l0.2,0.8h0.8
        h4.1h0.5l0.3-0.4l7-8.6l1-1.3c0.1,0.2,0.1,0.5-0.2,0.8l-16.9,20.7c0,0.1-0.1,0.1-0.1,0.1c0,0-0.1,0-0.1,0c-0.1-0.1-0.1-0.2,0-0.3
        l7.4-9l1.3-1.6h-2.1H160h-0.8l-0.1,0.8c-0.5,2.6-2.7,4.5-5.4,4.5c-2.7,0-4.9-1.9-5.4-4.5l-0.1-0.8h-0.8h-20.6h-2.1l1.3,1.6
        l13.8,16.7c1.3,1.5,3,2.4,4.8,2.4c1.7,0,3.4-0.7,4.5-2.1c0.1-0.1,0.1-0.1,1.4-1.7l2.2-2.7c0-0.1,0.1-0.1,0.1-0.1c0,0,0.1,0,0.1,0
        c0,0,0.1,0.1,0.1,0.1c0,0,0,0.1,0,0.1c-0.6,0.8-1.1,1.4-1.6,2c-2.2,2.7-2.5,3.1-3.5,3.7l-0.5,0.3v0.6v23.2v0.7l0.7,0.2l3.4,1.2
        c0.1,0,0.1,0.1,0.1,0.1c0,0,0,0.1,0,0.1c0,0.1-0.1,0.1-0.2,0.1c0,0,0,0-0.1,0l-4.5-1.6l-2-0.7l-0.3-0.1l-0.3,0.1
        c0,0-16.3,5.7-16.4,5.7l-4.4,1.5c0-0.2,0.1-0.4,0.4-0.5l17.1-6l0.7-0.2v-0.7v-5c0-0.1,0.1-0.2,0.2-0.2c0.1,0,0.2,0.1,0.2,0.2v4.2
        v1.4l1.3-0.5c0.2-0.1,0.4-0.1,0.6-0.2c0.3-0.1,0.6-0.2,0.7-0.2c0.1,0,0.4,0.1,0.6,0.2c0.2,0.1,0.4,0.1,0.6,0.2l1.3,0.5v-1.4v-21.5
        v-1.2l-1.2,0.2c-0.4,0.1-0.8,0.1-1.2,0.1c-0.5,0-1-0.1-1.4-0.2l-1.2-0.3v1.3V238c0,0.1-0.1,0.2-0.2,0.2c-0.1,0-0.2-0.1-0.2-0.2
        v-13.6v-0.5l-0.5-0.3c-0.1-0.1-0.1-0.1-0.2-0.1c-0.6-0.4-0.9-0.7-11.2-13.2c-3.4-4.1-7.8-9.5-13.7-16.6c-0.2-0.3-0.2-0.6-0.2-0.8
        l1.1,1.3l7.1,8.6l0.3,0.4h0.5h22.6h0.8l0.2-0.8c0.5-2.6,2.8-4.4,5.4-4.4c0.3,0,0.6,0,0.8,0.1l0.8,0.1l0.3-0.8
        c0.2-0.6,0.6-1.8,1.4-3.3l0.7-1.4H156h-38.4h-1.6c0.1-0.2,0.4-0.4,0.7-0.4h40.6h0.6l0.3-0.5C161.8,185.5,167.3,180.8,174.1,178
        C174,178,174,178,174.1,178 M148.3,203.1h1.4h7.8h1.4l-0.4-1.3c-0.7-2.2-2.6-3.6-4.9-3.6s-4.2,1.4-4.9,3.6L148.3,203.1
         M153.6,208.4c2.3,0,4.3-1.5,4.9-3.7l0.4-1.3h-1.3h-7.9h-1.3l0.4,1.3C149.3,207,151.3,208.4,153.6,208.4 M155.7,251.4
        C155.7,251.4,155.7,251.4,155.7,251.4l9.4,3.3c0.3,0.1,0.4,0.4,0.4,0.5l-4.4-1.5l-5.5-1.9c-0.1,0-0.1-0.1-0.1-0.2
        C155.5,251.5,155.6,251.4,155.7,251.4 M165.4,255.6c-0.1,0.2-0.2,0.4-0.6,0.4h-41c-0.4,0-0.5-0.2-0.6-0.4h4.7h32.8H165.4
         M174.1,177c-0.1,0-0.3,0-0.4,0.1c-7,2.9-12.6,7.8-16.3,14h-40.6c-1.6,0-2.5,1.9-1.5,3.2c25.7,31.2,23.9,29.2,25.3,30.1V238
        c0,0.7,0.5,1.2,1.2,1.2c0.7,0,1.2-0.5,1.2-1.2v-12.6c0.5,0.1,1.1,0.2,1.7,0.2c0.5,0,0.9,0,1.4-0.1v21.5c-0.9-0.3-1.2-0.5-1.5-0.5
        c-0.3,0-0.6,0.2-1.5,0.5v-4.2c0-0.7-0.5-1.2-1.2-1.2c-0.7,0-1.2,0.5-1.2,1.2v5l-17.1,6c-1.8,0.6-1.3,3.2,0.6,3.2h41
        c1.9,0,2.3-2.6,0.5-3.2l-9.3-3.3c-0.1,0-0.3-0.1-0.4-0.1c-0.5,0-0.9,0.3-1.1,0.8c-0.2,0.6,0.1,1.3,0.7,1.5l5.5,1.9h-32.8
        c0,0,16.4-5.7,16.4-5.7c3,1.1,0.2,0.1,6.5,2.3c0.1,0,0.3,0.1,0.4,0.1c0.5,0,0.9-0.3,1.1-0.8c0.2-0.6-0.1-1.3-0.7-1.5l-3.4-1.2
        v-23.2c1.4-0.8,1.7-1.4,5.4-5.9c0.4-0.5,0.3-1.2-0.2-1.7c-0.2-0.2-0.5-0.3-0.7-0.3c-0.3,0-0.7,0.1-0.9,0.4
        c-3.7,4.6-3.4,4.2-3.6,4.3c-0.9,1.1-2.3,1.7-3.8,1.7c-1.4,0-2.8-0.6-4-2l-13.8-16.7h20.6c0.5,3,3.2,5.3,6.4,5.3s5.8-2.3,6.4-5.3
        h2.2l-7.4,9c-0.4,0.5-0.3,1.2,0.2,1.7c0.2,0.2,0.5,0.3,0.7,0.3c0.3,0,0.7-0.1,0.9-0.4l16.9-20.7c1-1.3,0.1-3.1-1.5-3.1h-11.9
        c3.4-5.1,8.3-9.3,14.4-11.9c0.6-0.2,0.9-0.9,0.6-1.5C175,177.3,174.5,177,174.1,177L174.1,177z M160,202.1
        c-0.4-1.9-1.5-3.5-3.1-4.4c0.2-0.6,0.8-2.2,1.8-4.3h12.4l-7,8.6H160L160,202.1z M156,193.5c-0.8,1.6-1.2,2.8-1.4,3.5
        c-0.3-0.1-0.7-0.1-1-0.1c-3.1,0-5.8,2.2-6.3,5.2h-22.6l-7.1-8.6H156L156,193.5z M149.7,202.1c0.6-1.9,2.3-2.9,3.9-2.9
        c1.7,0,3.3,1,3.9,2.9H149.7L149.7,202.1z M153.6,207.4c-1.7,0-3.4-1-4-3h7.9C157,206.5,155.3,207.4,153.6,207.4L153.6,207.4z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};
