import functions from "firebase-functions"
import express from "express"
import cors from "cors"

const app = express()
app.use(cors())

// setup routes
app.get('/test', (req,res) => {
    res.send('Deployed Cloud Function✅')
})

app.get('/test2', (req,res) => {
    res.send('Confirm this route works✅')
})

// we have to export to open it up for the cloud to use
// anytime we get any type of https req send it to express()
export const api = functions.https.onRequest(app) 

