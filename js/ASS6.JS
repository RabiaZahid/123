let username=prompt("write name");
let Data=[]
function render(){
    
    let input=document.getElementById("input").value;
    Data.push(input)
    document.getElementById('container').innerHTML = '';   
    for(i in Data) {
            document.getElementById("container").innerHTML += "<li style='list-style:none'> " + username + " : " + Data[i] + " </hr></li>"  
   // Data.pop(input)
   //document.getElementById("container").innerHTML += "<li style='list-style:none'> " + username + " : " + input + " </li>" 
   document.getElementById("input").value=""
}
}