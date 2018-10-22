import React from 'react'
import Tag from './tag'

export default function TagList({ tags }) {
  return (
    <ul>
      {tags.map((tag, idx) =>
        <Tag tag={tag} key={idx} />
      )}
    </ul>
  )
}
