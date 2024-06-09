interface ButtonProps {
    onClick: () => void;
    label: string;
    children?: React.ReactNode;
    className?: string;
}

const Button = ({ onClick, label, children, className }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 bg-black text-white rounded ${className}`}
        >
            {label}
            {children}
        </button>
    );
};

export default Button;
