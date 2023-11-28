function showOrHideDiv() {
    var x = document.getElementById("showOrHide");
    var btnText = document.getElementById("myBtn");
    
    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
        btnText.innerHTML = "Read less";
    } else {
        x.style.display = "none";
        btnText.innerHTML = "Read more";
    }
}
