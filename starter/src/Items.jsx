import { useCustomItems } from './ItemsContext'
import SingleItem from './SingleItem'

const Items = () => {
  // Avoiding prop-drilling with ContextAPI
  const { items } = useCustomItems()
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
