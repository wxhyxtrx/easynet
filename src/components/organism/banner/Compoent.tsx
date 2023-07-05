import { IBanner } from "./interface";
import Union1 from "../../../assets/images/Union1.png";
import Union2 from "../../../assets/images/Union2.png";

const Component: React.FC<IBanner> = ({ children }) => {
  return (
    <div className="relative h-full bg-gradient-to-r from-[#026FED] to-primary-500 via-primary from-35%  via-50% overflow-hidden">
      <div className="absolute z-10 w-full h-full top-0 left-0 right-0">
        {children}
      </div>
      <div className="flex justify-end -z-0">
        <img
          src={Union1}
          className=" absolute right-0 allMobile:bottom-10 allTab:bottom-0 allDekstop:bottom-0"
        />
        <img
          src={Union2}
          className="absolute bottom-0 right-0 allMobile:w-52"
        />
      </div>
    </div>
  );
};

export default Component;
