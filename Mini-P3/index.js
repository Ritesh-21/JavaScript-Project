let form =document.querySelector("form")

let inputs =document.querySelectorAll("input")
// let inputs =document.querySelector("input")

let main = document.querySelector("#main")

form.addEventListener("submit",function(dets){
    dets.preventDefault(); 

    let cardd =document.createElement("cardd");
    cardd.classList.add("card");

    let profile =document.createElement("Profile")
    let img = document.createElement("img")
    img.setAttribute("src", inputs[0].value);
    img.classList.add("img");

    let h2 = document.createElement("h2")
    h2.textContent= inputs[1].value;
    h2.classList.add("h2")

     let h4 = document.createElement("h4")
      h4.textContent=inputs[2].value;
    h4.classList.add("h4")

     let p = document.createElement("p")
      p.textContent=inputs[3].value;
    p.classList.add("p")


    profile.append(img);
    cardd.append(profile);
    cardd.append(h2);
    cardd.append(h4);
    cardd.append(p);
    main.append(cardd)
    // console.dir(inputs.value);
    // console.dir(inputs);

   inputs.forEach(function(val){
  if(val.type !== "submit"){
    val.value = "";
  }
});

    

})