import axios from 'axios'

// base URL: https://economia.awesomeapi.com.br/json/
// Rota BTC > BRL : /all/BTC-BRL

export const api = axios.create({

    baseURL: 'https://economia.awesomeapi.com.br/json/'
})
