import posts from '../postsDb.js'

export async function GetPosts(req, res) {
    try {
        return res.status(200).json(posts)
    } catch (error) {
        return res.status(500).json({error: error})
    }

}

function findPostById(id) {
    return posts.findIndex(post => post.id === Number(id))
}

export async function getPostById(req, res) {
    try {
        const {id} = req.params
        const postId = findPostById(id)

        return res.status(200).json(posts[postId])

    } catch (error) {
        return res.status(500).json({error: error})
    }
}