import * as React from "react";
import css from "./PartsContainer.module.scss";

export const PartsContainer: React.FC = () => {
  const [extend, setExtend] = React.useState<boolean>(false);
  const [state, setState] = React.useState<{isDragging: boolean, origin:{ y: number}, translation: { y: number}}>({isDragging: false, origin: { y:0}, translation: { y:0}})


 
  const handleTouchStart = ({touches}) => {
    const {clientY} = touches[0]
    // window.addEventListener("touchmove", handleTouchMove);
    setState(state => ({...state,
      isDragging: true,
      origin:{ y: clientY},
    }))
  }




  
  const handleTouchMove = React.useCallback(({touches}) => {
    if(state.isDragging){
    const {clientY} = touches[0]
     setState({ isDragging: true, origin:{y: state.origin.y}, translation: {y: clientY <= state.origin.y ? clientY - state.origin.y : 0}})

    }
    else{ setState({isDragging: false, origin:{y:0}, translation:{y: 0}})}

  },[ state.isDragging])



 

  const handleTouchEnd = () => {
    window.removeEventListener("touchmove", handleTouchMove);
    window.removeEventListener("touchend", handleTouchEnd);
    setState({isDragging: false, origin: { y:0}, translation: { y:0}})
    console.log(`touch stopped`)

  }


  React.useEffect(() => {
    if (state.isDragging) {
      window.addEventListener("touchmove", handleTouchMove);
    } else {
      window.removeEventListener("touchmove", handleTouchMove);
    }

  },[state.isDragging])


  return <section className={css.partsContainer} style={{height: `calc(20% - ${state.translation.y}px)`}}>
    <svg onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 51"><title>Asset 2</title><polyline className={css.arrow} points="3 48 75 3 147 48"/></svg>
  </section>
};
