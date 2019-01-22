
function datetime(){
    var date = new Date();

    var day = date.getDate();
    var mon = date.getMonth()+1;
    var year = date.getFullYear();

    var hours = date.getHours();
    var mins = date.getMinutes();
    var secs = date.getSeconds();
    var time = date.get
    console.log(mon + "/" +day + "/" + year );
    console.log(hours+":"+mins+":"+secs);
}

datetime();


