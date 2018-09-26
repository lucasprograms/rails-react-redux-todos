import React from 'react'

const TodoTagsView = ({ tags }) => {
  return (
    <ul>
      <li className="col-12 pl-0 font-weight-bold">Tags:</li>
      {tags.map((tag, idx) => (
        <li className="badge badge-light" key={idx}>{tag.name}</li>
      ))}
    </ul>
  )
}

export default TodoTagsView
