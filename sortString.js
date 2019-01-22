var str = "webmaster";
var arr = []
for(var i=0;i<str.length;i++){
    arr.push(str[i]);
}

arr.sort();
var newstr = arr.join("");
console.log(newstr);