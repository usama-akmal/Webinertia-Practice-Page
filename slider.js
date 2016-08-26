var slide1 = document.getElementById("s1");
var slide2 = document.getElementById("s2");
var slide3 = document.getElementById("s3");
var bar1 = document.getElementById("b1");
var bar2 = document.getElementById("b2");
var bar3 = document.getElementById("b3");

bar1.onclick = function () {
    slide1.style.display = "block";
    slide2.style.display = "none";
    slide3.style.display = "none";
    bar1.style.backgroundColor = "#cd222b";
    bar2.style.backgroundColor = "#e5e6eb";
    bar3.style.backgroundColor = "#e5e6eb";
}
bar2.onclick = function () {
    slide1.style.display = "none";
    slide2.style.display = "block";
    slide3.style.display = "none";
    bar2.style.backgroundColor = "#cd222b";
    bar1.style.backgroundColor = "#e5e6eb";
    bar3.style.backgroundColor = "#e5e6eb";
}
bar3.onclick = function () {
    slide1.style.display = "none";
    slide2.style.display = "none";
    slide3.style.display = "block";
    bar3.style.backgroundColor = "#cd222b";
    bar2.style.backgroundColor = "#e5e6eb";
    bar1.style.backgroundColor = "#e5e6eb";
}