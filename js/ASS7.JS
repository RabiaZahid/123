let username=prompt("write name");
let Data=[]
load()
function render(){
    
    let input=document.getElementById("input").value;
    if(input !== ''){
        Data.push(input)
    }
    document.getElementById('container').innerHTML = '';   
    for(i in Data) {
        document.getElementById("container").innerHTML += "<li id="+i+" style='list-style:none'> "
         + username + " : " + Data[i]  + "<button onclick='edit()'>Edit</button><button onclick='Delmessages()'>Del</button>"+"</li>" 
    }
    // Data.pop(input)
    //document.getElementById("container").innerHTML += "<li style='list-style:none'> " + username + " : " + input + " </li>" 
    document.getElementById("input").value=""
    save()
}
function save(){
    localStorage.mymessage=JSON.stringify(Data)
}
function load(){
    Data=JSON.parse(localStorage.mymessage)
    render()
}

function Delmessages(){

}

function edit(){

}

function delall(){


}