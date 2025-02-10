type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
};

const Button = ({ label, ...props }: ButtonProps) => {
  return <button {...props}>{label}</button>;
};

export default Button;
