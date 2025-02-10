type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Link = ({ children, ...props }: LinkProps) => {
  return <a {...props}>{children}</a>;
};

export default Link;
