import { SVGIcon } from "../svg-icon/svg-icon";

export const Button = ({ text, leftIcon, rightIcon, color = "gray", size = "md" }: {
  text?: string,
  leftIcon?: React.ReactNode,
  rightIcon?: React.ReactNode,
  size?: "sm" | "md" | "lg";
  color?: "primary" | "gray",
}) => {
  return (
    <button
      type="button"
      className={`
    flex items-center rounded 
    font-bold 
    ${size === 'sm' ? "gap-0.5 px-3 py-1 text-sm" : ''} 
    ${size === 'md' ? "gap-2 px-5 py-1.5 text-md" : ''} 
    ${size === 'lg' ? "gap-2 px-7 py-2 text-lg" : ''} 
    ${color === 'gray' ? "bg-gray-500 text-white" : ''} 
    ${color === 'primary' ? "bg-white text-black" : ''} 
    `}>
      {leftIcon && (
        <div className="w-[1.35em] -ml-1">
          <SVGIcon icon={leftIcon} />
        </div>
      )}
      {text && (
        <span>{text}</span>
      )}
      {rightIcon && (
        <div className="w-[1.35em] -ml-1">
          <SVGIcon icon={rightIcon} />
        </div>
      )}
    </button>
  );
};
