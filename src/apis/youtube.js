import axios from 'axios'

const KEY = 'AIzaSyBj6x6f1vzPo2VL0U2uOxYvQkLYsTO-SDQ'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }
})


