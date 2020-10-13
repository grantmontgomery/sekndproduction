import * as React from 'react';
import {usePartsState} from "../../state/DatePartsContext"
import css from "./MobileScheduleParts.module.scss"
import { PartItems } from './PartItems';


export const MobileScheduleParts: React.FC<{
    parts: { [key: string]: any }[];
    translateY: number;
    extend: boolean
  }> = ({ parts, translateY, extend }) => {
    const [state, setState] = React.useState<{ squareIndex: number }>({
      squareIndex: 0,
    });
    let observer:React.MutableRefObject<IntersectionObserver|null> = React.useRef()

    console.log(state.squareIndex)

    // let ElementObject: { [key: number]: null | HTMLElement }[] = [];

    console.log(observer)
    
    // React.useLayoutEffect(() => {
    //   observer.current =
    //     new IntersectionObserver(
    //       (entries) => {
    //         return ElementObject.forEach((Element, index) => {
    //           return entries.forEach((entry) => {
    //             const { target, intersectionRatio } = entry;
    //             switch (target) {
    //               case document.getElementById(`sensor${index}`):
    //                 return intersectionRatio === 1
    //                   ? setState({ squareIndex: index })
    //                   : null;
    //             }
    //           });
    //         });
    //       },
    //       {
    //         threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    //         root: document.getElementById("secretScroll"),
    //       }
    //     )
      
    
    // },[])

    React.useEffect(() => {
      observer.current =
        new IntersectionObserver(
          (entries) => {
            return ElementObject.forEach((Element, index) => {
              return entries.forEach((entry) => {
                const { target, intersectionRatio } = entry;
                switch (target) {
                  case document.getElementById(`sensor${index}`):
                    return intersectionRatio === 1
                      ? setState({ squareIndex: index })
                      : null;
                }
              });
            });
          },
          {
            threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
            root: document.getElementById("secretScroll"),
          }
        )
      

    },[observer])
  
  
    // ElementObject = randomArray.map((elem) => ({ [elem]: null }));
  
  
    // React.useEffect(() => {
    
    //   const newObserver = observer.current;
  
    //   ElementObject = parts.map((elem, index) => ({ [index]: null }));
  
    //   ElementObject.forEach((foo, index) => {
    //     const newElement: HTMLElement | null = document.getElementById(
    //       `sensor${index}`
    //     );
    //     foo[index] = newElement;
    //     if (newElement) {
    //       return newObserver.observe(newElement);
    //     }
    //   });
    // }, []);
  
    return (
      <div className={css.container} style={{display: !extend && translateY >= 0 ? "none" : "block", opacity: translateY >= -50 && !extend ? `${translateY/100 * -1}` : "1" }}>
        {/* <div className={css.opacityBar}></div> */}
        <PartItems list={parts} squareIndex={state.squareIndex}></PartItems>
        <div className={css.scrollWrapper}>
          <div className={css.secretScroll} id="secretScroll">
            {parts.map((item, index) => (
              <div key={`sensor${index}`} className={css.sensorSquare} id={`sensor${index}`}></div>
            ))}
          </div>
        </div>
        {/* <div className={css.opacityBar}></div> */}
      </div>
    );
  };
  