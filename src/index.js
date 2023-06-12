const express = require('express');
const taskRouter = require('./routes/task');
const userRouter = require('./routes/user');
const httpLogger = require('./utils/http-logger');
const initDataBase = require('./data');


const app = express();
app.use(express.json());
app.all('*', httpLogger)

const indexRouter = express.Router();
app.use('*', (req,res,next)=>{
    console.log(res);
    next()
})
app.use('/',indexRouter);
app.use('/users',userRouter);

// .listen(3000, () => startupLog(3000))

module.exports = (callback) => {
    initDataBase().then(dbContext => {
        callback(null, { dbContext, app })
    }).catch(error => callback(error, null))
}

