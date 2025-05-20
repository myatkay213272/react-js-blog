import Button from './Button';

const Form = ({ reqType, setReqType }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="d-flex gap-2 justify-content-center mb-4">
      <Button buttonText="users" reqType={reqType} setReqType={setReqType} />
      <Button buttonText="posts" reqType={reqType} setReqType={setReqType} />
      <Button buttonText="comments" reqType={reqType} setReqType={setReqType} />
    </form>
  );
};

export default Form;
