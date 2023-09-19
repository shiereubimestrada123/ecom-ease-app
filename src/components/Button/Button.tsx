type ButtonProps = {
  text: string;
  onClick?: () => void;
  className: string;
  type: 'button' | 'submit' | 'reset';
};

export function Button({ type, text, onClick, className }: ButtonProps) {
  return (
    <button type={type} className={className} onClick={onClick}>
      {text}
    </button>
  );
}
