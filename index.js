import express from  'express';
import routes from './routes/routes.js';
import connectDB from './db/connectDB.js';
import path from 'path';
import bodyParser from 'body-parser'
const app = express();
const port = process.env.PORT || 8080;

const DATABASEURL= process.env.DATABASEURL||'mongodb://127.0.0.1:27017/portfolio'

// database config

connectDB(DATABASEURL)

app.use(bodyParser.urlencoded({extended: false}))
// setup static files
app.use(express.static(path.join(process.cwd(),'public')))

// ejs setup 
app.set('view engine','ejs')
app.set('views', './views')

// craete routes
app.use('/', routes)

app.listen(port,()=>{
    console.log('server is running on port ${port}')
})