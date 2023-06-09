// Function that logs all http request

const stampDate = () => new Date().toJSON();
const str = (obj) => JSON.stringify(obj);

module.exports = ({params,query,body, path},{statusCode},next) => {
    const logToWrite = `${stampDate()} <--> ${statusCode} - ${path} %% Params: ${str(params)}, Query: ${str(query)}, Body: ${str(body)}`;
    console.log(logToWrite);
    next();
}


