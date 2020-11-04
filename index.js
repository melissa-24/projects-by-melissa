require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
const session = require('express-session')
const knexSessionStore = require('connect-session-knex')(session)

const projectRouter = require('./routers/projectRouter')
const typesRouter = require('./routers/typesRouter')

const server = express()

const sessionConfig = {
    name: 'auth',
    secret: 'authenticateUser',
    cookie: {
        maxAge: 1000 * 60 * 60,
        secure: false,
        httpOnly: true
    },
    resave: false,
    saveUninitialized: false,
    store: new knexSessionStore(
        {
            knex: require('./database/db-config.js'),
            tablename: 'sessions',
            sidfieldname: 'sid',
            createtable: true,
            clearInterval: 1000 * 60 * 60
        }
    )
};

server.use(helmet())
server.use(cors())
server.use(morgan('dev'))
server.use(express.json())
server.use(session(sessionConfig))

server.use(express.static(path.join(__dirname, 'projects/build')))

server.use('/projects', projectRouter)
server.use('/types', typesRouter)

server.get('/', (req, res) => {
    res.json({ message: 'Server is running'})
})


const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
    console.log(`Listening on ` + PORT)
})