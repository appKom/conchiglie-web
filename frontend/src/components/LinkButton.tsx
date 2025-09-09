import type { ReactNode } from "react";


type color = "red" | "blue" | "green" | "yellow"

interface ButtonProps{
  children: ReactNode;
  link: string; 
  color: color;
}

const colorMap = new Map<color, string>([
  ["green", "bg-dotgreen"],
  ["blue", "bg-dotblue"],
  ["red", "bg-dotred"],
  ["yellow", "bg-dotyellow"]
]);

export const LinkButton = (props: ButtonProps) => {
  return(
    <a 
      className={"text-4xl font-medium text-white w-xs p-4 text-center shadow-[-10px_-10px_0px_0px_rgba(80,80,80,1)] relative z-10 " + colorMap.get(props.color)}
      href={props.link}
    >
      <slot>{props.children}</slot>
    </a>
  );
};