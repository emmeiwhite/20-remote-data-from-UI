import { useState } from 'react'
import { useCustomItems } from './ItemsContext'

const SingleItem = ({ item }) => {
  const { handleChecked, handleDelete } = useCustomItems()

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={e => handleChecked(e.target.checked, item.id)}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.isDone && 'line-through'
        }}>
        {item.title}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => handleDelete(item.id)}>
        delete
      </button>
    </div>
  )
}
export default SingleItem
