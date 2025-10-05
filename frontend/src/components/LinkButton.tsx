import type { ReactNode } from 'react';

type color = 'purple' | 'green' | 'yellow';

interface ButtonProps {
  children: ReactNode;
  link: string;
  color: color;
}

const colorMap = new Map<color, string>([
  ['green', 'bg-dotgreen'],
  ['purple', 'bg-dotpurple'],
  ['yellow', 'bg-dotyellow'],
]);

export const LinkButton = (props: ButtonProps) => {
  return (
    <a
      className={
        'text-xl font-medium text-white px-6 py-3 text-center shadow-[-4px_-4px_0px_0px_rgba(80,80,80,1)] relative z-10 border-3 border-black ' +
        colorMap.get(props.color)
      }
      href={props.link}
    >
      <slot>{props.children}</slot>
    </a>
  );
};
