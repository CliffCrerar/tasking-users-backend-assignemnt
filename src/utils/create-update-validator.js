// Update / Create request body validator tool

const _ = require('lodash');

module.exports = function Validator(keysToValidate) {
    const self = this;
    this.validKeySet = keysToValidate;
    this.validateCreate = (requestBody) => {
        const requestBodyKeys = _.keys(requestBody);
        const validKeySet = self.validKeySet;
        let valid = true;
        let keyMissing;
        let i = 0;
        while (valid && i < validKeySet.length) {
            const keyToEvaluate = validKeySet[i]
            valid = requestBodyKeys.includes(keyToEvaluate);
            if (!valid) {
                keyMissing = keyToEvaluate;
            }
            i++;
        }
        return {
            isValid: valid,
            message: `request body is missing ${keyMissing}`
        };
    }
    this.validateUpdate = (updateRequest) => {
        const requestObjectKeys = _.keys(updateRequest);
        let valid = true;
        let invalidKey;
        let i = 0;
        while (valid && i < requestObjectKeys.length) {
            const keyToEvaluate = requestObjectKeys[0];
            valid = this.validKeySet.includes(requestObjectKeys[0]);
            if (!valid) {
                invalidKey = keyToEvaluate;
            }
            i++
        }
        return {
            isValid: valid,
            message: `The object key of ${invalidKey} is not valid.`
        }
    }
}