import { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GalleryContext } from '../../../../contexts/GalleryContext'
import Modal from '../../../../Modal/Modal'
import EditForm from '../../EditForm/EditForm'

function PostDetail() {
  const { posts } = useContext(GalleryContext)
  const { id } = useParams() // получаем id нужного поста из параметров запроса
  const navigate = useNavigate() // Для кнопки "назад"
  const [viewModal, setViewModal] = useState(false)
  const openModal = () => {
    setViewModal(true)
  }

  const closeModal = () => {
    setViewModal(false)
  }

  const content = () => {
    const currentPost = posts.find((post) => post.id === id)// ищем элемент с нужным id и показываем пользователю

    return (
      <>
        <div name="imgCard" className="card pt-1 pe-2 ps-2" style={{ width: '18rem' }}>
          <img src={currentPost.src} className="card-img-top pt-2" alt="" />
          <div className="card-body">
            <h5 className="card-title text-center">{currentPost.name}</h5>
            <p className="card-text">{currentPost.description}</p>
            <p className="text-primary fst-italic">{currentPost.tags}</p>
          </div>
          <div className="d-flex justify-content-around">
            {/* далее идет кнопка "назад" со значком */}
            <button type="button" onClick={() => { navigate(-1) }} className="btn btn-outline-danger w-25 mb-2">
              <i className="bi bi-skip-backward" />
            </button>
            {/* далее идет кнопка "редактировать" со значком */}
            <button type="button" onClick={openModal} className="btn btn-outline-success w-25 mb-2">
              <i className="bi bi-pencil" />
            </button>
          </div>
        </div>
        <Modal
          state={viewModal}
          onClose={closeModal}
        >
          <EditForm
            name={currentPost.name}
            src={currentPost.src}
            description={currentPost.description}
            tags={currentPost.tags}
          />
        </Modal>
      </>
    )
  }
  return (
    <div>{content()}</div>
  )
}
export default PostDetail
