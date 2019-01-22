var count=0;
var value="gmail.com";
var letter='m';
function countletter(value, letter){

    for(var i=0;i<value.length;i++){
        if(value[i]==letter){
            count++;
        }
    }
    return count;

}

var occur = countletter(value, letter);
console.log(occur);