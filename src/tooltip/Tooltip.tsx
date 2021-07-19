import React, {ReactElement, ReactNode, useState} from 'react';
import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

import useStyles from './Tooltip-style';
// import './Tooltip.css'

interface ITooltipProps {
    direction: string;
    color: string;
    textColor: string;
    delay?: number;
    children: ReactElement;
    content: ReactNode
}

const Tooltip = (props: ITooltipProps): ReactElement | null => {
    const {direction, color, textColor} = props;
  
    let timeout: NodeJS.Timeout;
    const theme = useTheme();
    const classes = useStyles(props);
    const [active, setActive] = useState<boolean>(false);

    const showTip = (): void => {
      timeout = setTimeout(() => {
        setActive(true);
      }, props.delay || 400);
    };
    const hideTip = (): void => {
        clearInterval(timeout);
        setActive(false);
    };

    const setDirection = (direction: string): string => {
      switch (direction) {
        case 'top':
          return classes.top;
        case 'right':
          return classes.right;
        case 'bottom':
            return classes.bottom;
        case 'left':
            return classes.left;
        default:
          // set top as default if no valid value 
          return classes.top;
      }
    }
      return (
        <div
          className={classes.tooltipWrapper}
          // When to show the tooltip
          onMouseEnter={showTip}
          onMouseLeave={hideTip}
        >
          {/* Wrapping */}
          {props.children}
          {active && (
            <div
              className={`${classes.tooltipTip} ${setDirection(direction)}`}>
              {/* Content */}
              {props.content}
            </div>
          )}
        </div>
      );
}


export default Tooltip;