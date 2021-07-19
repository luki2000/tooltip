import React, {ReactElement, ReactNode, useState} from 'react';
import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
import useStyles from './Tooltip-style';

export interface ITooltipProps {
    direction: string;
    children: ReactElement;
    tooltipMessage: ReactNode;
    color?: string;
    textColor?: string;
    delay?: number;
}

enum tooltipDirectionEnum {
  TOP = 'top',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  LEFT = 'left'
}


const Tooltip = (props: ITooltipProps): ReactElement | null => {
    const {direction, delay, tooltipMessage} = props;
  
    let timeout: NodeJS.Timeout;
    // const theme = useTheme();
    const classes = useStyles(props);
    const [active, setActive] = useState<boolean>(false);

    /**
     * Displays tooltip
     */
    const showTip = (): void => {
      timeout = setTimeout(() => {
        setActive(true);
      }, delay || 400);
    };

    /**
     * Hides tooltip
     */
    const hideTip = (): void => {
        clearInterval(timeout);
        setActive(false);
    };

    /**
     * Sets the direction of the tooltip
     * @param direction 
     * @returns 
     */
    const setDirection = (direction: string): string => {
      switch (direction) {
        case tooltipDirectionEnum.TOP:
          return classes.top;
        case tooltipDirectionEnum.RIGHT:
          return classes.right;
        case tooltipDirectionEnum.BOTTOM:
            return classes.bottom;
        case tooltipDirectionEnum.LEFT:
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
          {/* Target element of tooltip */}
          {props.children}
          {active && (
            <div
              className={`${classes.tooltipTip} ${setDirection(direction)}`}>
              {/* Content */}
              {tooltipMessage}
            </div>
          )}
        </div>
      );
}


export default Tooltip;