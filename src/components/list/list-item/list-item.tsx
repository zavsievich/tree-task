import { Checkbox } from '../../checkbox/checkbox'

interface ListItemProps {
  label: string
  checked: boolean
}

export const ListItem = ({ label, checked }: ListItemProps) => {
  const handleChange = () => {
    console.log('hi')
  }

  return (
        <div className="">
            <Checkbox onChange={handleChange} checked={checked} label={label} />
        </div>
  )
}
