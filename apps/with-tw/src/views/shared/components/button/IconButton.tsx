export const IconButton = ({ icon, color = "gray", size = "md" }: {
  icon: React.ReactNode,
  size?: "sm" | "md" | "lg";
  color?: "primary" | "gray" | 'outline',
}) => {
  return (
    <button
      type="button"
      className={`
    flex items-center justify-center rounded-[50%] 
    ${size === 'sm' ? "text-xs min-w-[2.3em] min-h-[2.3em]" : ''} 
    ${size === 'md' ? "text-sm min-w-[2.5em] min-h-[2.5em]" : ''} 
    ${size === 'lg' ? "text-md min-w-[2.6em] min-h-[2.6em]" : ''} 
    ${color === 'gray' ? "bg-gray-500 text-white" : ''} 
    ${color === 'primary' ? "bg-white text-black" : ''} 
    ${color === 'outline' ? "border-2 border-gray-400 text-white" : ''} 
    `}>
      <div className="w-[1em]">
        {icon}
      </div>
    </button>
  );
};