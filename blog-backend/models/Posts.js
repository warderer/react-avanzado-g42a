// Datos iniciales en Memoria
import postsData from '../data/posts.json' with { type: 'json' }

// CREATE
export const createPost = (postData) => {
    const newPost = {
        userId: postData.userId,
        id: postData.length > 0 ? Math.max(...postsData.map(post => post.id)) + 1 : 1,
        title: postData.title,
        body: postData.body,
        ...postData
    }

    postsData.push(newPost)
    return newPost
}


// READ
export const getPosts = () => {
    return postsData
}

export const getPost = (id) => {
    return postsData.find(post => post.id === parseInt(id))
}

// UPDATE
export const updatePost = (id, postDataToUpdate) => {
    // Comprobar que exista el post
    const postIndex = postsData.findIndex(post => post.id === parseInt(id))
    if (postIndex === -1) {
        return null
    }

    const updatedPost = {
        ...postsData[postIndex],
        ...postDataToUpdate
    }

    postsData[postIndex] = updatedPost
    return updatedPost
}

// DELETE
export const deletePost = (id) => {
    const postIndex = postsData.findIndex(post => post.id === parseInt(id))
    if (postIndex === -1) {
        return null
    }

    postsData.splice(postIndex, 1)
    return true
}