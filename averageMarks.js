var student = new Map();
student.set("English", 80);
student.set("Maths", 95);
student.set("Hindi", 77);
student.set("Sanskrit", 88);
student.set("Social", 68);

var vals = student.values();
var sum=0;

for(var i of vals){
    sum+= i;
}
var avg = sum/student.size;
console.log("Average : " + avg);

console.log(sum);

if(avg<=100 && avg>90){
    console.log("A");
}
else if(avg<=90 && avg>80){
    console.log("B");
}
else if(avg<=80 && avg>70){
    console.log("C");
}

else if(avg<=70 && avg>60){
    console.log("D");
}

else if(avg<=60){
    console.log("F");
}
