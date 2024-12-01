interface Props {
  showAlert: boolean;
}

const Button = ({ showAlert }: Props) => {
  const onButtonPress = () => {
    showAlert = !showAlert;
  };

  return (
    <>
      <button
        className="btn btn-danger"
        onClick={() => {
          onButtonPress();
        }}
      >
        Button
      </button>
    </>
  );
};

export default Button;
