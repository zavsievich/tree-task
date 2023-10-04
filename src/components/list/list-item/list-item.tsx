import { useState } from 'react';
import { Checkbox } from '../../checkbox/checkbox'

export type ListItemProps = {
 name: string;
 items?: ListItemProps[];
}

export const ListItem = ({ name }: ListItemProps) => {
  const handleChange = () => {
    console.log('hi')
  }
  const [checked, setChecked] = useState(false);

  return (
        <div className="">
            <Checkbox onChange={handleChange} checked={checked} label={name} />
        </div>
  )
}
