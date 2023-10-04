import { ListItem, ListItemProps } from './list-item/list-item';

type ListProps = {
  items: ListItemProps[];
}

export const List = ({ items }: ListProps) => {
  if (items.length === 0) return (<div>No items</div>)

  return (
        <div className="ml-4">
            {items.map((item) => {
              return (
                <>
                  <ListItem key={item.name} name={item.name} items={items} />
                  {item.items && <List items={item.items} />}
                </>
              )
              })}
        </div>
  )
}
