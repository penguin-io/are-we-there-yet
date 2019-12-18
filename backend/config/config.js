var app = exports

require('dotenv').config()

app.port = process.env.APP_PORT

app.secret_key = process.env.SECRET_KEY
