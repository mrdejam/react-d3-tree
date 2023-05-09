import React from 'react';
import { TransitionGroup } from '@bkrem/react-transition-group';

interface TransitionGroupWrapperProps {
  enableLegacyTransitions: boolean;
  component: string;
  className: string;
  transform: string;
  subs: React.ReactNode;
}

const TransitionGroupWrapper = (props: TransitionGroupWrapperProps) =>
  props.enableLegacyTransitions ? (
    <TransitionGroup
      component={props.component}
      className={props.className}
      transform={props.transform}
    >
      {props.subs}
    </TransitionGroup>
  ) : (
    <g className={props.className} transform={props.transform}>
      {props.subs}
    </g>
  );

export default TransitionGroupWrapper;
