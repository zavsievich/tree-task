type CheckboxProps = {
  label?: string;
  checked: boolean;
  onChange: () => void;
}

export const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <label className="">
      <input checked={checked} onChange={onChange} type="checkbox" />
      {label && <span>{label}</span>}
    </label>
  )
}
