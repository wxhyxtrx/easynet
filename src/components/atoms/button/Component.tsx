import { IButton } from "./interface";
const Component: React.FC<IButton> = ({
  color = "primary",
  theme = "bgcolor",
  disabled,
  children,
  className,
  type,
  onClick,
}) => {
  
  const styleButtonMap = {
    primary: {
      bgcolor: disabled
        ? "bg-neutral-200 text-neutral cursor-no-drop"
        : "bg-primary-600 hover:bg-primary text-white focus:bg-primary-800 active:border-2 active:border-primary-700",
      outline: disabled
        ? "bg-white border border-neutral-200 text-neutral cursor-no-drop"
        : "bg-white border border-primary-600 text-primary-600 hover:border-primary hover:text-primary focus:border-primary-800 focus:text-primary-800 active:border-2 active:border-primary-800 active:text-primary-800",
      transparant: disabled
        ? "text-neutral cursor-no-drop bg-transparant"
        : "text-primary-600 hover:text-primary focus:text-primary-800 active:text-primary-800 bg-transparant",
    },
    secondary: {
      bgcolor: disabled
        ? "bg-neutral-200 text-neutral cursor-no-drop"
        : "bg-secondary-600 hover:bg-secondary-700 text-white focus:bg-secondary-800 active:border-2 active:border-secondary-700",
      outline: disabled
        ? "bg-white border border-neutral-200 text-neutral cursor-no-drop"
        : "bg-white border border-secondary-600 text-secondary-600 hover:border-secondary-700 hover:text-secondary-700 focus:border-secondary-800 focus:text-secondary-800 active:border-2 active:border-secondary-800 active:text-secondary-800",
      transparant: disabled
        ? "text-neutral cursor-no-drop bg-transparant"
        : "text-secondary-600 hover:text-secondary-700 focus:text-secondary-800 active:text-secondary-800 bg-transparant",
    },
  };

  const styleButton =
    styleButtonMap[color]?.[theme] || styleButtonMap.primary.bgcolor;

  return (
    <button
      type={type}
      className={`min-w-[100px] p-2 ${styleButton} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Component;
