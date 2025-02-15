import { createContext, useContext, useState } from 'react'
import { nanoid } from 'nanoid'
// 1. This is our Context
export const ItemsContext = createContext()

// InitialState
const defaultItems = [
  { id: nanoid(), title: 'walk the dog', isDone: false },
  { id: nanoid(), title: 'wash dishes', isDone: false },
  { id: nanoid(), title: 'drink coffee', isDone: true },
  { id: nanoid(), title: 'take a nap', isDone: false }
]

function ItemsContextProvider({ children }) {
  const [items, setItems] = useState(defaultItems)

  const value = {
    items: defaultItems
  }

  return <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
}

// Custom hook to save few lines of
export const useItemsContext = () => useContext(ItemsContext)
export default ItemsContextProvider
