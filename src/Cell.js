const Cell = ({ value }) => {

  const displayValue =
    typeof value === "object" ? JSON.stringify(value) : value;

  return <td>{displayValue}</td>;
};

export default Cell;
