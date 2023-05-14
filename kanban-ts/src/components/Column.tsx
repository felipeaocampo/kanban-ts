interface ColumnProps {
  children?: React.ReactNode;
}

const Column: React.FC<ColumnProps> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: `red`,
        width: `200px`,
        height: `200px`,
        padding: `2rem`,
      }}
    >
      {children}
    </div>
  );
};

export default Column;
