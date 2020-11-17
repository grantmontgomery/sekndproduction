import * as React from "react";
import css from "./ScheduleFeature.module.scss";

export const ScheduleFeature: React.FC = () => {
  const [elements, loadElements] = React.useState<boolean>(false);
  const [windowDimensions, setWindowDimensions] = React.useState<{
    innerHeight: number | null;
    innerWidth: number | null;
  }>({ innerHeight: null, innerWidth: null });
  React.useEffect(() => {
    setWindowDimensions({
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
    });
    const resizeWindow: () => void = () =>
      setWindowDimensions({
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
      });
    setTimeout(() => loadElements(true), 100);
    window.addEventListener("resize", resizeWindow);
    return () => {
      clearTimeout();
      window.removeEventListener("resize", resizeWindow);
    };
  }, []);

  return (
    <React.Fragment>
      <h2
        className={css.title}
        style={{
          opacity: elements ? "1" : "0",
          transform: `translate(${elements ? "0" : "-10%"})`,
        }}
      >
        3. Schedule
      </h2>
      <div
        className={css.deviceWrapper}
        style={{
          opacity: elements ? "1" : "0",
          transform: `translate(0, ${elements ? "0" : "10%"})`,
        }}
      >
        {windowDimensions.innerHeight <= windowDimensions.innerWidth ? (
          <React.Fragment>
            <div className={css.videoWrapper}>
              <video autoPlay loop muted playsInline>
                <source
                  type={"video/mp4"}
                  src={"/videos/ScheduleCapture.mp4"}
                ></source>
              </video>
            </div>
            <img className={css.desktopImage} src="/images/Laptop.png" alt="" />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className={css.videoWrapper}>
              <video autoPlay loop muted playsInline>
                <source
                  type={"video/mp4"}
                  src={"/videos/SekndCaptureMobileTest.mp4"}
                ></source>
              </video>
            </div>
            <img className={css.phoneImage} src="/images/Phone.png" alt="" />
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};
