// handle db request promise

const _ = require('lodash');

const StatusCodes = {
    ok: 200,
    created: 201,
    badRequest: 400,
    notFound: 404,
    notAuthenticated: 401,
    notAuthorized: 403,
    internalError: 500,
    noContent: 204
}

module.exports = function handlePromise(dbCallPromise, responseObject, method = 'GET') {

    dbCallPromise

        .then(result => {

            if (Array.isArray(result) && result.length === 0 || _.isNil(result)) {
                responseObject.status(StatusCodes.notFound).send('Not found')
                return;
            }

            switch (method) {
                case 'DELETE': responseObject.status(StatusCodes.noContent).send()
                case 'POST': responseObject.status(StatusCodes.created).send(result); break;
                case 'PUT': responseObject.status(StatusCodes.created).send(result); break;
                case 'GET': responseObject.send(result); break;
                default: responseObject.send(result);
            }
        })

        .catch(error => {
            console.error(error.message);
            responseObject.status(StatusCodes.internalError).type('json').send({
                message: error.message,
                stack: error.stack
            })
        })
}