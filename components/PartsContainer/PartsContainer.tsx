import * as React from "react";
import css from "./PartsContainer.module.scss";

export const PartsContainer: React.FC = () => {
  const [extend, setExtend] = React.useState<boolean>(false);
  const [state, setState] = React.useState<{isDragging: boolean, origin:{ y: number}, translation: { y: number}}>({isDragging: false, origin: { y:0}, translation: { y:0}})


 
  const handleTouchStart = ({touches}) => {
    const {clientY} = touches[0]
    setState(state => ({...state,
      isDragging: true,
      origin:{ y: clientY},
    }))}


  // const handleTouchMove = ({touches}) => {
  //   if(!state.isDragging) setState({isDragging: false, origin:{y:0}, translation:{y: 0}})
  //   const {clientY} = touches[0]
  //   const translateY = clientY - state.origin.y
   
  //   setState(state => ({...state, translation: {y: translateY}}))
    
  // }

  
  const handleTouchMove = React.useCallback(({touches}) => {
    if(!state.isDragging){ setState({isDragging: false, origin:{y:0}, translation:{y: 0}})}
    else{
    console.log(state)
    const {clientY} = touches[0]
    const translateY = clientY - state.origin.y
    
    return setState(state => ({...state, isDragging: true, translation: {y: translateY}}))
    }
  },[state.origin, state.isDragging])

 

  const handleTouchEnd = () => {
    setState({isDragging: false, origin: { y:0}, translation: { y:0}})
  }


  React.useEffect(() => {
    
    if (state.isDragging) {
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleTouchEnd);
    } else {
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      setState({
        origin: { y: 0 },
        translation: { y: 0 },
        isDragging: false
      })
    }

  },[state.isDragging])

  
  return <section className={css.partsContainer}>
    <svg onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 51"><title>Asset 2</title><polyline className={css.arrow} points="3 48 75 3 147 48"/></svg>
  </section>
};
