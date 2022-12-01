export const AspectRatio = ({ children, ratio = 16 / 9 }: {
  ratio: number,
  children:
  | ((data: { paddingBottom: string; }) => JSX.Element)
  | React.ReactNode,
}) => {
  const paddingBottom = `${((1 / (ratio)) * 100).toFixed(2)}%`;
  if (typeof children === 'function') {
    return children({ paddingBottom });
  }
  return (
    <div style={{ paddingBottom }}>
      {children}
    </div>
  );
};
