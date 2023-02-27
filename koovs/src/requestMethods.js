import axios from 'axios';

const BASE_URL="http://localhost:5000/api"
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmIwODBkNzhlYjU0ZGJjZjc1MTUwNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NzQ3Njc3MSwiZXhwIjoxNjc3NzM1OTcxfQ.ltZosVHJeN6szSr0JloCRUjmc43jsXMLQuDQRR-dmig"

export const publicRequest=axios.create({

    baseURL:BASE_URL
})


export const userRequest=axios.create({

    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
})