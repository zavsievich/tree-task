import { useState } from 'react';

type CheckboxProps = {
  label?: string;
  checked: boolean;
  onChange: () => void;
}

export const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    setIsChecked(!isChecked);
    onChange();
  }

  return (
    <label className="flex items-center">
      <input checked={isChecked} onChange={handleChange} type="checkbox" />
      {label && <span className='ml-2'>{label}</span>}
    </label>
  )
}
