var arr = [21,12,78,34,45];
var i;
var greatest = arr[0];
var temp;
    for(i=0;i<arr.length;i++){
        if(arr[i] > greatest){
            greatest = arr[i];
        }
    }




console.log("greatest = " + greatest);