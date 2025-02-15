import { useState } from 'react'
import { useCustomItems } from './ItemsContext'

const Form = () => {
  const { handleFormSubmit, newItemName, setNewItemName } = useCustomItems()

  const handleSubmit = e => {
    e.preventDefault()
    if (!newItemName) return

    handleFormSubmit(newItemName)
  }
  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className="form-control">
        <input
          type="text "
          className="form-input"
          value={newItemName}
          onChange={event => setNewItemName(event.target.value)}
        />
        <button
          type="submit"
          className="btn">
          add task
        </button>
      </div>
    </form>
  )
}
export default Form
