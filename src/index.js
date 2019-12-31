
/* 
 * 将 var arrKeys = [{a:1},{b:6}]; 转换成 { a:1，b:6 }
 */
export const changeJson = function(arrKeys){
    var result = arrKeys.reduce((acc, val) => {
            acc = Object.assign(acc,val)
                return acc;
    }, {});
    return result;
}
