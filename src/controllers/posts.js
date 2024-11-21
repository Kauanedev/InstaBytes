import posts from '../postsDb.js'

export async function GetPosts(req, res) {
    try {
        return res.status(200).json(posts)
    } catch (error) {
        return res.status(500).json({error: error})
    }

}

function getPostById(id) {
    return posts.findIndex(post => post.id === Number(id))
}

export async function FindPost(req, res) {
    try {
        const {id} = req.params
        const postId = getPostById(id)

        return res.status(200).json(posts[postId])

    } catch (error) {
        return res.status(500).json({error: error})
    }
}