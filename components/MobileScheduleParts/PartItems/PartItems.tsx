import * as React from 'react';
import css from "./PartItems.module.scss"

export const PartItems: React.FC<{
    squareIndex: number;
    list: { [key: string]: any }[] | string;
  }> = ({ squareIndex, list }) => {
    const [state, setState] = React.useState<{ slide: string }>({ slide: "" });

  
  
    React.useEffect(() => {

        setState({ slide: `${15 - 20 * squareIndex}vh` });
     
    }, [squareIndex]);
    return (
      <section className={css.itemsSection}>
        <div
          className={css.itemsFlex}
          style={{ transform: `translate(${state.slide})` }}
        >
          {typeof list === "object"
            ? list.map((item, index) => {
                const determineRotation: () => string = () => {
                  if (index === squareIndex) return " rotateY(0deg)";
                  return index > squareIndex
                    ? " rotateY(45deg)"
                    : " rotateY(-45deg)";
                };
  
                return (
                  <div
                    className={css.item}
                    style={{
                      transform: determineRotation(),
                      pointerEvents: squareIndex === index ? "none" : "all",
                    }}
                  >
                  </div>
                );
              })
            : null}
        </div>
      </section>
    );
  };
  