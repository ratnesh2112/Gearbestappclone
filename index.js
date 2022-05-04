
let arr1=["https://uidesign.gbtcdn.com/GB/image/9746/PC+1190.jpg?imbypass=true","https://uidesign.gbtcdn.com/GB/image/8823/PC+1190X420-en.jpg","https://uidesign.gbtcdn.com/GB/image/8823/1190X420.jpg?imbypass=true","https://uidesign.gbtcdn.com/GB/image/8823/1190X4200.jpg?imbypass=true"]


 let sub2main1box2=document.getElementById("sub2main1box2");
 let i=0;
 let delay=500;
 
setInterval(()=>{
    
   sub2main1box2.innerHTML=null;
    let img1=document.createElement("img");
    
    img1.src=arr1[i]
    i++;
    if(i==arr1.length){
        i=0
    }
    img1.style.width="860px";
    img1.style.height="445px"
     
    sub2main1box2.append(img1);
},1500)



