interface Props {
  onClick: () => void;
  children: string;
}

const Button = ({ onClick }: Props) => {
  return (
    <>
      <button onClick={onClick} className="btn btn-danger">
        Button
      </button>
    </>
  );
};

export default Button;
