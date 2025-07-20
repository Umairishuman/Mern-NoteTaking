import express from 'express'


const app = express()

app.get('/api/notes', (req, res) => {
    res.send('you got five notes');
})


app.listen(5000, () => {
    console.log("Server Started on Port 5000")
})