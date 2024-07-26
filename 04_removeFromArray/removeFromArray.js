const removeFromArray = function(list, ...values) {
    /* My Original Solution (Poor time complexity)
    for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < list.length; j++) {
        if (list[j] === values[i]) {
            list.splice(j, 1);
            j--;
        }
    }
   }
   return list;
   */

   /* Second Solution (After looking at solution)
   let result = [];
   list.forEach((item) => {
    if (!values.includes(item)) {
        result.push(item);
    }
   });
   return result;
   */

   // Best solution
   const result = list.filter(item => !values.includes(item));
   return result;
};

// Do not edit below this line
module.exports = removeFromArray;
