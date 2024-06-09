import React from "react";

interface InputTextProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
}

const InputText = ({
    value,
    onChange,
    placeholder,
    className,
}: InputTextProps) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`px-4 py-2 border rounded ${className}`}
        />
    );
};

export default InputText;
