import { useContext } from 'react'
import { GalleryContext } from '../../contexts/GalleryContext'
import Post from './Post/Post'

function Gallery() {
  const { posts } = useContext(GalleryContext)
  return (
    <div className="container w-75 p-10">
      <div className="row row-cols-3 justify-content-around gy-3">
        { posts.length ? posts.map((post) => (// проверка, не пуста ли галерея. Если пуста, то <p>
          // наполняем галерею

          <Post key={post.id} {...post} />

        )) : <p className="fs-6">Галерея пуста. Добавьте что-нибудь.</p>}
      </div>
    </div>
  )
}

export default Gallery
