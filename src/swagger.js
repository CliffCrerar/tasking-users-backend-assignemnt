const swaggerAutogen = require('swagger-autogen')()
const path = require('path');
const docPath = (relPath) => path.join(__dirname,relPath)
const {taskRouter, userRouter} = docPath('./routes');

const outputFile = docPath('swagger_output.json');
const endpointsFiles = [taskRouter,userRouter]

swaggerAutogen(outputFile, endpointsFiles)