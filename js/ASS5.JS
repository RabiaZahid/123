let arr=[2,3,4,5,6,4,5,8,9,0,9,6.9,5,4,3,2,4,5,6,7,8]
let evenarr=[]
let oddarr=[]
for(let i=0;i<arr.length;i++){
if(arr[i]%1===0)       
       if(arr[i]%2===0){
        evenarr.push(arr[i])
    }
    else {
        oddarr.push(arr[i])
    }
else{
    console.error("fractional no founded")
}
}


if(evenarr.length>oddarr.length){
    console.log(oddarr)    
}
else if(oddarr.length>evenarr.length){
    console.log(evenarr)
}
else{
    console.log(arr)
}