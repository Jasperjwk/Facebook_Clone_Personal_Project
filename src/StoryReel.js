import React from 'react'
import Story from './Story';
import './StoryReel.css';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
            image = "data:image/jpeg;base64,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"
            profileSrc = "https://www.eharmony.com/blog/wp-content/uploads/2017/07/short-men-and-dating-e1499470604767.jpg"
            title="Charles"
            />
            <Story
            image = "https://post.healthline.com/wp-content/uploads/2020/07/pizza-beer-1200x628-facebook-1200x628.jpg"
            profileSrc = "https://pbs.twimg.com/media/D8dDZukXUAAXLdY.jpg"
            title="Ann"
            />
            <Story
            image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG303CAl_FmL6fh2UIGxzChiEfZtZK8sZ1Ow&usqp=CAU"
            profileSrc = "https://qph.fs.quoracdn.net/main-qimg-7c858bb8ebb2f87df5785ba492b4c9ca-c"
            title="Naz"
            />
            <Story
            image = "https://static.onecms.io/wp-content/uploads/sites/14/2020/08/20/makeup-header-2000.jpg"
            profileSrc = "https://d2jqdfju7ec8o3.cloudfront.net/2019/21/j6g7dw/ar8ju6.xhvmvq.im.lg.jpg"
            title="Rachel"
            />
            <Story
            image = "https://media.cntraveler.com/photos/59ef91dd8d4f736d51415c2e/master/w_2667,h_2000,c_limit/7MileBeach-2013-HiRes.jpg"
            profileSrc = "https://thechive.com/wp-content/uploads/2019/12/people-send-random-selfies-to-their-mom-humor-31.jpg?quality=85&strip=info&w=400"
            title="Mary"
            />
        </div>
    )
}

export default StoryReel
