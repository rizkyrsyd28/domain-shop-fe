export interface Option {
    value: string;
    label: string;
}

interface SelectDropdownProps {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    label?: string;
}

const SelectDropdown = ({
    options,
    value,
    onChange,
    label,
}: SelectDropdownProps) => {
    return (
        <div className="mb-4">
            {label && <label className="block mb-2">{label}</label>}
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full px-4 py-2 border rounded"
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectDropdown;
