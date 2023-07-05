import { useState } from "react";
import { BsCart3, BsGrid } from "react-icons/bs";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import Logo from "../../../assets/images/Logo.png";
import { dataStatic } from "../../../constant/dataStatic";
import { TShow } from "./interface";
import { FiChevronDown } from "react-icons/fi";

const Component: React.FC = () => {
  const screenWindow = window.innerWidth;
  console.log(screenWindow);

  return <div>{screenWindow > 688 ? <HeaderWeb /> : <HeaderMobile />}</div>;
};

const HeaderWeb: React.FC = () => {
  const [showItems, setShowItems] = useState<TShow>({
    id: "",
    status: false,
  });

  const handleShowItems = (idItem: string) => {
    setShowItems((prevState) => ({
      id: idItem,
      status: prevState?.id === idItem ? !showItems.status : true,
    }));
  };
  return (
    <header className="w-full flex items-center justify-stretch h-20 px-8">
      <div id="logo">
        <img src={Logo} className=" w-56" />
      </div>
      <section className="w-full items-center ">
        <menu className="text-white font-medium w-full flex justify-center items-center gap-10">
          {dataStatic?.dropdowns?.map((dropdown) => (
            <div key={dropdown.id}>
              <div
                onClick={() => handleShowItems(`menu${dropdown.id}`)}
                className="relative p-4 cursor-pointer flex items-center gap-2"
              >
                <label>{dropdown.menu}</label>
                <FiChevronDown />
              </div>
              {showItems.id === `menu${dropdown.id}` && showItems.status ? (
                <ul className="absolute bg-white text-black rounded-md shadow-md p-3 ">
                  {dropdown.subMenu.map((items) => (
                    <li
                      key={items.title}
                      className="p-4 py-5 my-1 mx-2 rounded-lg hover:bg-blue-100 cursor-pointer"
                    >
                      <div className="flex items-center gap-3 ">
                        {items.icon}
                        <div className="grid grid-rows-2 gap-1">
                          <label className="font-semibold leading-none text-base">
                            {items.title}
                          </label>
                          <label className="font-normal leading-none text-neutral text-sm ">
                            {items.subtile}
                          </label>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </menu>
      </section>
      <div id="action" className="flex items-center gap-5">
        <div className="mx-8">
          <a href="#" className="text-white">
            <BsCart3 size={25} />
          </a>
        </div>
        <button
          type="button"
          className="cursor-pointer border-2 border-white rounded-full px-4 w-24 h-11 text-white font-semibold hover:bg-secondary hover:border-secondary"
        >
          <label>Login</label>
        </button>
      </div>
    </header>
  );
};

const HeaderMobile: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const [showItems, setShowItems] = useState<TShow>({
    id: "",
    status: false,
  });

  const handleShowItems = (idItem: string) => {
    setShowItems((prevState) => ({
      id: idItem,
      status: prevState?.id === idItem ? !showItems.status : true,
    }));
  };
  console.log(showItems);

  return (
    <header className=" fixed w-full z-10 bg-gradient-to-r from-[#026FED] to-primary-500 via-primary from-35%  via-50% grid grid-cols-2 items-center justify-stretch p-3">
      <div className="w-full">
        <img src={Logo} className="w-52" />
      </div>
      <section className="w-full flex items-center justify-end gap-5">
        <div>
          <a href="#" className="text-white">
            <BsCart3 size={25} />
          </a>
        </div>
        <button
          type="button"
          className="cursor-pointer  border-white rounded-full p-3 text-white font-bold "
          onClick={() => setShow(!show)}
        >
          <BsGrid size={25} />
        </button>
      </section>
      {show && (
        <div id="dropdown" className={`col-span-2 my-2 h-screen`}>
          <ul className="w-full ">
            {dataStatic.dropdowns.map((dropdown, idx) => (
              <li key={dropdown.id} className="">
                <div
                  id="menu"
                  onClick={() => handleShowItems(`menu${idx}`)}
                  className="flex items-center justify-between gap-2 p-2 text-white font-semibold"
                >
                  <label>{dropdown.menu}</label>
                  {showItems.id === `menu${idx}` && showItems.status ? (
                    <FaChevronDown />
                  ) : (
                    <FaChevronRight />
                  )}
                </div>
                <div
                  id="items"
                  className={`w-full bg-white rounded-md mb-2 transition-max-h ${
                    showItems.id === `menu${idx}` && showItems.status
                      ? " min-h-0"
                      : " max-h-0 overflow-hidden "
                  }`}
                >
                  <ul className="text-primary p-2 flex flex-col gap-2">
                    {dropdown.subMenu?.map((items) => (
                      <li
                        key={items.title}
                        className="flex items-center gap-3 cursor-pointer hover:bg-blue-50 p-2 px-3 rounded-md "
                      >
                        <div id="icon">{items.icon}</div>
                        <div>
                          <label className="text-black font-semibold text-base">
                            {items.title}
                          </label>
                          <p className="text-neutral font-normal text-sm">
                            {items.subtile}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Component;
