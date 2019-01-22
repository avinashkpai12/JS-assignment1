var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];


var ObjectOfObject = new Object();
var teamLeader = [];
var i=0;
var programmer = [];
var j=0;

for(var key in myObj){
    if(myObj[key].occupation == "Team Leader"){
        delete myObj[key].occupation;
        teamLeader[i] = myObj[key];
        i++;
    }

    else if(myObj[key].occupation == "Programmer"){
        delete myObj[key].occupation;
        programmer[j] = myObj[key];
        j++;
    }

}

ObjectOfObject.teamLeader = teamLeader;
ObjectOfObject.programmer = programmer;
console.log(ObjectOfObject);