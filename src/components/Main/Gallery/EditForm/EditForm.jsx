import { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GalleryContext } from '../../../contexts/GalleryContext'

function EditForm({
  name, description, src, tags,
}) {
  const { posts } = useContext(GalleryContext)
  const { id } = useParams()
  const indexPost = posts.findIndex((post) => post.id === id)
  const [editName, setEditName] = useState(name)// начальное состояние для поля ввода названия
  const changeHandlerName = (e) => { // функция изменения для поля ввода названия
    setEditName(e.target.value)
  }

  const [editDescription, setEditDescription] = useState(description)// начальное состояние для поля ввода описания
  const changeHandlerDescription = (e) => { // функция изменения для поля ввода описания
    setEditDescription(e.target.value)
  }

  const [editSrc, setEditSrc] = useState(src)// начальное состояние для поля ввода ссылки
  const changeHandlerSrc = (e) => { // функция изменения для поля ввода ссылки
    setEditSrc(e.target.value)
  }

  const [editTags, setEditTags] = useState(tags)// начальное состояние для поля ввода тегов
  const changeHandlerTags = (e) => { // функция изменения для поля ввода тегов
    setEditTags(e.target.value)
  }

  posts[indexPost].name = editName
  posts[indexPost].src = editSrc
  posts[indexPost].description = editDescription
  posts[indexPost].tags = editTags

  const editSubmit = (e) => {
    e.preventDefault()
    setEditName(editName)
    setEditSrc(editSrc)
    setEditDescription(editDescription)
    setEditTags(editTags)
  }

  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={editSubmit} className="d-flex flex-column align-items-center w-75 py-10">
        <div className="mb-3">
          <input
            onChange={changeHandlerName}
            name="name"
            placeholder="Название"
            type="text"
            className="form-control"
            value={editName}
          />
        </div>
        <div className="mb-3">
          <input
            onChange={changeHandlerDescription}
            name="description"
            placeholder="Описание"
            type="text"
            className="form-control"
            value={editDescription}
          />
        </div>
        <div className="mb-3">
          <input
            onChange={changeHandlerSrc}
            name="src"
            placeholder="Ссылка на изображение"
            type="text"
            className="form-control"
            value={editSrc}
          />
        </div>
        <div className="mb-3">
          <input
            onChange={changeHandlerTags}
            name="tags"
            placeholder="Теги"
            type="text"
            className="form-control"
            value={editTags}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
        >
          Изменить

        </button>
      </form>
    </div>
  )
}

export default EditForm
