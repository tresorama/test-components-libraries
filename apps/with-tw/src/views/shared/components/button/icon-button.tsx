// import { SVGIcon } from "../icons/svg-icon";

export const IconButton = ({ icon, color = "gray", size = "md" }: {
  icon: React.ReactNode,
  size?: "sm" | "md" | "lg";
  color?: "primary" | "gray" | 'outline',
}) => {
  return (
    <button
      type="button"
      className={`
    flex items-center rounded-[50%] 
    ${size === 'sm' ? "p-1 text-sm" : ''} 
    ${size === 'md' ? "p-1.5 text-md" : ''} 
    ${size === 'lg' ? "p-2 text-lg" : ''} 
    ${color === 'gray' ? "bg-gray-500 text-white" : ''} 
    ${color === 'primary' ? "bg-white text-black" : ''} 
    ${color === 'outline' ? "border border-white text-white" : ''} 
    `}>
      <div className="w-[1.35em]">
        {icon}
        {/* <SVGIcon icon={icon} /> */}
      </div>
    </button>
  );
};