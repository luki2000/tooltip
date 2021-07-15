import React, {ReactElement, useState} from 'react';
import './Tooltip.css';

interface ITooltipProps{
    delay?: number;
    direction: string;
    textColor?: string; 
    primary?: string;
    children?: ReactElement;
    content: any
}

const Tooltip = (props: ITooltipProps): ReactElement<any, any> | null => {
    console.log(props);
    let timeout: NodeJS.Timeout;
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
      return (
        <div
          className="Tooltip-Wrapper"
          // When to show the tooltip
          onMouseEnter={showTip}
          onMouseLeave={hideTip}
        >
          {/* Wrapping */}
          {props.children}
          {active && (
            <div className={`Tooltip-Tip ${props.direction || "top"}`}>
              {/* Content */}
              {props.content}
            </div>
          )}
        </div>
      );
}


export default Tooltip;