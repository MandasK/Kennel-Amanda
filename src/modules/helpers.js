
// will make first character in string uppercase if it is not already
export function firstLetterCase(str) {
    return (str.charAt(0).toUpperCase() + str.slice(1));
 }
//  will join to arrays together with an and
 export function splitTypeArray(arr){
     return arr.join(" and ");
 }