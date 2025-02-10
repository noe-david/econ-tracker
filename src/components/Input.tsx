type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: Pick<React.InputHTMLAttributes<HTMLInputElement>, "name">;
  type: Pick<React.InputHTMLAttributes<HTMLInputElement>, "type">;
};

const Input = ({ label, name, type, ...props }: InputProps) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} {...props} />
    </div>
  );
};

export default Input;
