let inp = document.querySelector("input");
let span = document.querySelector("span");

inp.addEventListener("input", function() {
    let left = 20 - inp.value.length;
    span.textContent = left; // hamesha update karna hai

    if (left < 0) {
        span.style.color = "red";
    } else {
        span.style.color = "#6c63ff";
    }
});
