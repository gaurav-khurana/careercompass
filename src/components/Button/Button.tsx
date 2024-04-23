import "./Button.scss";

interface Props {
  containerClassName: string;
  buttonType: any;
  buttonText: string;
  buttonHandler: () => void;
}

function Button({
  containerClassName,
  buttonClassName,
  buttonType,
  buttonText,
  buttonHandler,
}: Props) {
  return (
    <>
      <div className={containerClassName}>
        <button
          className={`btn ${buttonClassName}`}
          onClick={buttonHandler}
          type={buttonType}
        >
          {buttonText}
        </button>
      </div>
    </>
  );
}

export default Button;
