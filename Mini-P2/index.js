let btn =document.querySelector("button")
let fileinp =document.querySelector("#fileinp")

btn.addEventListener("click",function(){

    fileinp.click();
    
})

fileinp.addEventListener("change",function(dets){
    const file = dets.target.files[0];
    if(file){

        btn.textContent=file.name;
    }
    // console.log(file);
    // file ki detail dekh sakte ho

})