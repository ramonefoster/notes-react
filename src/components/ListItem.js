import React from 'react'
import { Link } from 'react-router-dom'

let getDate = (note) => {
  return new Date(note.updated).toLocaleDateString()
}

let getTitle = (note) => {
  const title = note.body.split('\n')[0]

  if(title.length>40){
    return title.splice(0,40)
  }

  return title
}

let getContent = (note) => {
  //Get content after title
  let title = getTitle(note)
  let content = note.body.replaceAll('\n', '')
  content = content.replaceAll(title, '')

  //Slice content and add three dots in over 45 characters to show there is more
  if (content.length > 45) {
      return content.slice(0, 45) + '...'
  } else {
      return content
  }

}

export const ListItem = (props) => {
  return (
    <Link to={`/note/${props.note.id}`}>
        <div className='notes-list-item'>
            <h3>{getTitle(props.note)}</h3>
            <p><span>{getDate(props.note)}</span>{getContent(props.note)}</p>
        </div>
        
    </Link>
  )
}
