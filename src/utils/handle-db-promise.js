
module.exports = function handlePromise(dbCallPromise, responseObject, ...messages) {
    dbCallPromise

        .then(result => {
            if (result.length === 0) {
                responseObject.status(404).send('Not found')
                return
            }
            responseObject.send(result);
        })

        .catch(error => {
            responseObject.status(500).send(error)
        })
}