import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GalleryContext } from '../../../contexts/GalleryContext'

function Post({
  id, name, src,
}) {
  const { deletePost } = useContext(GalleryContext)
  const deleteHandler = () => { // обработчик события "удалить пост"
    deletePost(id)
  }
  return (
    <div name="imgCard" className="card col" style={{ width: '18rem' }}>
      {/* переадресация на детальную страницу по клику на картинку */}
      <Link to={`/gallery/${id}`}>
        <img src={src} className="card-img-top pt-2" alt="" />
      </Link>
      <div className="card-body">
        <h5 className="card-title text-center">{name}</h5>
      </div>
      {/* далее идет кнопка удалить со значком мусорки */}
      <div>
        <button onClick={deleteHandler} type="button" aria-label="Save" className="btn w-25 btn-outline-secondary mb-2">
          <i className="bi bi-trash" />
        </button>
      </div>
    </div>
  )
}

export default Post
