function RemoveDuplicate(arr1,arr2)
{
   var map1=new Map()   
    for(i=0;i<arr1.length;i++)
   {
       if(map1.has(arr1[i]))
       {
           map1.set(arr1[i],map1.get(arr1[i])+1)
       }
       else
       map1.set(arr1[i],1);
   }
   var map2=new Map()
   for(i=0;i<arr2.length;i++)
   {
       if(map2.has(arr2[i]))
       {
           map2.set(arr2[i],map2.get(arr2[i])+1)
       }
       else
       map2.set(arr2[i],1);
   }
   var arr3=[];    
   for(i=0;i<arr1.length;i++)
   {       
        if(map1.get(arr1[i])>0&&map2.get(arr1[i])==undefined)
         arr3.push(arr1[i])    
        }    
        
    for(i=0;i<arr2.length;i++)
   {        
       if(map1.get(arr2[i])==undefined&&map2.get(arr2[i])>0)
        arr3.push(arr2[i])    
        
    }
   return arr3;
  // console.log(arr1)
}
var arr1=[1,2,3,3,4,6,7,4];
console.log(arr1);
var arr2=[1,4,6,9,12,10];
console.log(arr2);
console.log("Difference is")
console.log(RemoveDuplicate(arr1,arr2));