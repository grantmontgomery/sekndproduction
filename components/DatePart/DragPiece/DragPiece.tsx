import * as React from "react";
import {
  useSquaresState,
  useSquaresDispatch,
} from "../../../state/GridSquaresContext";
import { DragPieceDisplay } from "./DragPieceDisplay";

export type DragState = {
  isDragging: boolean;
  originalX: number;
  originalY: number;
  translateX: number;
  translateY: number;
  lastTranslateX: number;
  lastTranslateY: number;
  draggingElement: any;
  droppable: HTMLDivElement | null;
};

export class DragPiece extends React.Component {
  state: DragState;

  isDragging: boolean;
  constructor({
    part,
    index,
    onGrid,
  }: {
    onGrid?: boolean;
    index?: number;
    part?: { [key: string]: any };
  }) {
    super({ part, index, onGrid });
    this.state = {
      isDragging: false,
      originalX: 0,
      originalY: 0,
      translateX: 0,
      translateY: 0,
      lastTranslateX: 0,
      lastTranslateY: 0,
      draggingElement: null,
      droppable: null,
    };
  }

  handleMouseMove = (event: MouseEvent): void => {
    const { isDragging, draggingElement } = this.state;
    const clientX = event.clientX as number;
    const clientY = event.clientY as number;
    if (isDragging) {
      console.log(draggingElement);
      draggingElement.hidden = true;
      const elemBelow: Element = document.elementFromPoint(clientX, clientY);
      draggingElement.hidden = false;
      this.setState((state) => ({
        ...state,
        droppable: elemBelow,
        translateX: clientX + this.state.lastTranslateX + this.state.originalX,
        translateY: clientY + this.state.lastTranslateY + this.state.originalY,
      }));
    }
  };

  handleMouseUp = (): void => {
    const { droppable, draggingElement } = this.state;
    const squareElements: HTMLCollectionOf<Element> = document.getElementsByClassName(
      "square"
    );
    if (!droppable || !droppable.className.includes("square")) {
    }
    for (let i = 0; i < squareElements.length; i++) {}
  };

  handleMouseDown = (event: React.MouseEvent): void => {
    const currentTarget = event.currentTarget as HTMLDivElement;
    const childNodes = currentTarget.childNodes as NodeListOf<ChildNode>;
    const clientX = event.clientX as number;
    const clientY = event.clientY as number;
    window.addEventListener("mousemove", this.handleMouseMove);
    window.addEventListener("mouseup", this.handleMouseUp);
    console.log(currentTarget);
    currentTarget.hidden = true;
    const elemBelow: Element = document.elementFromPoint(clientX, clientY);
    currentTarget.hidden = false;

    this.setState((state) => ({
      ...state,
      isDragging: true,
      originalX: clientX,
      originalY: clientY,
      draggingElement: event.target,
      droppable: elemBelow,
    }));
  };

  // componentWillUnmount() {
  //   window.removeEventListener("mousemove", this.handleMouseMove);
  //   window.removeEventListener("mouseup", this.handleMouseUp);
  // }

  render() {
    return (
      <DragPieceDisplay
        dragState={this.state}
        handleMouseDown={this.handleMouseDown}
      ></DragPieceDisplay>
    );
  }
}
