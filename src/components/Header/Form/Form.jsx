import { useContext, useState } from 'react'
import { GalleryContext } from '../../contexts/GalleryContext'

function Form() {
  const { addNewPost } = useContext(GalleryContext)

  const [name, setName] = useState('')// начальное состояние для поля ввода названия
  const changeHandlerName = (e) => { // функция изменения для поля ввода названия
    setName(e.target.value)
  }

  const [description, setDescription] = useState('')// начальное состояние для поля ввода описания
  const changeHandlerDescription = (e) => { // функция изменения для поля ввода описания
    setDescription(e.target.value)
  }

  const [src, setSrc] = useState('')// начальное состояние для поля ввода ссылки
  const changeHandlerSrc = (e) => { // функция изменения для поля ввода ссылки
    setSrc(e.target.value)
  }

  const [tags, setTags] = useState('')// начальное состояние для поля ввода тегов
  const changeHandlerTags = (e) => { // функция изменения для поля ввода тегов
    setTags(e.target.value)
  }

  const submitHandler = (e) => { // обработчик отправки формы
    e.preventDefault()// без обновления страницы при отправке
    addNewPost(name, description, src, tags)// данные из формы
    setName('')// очистка формы после отправки
    setDescription('')
    setSrc('')
    setTags('')
  }

  return (// разметка формы
    <div className="d-flex justify-content-center">
      <form onSubmit={submitHandler} className="d-flex flex-column align-items-center w-75 py-10">
        <div className="mb-3 w-50">
          <input
            onChange={changeHandlerName}
            name="name"
            placeholder="Название"
            type="text"
            className="form-control"
            value={name}
          />
        </div>
        <div className="mb-3 w-50">
          <input
            onChange={changeHandlerDescription}
            name="description"
            placeholder="Описание"
            type="text"
            className="form-control"
            value={description}
          />
        </div>
        <div className="mb-3 w-50">
          <input
            onChange={changeHandlerSrc}
            name="src"
            placeholder="Ссылка на изображение"
            type="text"
            className="form-control"
            value={src}
          />
        </div>
        <div className="mb-3 w-50">
          <input
            onChange={changeHandlerTags}
            name="tags"
            placeholder="Теги"
            type="text"
            className="form-control"
            value={tags}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
        >
          Добавить

        </button>
      </form>
    </div>
  )
}

export default Form
