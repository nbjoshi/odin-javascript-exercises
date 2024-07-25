const removeFromArray = function(list, ...values) {
    for (let i = 0; i < values.length; i++) {
        if (list.includes(values[i])) {
            let index = list.indexOf(values[i]);
            list.splice(index, 1);
        }
    }
    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
