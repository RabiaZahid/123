// let arr=[]
// for(let i =0; i<10; i++){
//     arr.push(Math.floor(Math.random()* 10))
// }
// for (let i=0; i<10;i++){
//     if (arr[i]%2===0){
//     console.log(arr[i])
// }
// }
// let array=[];
// let even=[];
// let odd=[];

// for(let i=0; i<10; i++){
// array.push(Math.floor(Math.random()*10));

// }
//    console.log(array);

// for(let i=0;i<array.length;i++){
//     if(array[i]%1!==0){
//        console.error("It is not a whole number");
//     }
//    else if(array[i]%2===0){
//     even.push(array[i]);
//    }
//    else if(array[i]%2!==0){
//   odd.push(array[i]);
//    }
// }

// if(even.length<odd.length){
//    console.log(even);
// }
// else if(even.length>odd.length){
//    console.log(odd);
// }
// else if (even.length===odd.length) {
//    var allNum=even.concat(odd);
//    console.log(allNum);
// }
// let username=prompt("write name");
// let Data=[]
// load()
// function render(){
    
//     let input=document.getElementById("input").value;
//     if(input !== ''){
//         Data.push(input)
//     }
//     document.getElementById('container').innerHTML = '';   
//     for(i in Data) {
//         document.getElementById("container").innerHTML += "<li style='list-style:none'> " + username + " : " + Data[i]  + "<button>Edit</button><button>Del</button>"+"</li>" 
//     }
//     // Data.pop(input)
//     //document.getElementById("container").innerHTML += "<li style='list-style:none'> " + username + " : " + input + " </li>" 
//     document.getElementById("input").value=""
//     save()
// }
// function save(){
//     localStorage.mymessage=JSON.stringify(Data)
// }
// function load(){
//     Data=JSON.parse(localStorage.mymessage)
//     render()
// }