import { render } from "react-dom";
import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

import {ITooltipProps} from './Tooltip';

const useStyles = createUseStyles<"bottom" | "left" | "right" | "top" | "tooltipWrapper" | "tooltipTip", ITooltipProps, Jss.Theme>((theme) => ({
  tooltipWrapper: {
    display: 'inline-block',
    position: 'relative'
  },
  tooltipTip: {
    position: 'absolute',
    borderRadius: '4px',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '6px',
    color: (props: ITooltipProps) => props.textColor || '',
    background: (props: ITooltipProps) => props.color || '',
    fontSize: '14px',
    fontFamily: 'sans-serif',
    lineHeight: 1,
    zIndex: 100,
    whiteSpace: 'nowrap',
    /* border triangle*/
    '&:before': { 
      content: '" "',
      left: '50%',
      border: 'solid transparent',
      height: 0,
      width: 0,
      position: 'absolute',
      pointerEvents: 'none',
      borderWidth: '6px',
      marginleft: 'calc(6px * -1)'
    },
  },
  top: {
    top: 'calc(30px * -1)',
    '&:before': {
      top: '100%',
      borderTopColor: (props: ITooltipProps) => props.color|| ''
   }
  },
  right: {
    left: 'calc(100% + 30px)',
    top: '50%',
    transform: 'translateX(0) translateY(-50%)',
    '&:before': {
        left: 'calc(6px * -2)',
        top: '50%',
        transform: 'translateX(0) translateY(-50%)',
        borderRightColor: (props: ITooltipProps) => props.color|| ''
   }
  },
  bottom: {
    bottom: 'calc(30px * -1)',
    '&:before': {
      bottom: '100%',
      borderBottomColor: (props: ITooltipProps) => props.color || ''
    }
  },
  left: {
    left: 'auto',
    right: 'calc(100% + 30px)',
    top: '50%',
    transform: 'translateX(0) translateY(-50%)',
    '&:before': {
      left: 'auto',
      right: 'calc(6px * -2)',
      top: '50%',
      transform: 'translateX(0) translateY(-50%)',
      borderLeftColor: (props: {color:ITooltipProps}) => props.color || ''
    }
  }
}));

export default useStyles;