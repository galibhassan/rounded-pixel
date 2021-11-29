import classes from "./boardContainer.module.css";
import { Board } from "../board/board.component";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { drawingActions } from "../../store/drawingSlice";

import { createRef } from "react";

export const BoardContainer = (props) => {
  const { boardContainerSize } = useSelector((state) => state.drawingReducer);
  const boardContainerRef = createRef();
  const dispatch = useDispatch();

  console.log(boardContainerSize);

  useEffect(() => {
    dispatch(
      drawingActions.setBoardContainerSize({
        boardContainerSize: {
          width: parseInt(boardContainerRef.current.clientWidth),
          height: parseInt(boardContainerRef.current.clientHeight),
        },
      })
    );
  }, []);

  return (
    <div className={classes.boardContainer} ref={boardContainerRef}>
      <Board
        parentWidth={boardContainerSize.width}
        parentHeight={boardContainerSize.height}
      />
    </div>
  );
};
