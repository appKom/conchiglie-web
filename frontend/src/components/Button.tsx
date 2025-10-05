import type { ReactNode, MouseEvent } from 'react';

type color = 'red' | 'blue' | 'green' | 'yellow';

interface ButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  color: color;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const colorMap = new Map<color, string>([
  ['green', 'bg-dotpastelgreen'],
  ['blue', 'bg-dotblue'],
  ['red', 'bg-dotred'],
  ['yellow', 'bg-dotyellow'],
]);

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={
        'relative z-10 w-xs p-4 text-center text-4xl font-medium text-white shadow-[-10px_-10px_0px_0px_rgba(80,80,80,1)] ' +
        colorMap.get(props.color)
      }
      onClick={props.onClick}
      type={props.type || 'button'}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
