const Button = ({ type, ...props }) => {
  return <button {...props} type={type} />;
};

export default Button;
