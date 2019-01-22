var number = 101010;
var str = "";
var i=0;
function dashesBetweenEven(){
    var num = number.toString();
    var res = [num[0]];
    for(var i=0;i<num.length;i++){
        if(i == num.length-1){
            break;
        }
        else if((num[i]==0 || num[i]%2==0)&&(num[i+1]==0 || num[i+1]%2==0)){
           res.push("-");
           res.push(num[i+1]);     
        }
        else{
           res.push(num[i+1]);
        }
    }
    
    console.log(res);
}

dashesBetweenEven();