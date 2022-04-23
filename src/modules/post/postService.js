let posts = []

export const createPost = (data, user) => {

    const post = {
        createdBy: user.email,
        ...data
   }

    posts.push(post)
    return post
}

export const getPosts = (id) => {

    if(id) {
        //regra procurar pelo post especifico pelo id
        const post = posts[id]
        if(!post) throw new Error('post_not_exist')

        return post
    }
    return posts
}