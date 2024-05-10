const express = require('express')
const app = express()
const path = require('path')





app.set("PORT", process.env.PORT || 3000);


app.listen(app.get("PORT"), () =>
    console.log(`Server listen at Port ${app.get("PORT")}`)
);


// Settings
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


// Middlewares
app.use(express.urlencoded({extended: false}))


// Routes
app.use(require('./routes/index'))

// 404 handler



// Static



module.exports = app