export const SVGIcon = ({ icon }: { icon: React.ReactNode; }) => (
  <>
    <style>
      {`
    .svg-icon-wrapper {
      width: 100%;
      height: auto;
    }
    .svg-icon-wrapper svg {
      width: 100%;
      height: auto;
    }
    `}
    </style>
    <div className={"svg-icon-wrapper"}>
      {icon}
    </div>
  </>
);
