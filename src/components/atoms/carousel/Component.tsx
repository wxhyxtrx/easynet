import { ICarousel } from "./interface";

const Components: React.FC<ICarousel> = ({ children }) => {
  return (
    <div className=" carousel w-full">
      <div className=" ">{children}</div>
    </div>
  );
};

export default Components;
