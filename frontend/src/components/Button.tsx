import type { ReactNode, MouseEvent } from 'react';

type color = 'purple' | 'green' | 'yellow';

interface ButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  color: color;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const colorMap = new Map<color, string>([
  ['green', 'bg-dotgreen'],
  ['purple', 'bg-dotpurple'],
  ['yellow', 'bg-dotyellow'],
]);

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={
        'relative z-10 border-3 border-black px-6 py-3 text-center text-2xl font-medium text-white shadow-[-4px_-4px_0px_0px_rgba(80,80,80,1)] ' +
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
