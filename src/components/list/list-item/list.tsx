import { ListItem } from './list-item'

interface ListProps {
  list: Array<{
    name: string
    checked: boolean
  }>
}

export const List = ({ list }: ListProps) => {
  if (list.length === 0) return (<div>No items</div>)

  return (
        <div className="">
            {list.map((item) => (
                <ListItem key={item.name} label={item.name} checked={item.checked} />
            ))}
        </div>
  )
}
