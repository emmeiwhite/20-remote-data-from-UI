import { useItemsContext } from './ItemsContext'
import SingleItem from './SingleItem'

const Items = () => {
  // Avoiding prop-drilling with ContextAPI
  const { items } = useItemsContext()
  return (
    <div className="items">
      {items.map(item => {
        return (
          <SingleItem
            key={item.id}
            item={item}
          />
        )
      })}
    </div>
  )
}
export default Items
