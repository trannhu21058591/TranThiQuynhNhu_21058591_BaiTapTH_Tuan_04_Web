
function number(num) {
    var result = document.getElementById("txt");
    result.value += num;
}


// hàm tính
function getResult() {
    var result = document.getElementById("txt");
    result.value = eval(result.value)
}
function ac() {
    var result = document.getElementById("txt");
    result.value = "";
}
function removeChar() {
    var number = document.getElementById("txt");
    var remove = number.value;
    remove = remove.slice(0,-1);
    number.value = remove;
}