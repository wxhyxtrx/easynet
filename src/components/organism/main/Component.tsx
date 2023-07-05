import { IMain } from "./interface";
import Union1 from "../../../assets/images/Union3.png";
import Union2 from "../../../assets/images/Union4.png";

const Component: React.FC<IMain> = ({ children }) => {
  return (
    <div className=" relative w-full bg-[#026FED] allMobile:min-h-[20rem] ">
      <div className=" flex justify-between items-baseline -z-10 w-full max-h-full">
        <div>
          <img src={Union2} />
        </div>
        <div className=" allMobile:absolute allMobile:bottom-0 allMobile:right-0">
          <img src={Union1} />
        </div>
        <main className="absolute m-auto text-white top-0 bottom-0 right-0 left-0">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Component;
