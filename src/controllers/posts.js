import express from 'express'
import posts from '../postsDb.js'

export async function GetPosts(req, res) {
    try {
        return res.status(200).json(posts)
    } catch (error) {
        return res.status(500).json({error: error})
    }

}