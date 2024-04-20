interface Props {
  children: React.ReactNode;
}

function Button({children, ...restProps}: Props) {
  return (
    <>
      <button {...restProps}>{children}</button>
    </>
  );
}

export default Button;
