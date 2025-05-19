import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
const app = express()
const port = 3500
app.use(cors())
app.use(express.json())

  await mongoose.connect('mongodb+srv://ilaharfbf206:ilaharfbf206@cluster0.aszjcjs.mongodb.net/')
  .then(()=>console.log("Connected"))
  .catch(()=>console.log("Not Connected"))

const cosmeticSchema = new mongoose.Schema({
    img:String,
  title: String,
  price:Number
});

const Cosmetic = mongoose.model('Cosmetic', cosmeticSchema);

app.get('/', async (req, res) => {
const cosmetic = await Cosmetic.find()
  res.send(cosmetic)
})

app.get('/:id', async (req, res) => {
    const {id} = req.params
    const cosmetic = await Cosmetic.findById(id)
  res.send(cosmetic)
})

app.post('/', async (req, res) => {
    const body = req.body
      const cosmetic = await Cosmetic.create(body)
  res.send(cosmetic)
})

app.delete('/:id', async (req, res) => {
    const {id}=req.params
        const body = req.body
       const cosmetic = await Cosmetic.findByIdAndDelete(id,body)
  res.send(cosmetic)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
