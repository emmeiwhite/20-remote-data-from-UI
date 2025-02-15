import { createContext, useContext, useState } from 'react'
import { nanoid } from 'nanoid'
// 1. This is our Context
const ItemsContext = createContext()

// InitialState
const defaultItems = [
  { id: nanoid(), title: 'walk the dog', isDone: false },
  { id: nanoid(), title: 'wash dishes', isDone: false },
  { id: nanoid(), title: 'drink coffee', isDone: true },
  { id: nanoid(), title: 'take a nap', isDone: false }
]

function ItemsContextProvider({ children }) {
  const [items, setItems] = useState(defaultItems)
  const [newItemName, setNewItemName] = useState('')

  function handleFormSubmit(item) {
    const fullItem = {
      id: nanoid(),
      title: item,
      isDone: false
    }

    setItems([...items, fullItem])

    setNewItemName('')
  }

  function handleChecked(value, id) {
    console.log(value, id)
    const updatedItems = items.map(item => {
      if (item.id === id) {
        return { ...item, isDone: value }
      }
      return item
    })

    setItems(updatedItems)
  }

  const value = {
    items,
    handleFormSubmit,
    newItemName,
    setNewItemName,
    handleChecked
  }

  return <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
}

// Custom hook to save few lines of
const useCustomItems = () => useContext(ItemsContext)
export { useCustomItems, ItemsContextProvider }
