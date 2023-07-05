import { ICard } from "./interface";

const Component: React.FC<ICard> = ({ children, ...props }) => {
  return (
    <div
      className={` max-w-full bg-white h-auto ${
        props.active ? "border-2 border-secondary" : "shadow-md"
      } ${props.className}`}
      onClick={() => props.onClick}
    >
      {children}
    </div>
  );
};

export default Component;
