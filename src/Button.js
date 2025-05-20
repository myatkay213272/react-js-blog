const Button = ({ buttonText, reqType, setReqType }) => {
  const isActive = buttonText === reqType;

  return (
    <button
      type="button"
      onClick={() => setReqType(buttonText)}
      className={`btn ${isActive ? 'btn-success' : 'btn-outline-success'}`}
    >
      {buttonText}
    </button>
  );
};

export default Button;
