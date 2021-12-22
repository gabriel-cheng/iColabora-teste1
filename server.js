const cors = require('cors')
const express = require("express");
const { listen } = require("express/lib/application");
const app = express()
const axios = require('axios')

app.use(cors())

app.get('/', async(req, res) => {

    try {
        //Response é a resposta do axios, que tira o data do dentro do response
        const {data} = await axios('https://ico-fullstack-test.herokuapp.com/v1/histograma')
    
        return res.json(data)
    } catch (error) {
        console.error(error)
    }

})

app.listen('4567')