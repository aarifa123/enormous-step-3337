import axios from 'axios';

const BASE_URL="http://localhost:5000/api"
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmIwODBkNzhlYjU0ZGJjZjc1MTUwNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NzQ0ODYxMSwiZXhwIjoxNjc3NzA3ODExfQ.braph0tBAaWybLNnEu1SguYFJL2AKyh_cXs1NazA7T0"

export const publicRequest=axios.create({

    baseURL:BASE_URL
})


export const userRequest=axios.create({

    baseURL:BASE_URL,
    header:{token:`Bearer${TOKEN}`}
})