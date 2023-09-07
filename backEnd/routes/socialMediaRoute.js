import express from 'express';

const socialMediaRouter = express.Router()


socialMediaRouter.get('/api/social-media',async(req, res) => {
    const socialMediaLinks = {
        facebook:process.env.FACEBOOK_URL,
        twitter:process.env.TWITTER_URL,
        instagram:process.env.INSTAGRAM_URL,
        tiktok:process.env.TIKTOK_URL,
    }
    res.json(socialMediaLinks)
})
export default socialMediaRouter