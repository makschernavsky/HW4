import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'

const LSPostsKey = 'posts'
const usePosts = () => { // кастомный хук с логикой для постов
  const [posts, setPosts] = useState([]) // Начальное состояние

  const addNewPost = (name, description, src, tags) => { // функция "добавить новый пост из формы"
    setPosts((prev) => [
      ...prev,
      { // разворачиваем предыдущее состояние и добавляем пост по ключам
        id: nanoid(),
        name,
        description,
        src,
        tags,
      }])
  }

  const deletePost = (id) => { // функция "удалить пост"
    setPosts((prev) => prev.filter((post) => post.id !== id))
  }

  useEffect(() => { // заполнить галерею с LS
    const dataFromLS = localStorage.getItem(LSPostsKey)
    if (dataFromLS) {
      setPosts(JSON.parse(dataFromLS))
    }
  }, [])

  useEffect(() => { // синхронизация галереи с LS
    localStorage.setItem(LSPostsKey, JSON.stringify(posts))
  }, [posts])

  return {
    posts, addNewPost, deletePost,
  }
}

export default usePosts
