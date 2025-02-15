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
    console.log('we are here')
    const fullItem = {
      id: nanoid(),
      title: item,
      isDone: false
    }

    console.log(fullItem)
    setItems([...items, fullItem])
  }

  const value = {
    items,
    handleFormSubmit,
    newItemName,
    setNewItemName
  }

  return <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
}

// Custom hook to save few lines of
const useCustomItems = () => useContext(ItemsContext)
export { useCustomItems, ItemsContextProvider }
