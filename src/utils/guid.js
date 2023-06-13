// GUID tool

module.exports = {
    create: function () {
        return require('uuid').v4()
    },
    validate: function (guid) {
        return require('uuid').validate(guid);
    }
}