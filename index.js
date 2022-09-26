const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()


app.use(bodyParser.urlencoded({ extended: false}))
app.use(express.json())
app.use(cors())


const personagens = require("./src/personagens/personagens.json")

app.get('/api/users/:id', async (req, res) => {

    const id = req.params.id;
	let content;

	try {
		content = await personagens[parseInt(id) - 1];
	} catch (err) {
		return res.sendStatus(404);
	}

	res.json({
		data: content
	});
});


app.get("/api/users", (req, res) => {

    const page = req.query.page ? parseInt(req.query.page) : 1;
    const limit = 6
    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const data = {
        page: page,
        per_page: limit,
        total: personagens.length,
        total_pages: personagens.length/limit,
    }

    data.data = personagens.slice(startIndex, endIndex)
    return res.json(data)
})



app.listen(21262, () => {
    console.log('Servidor rodando acesse a API pelo link - http://localhost:21262/api/users')
})