function xuLi(re, result, name) {
    var btn = document.getElementById("btn-DangKy");
    if (re.test(result) == false || result == "") {
        name.style.border = "1px solid red";
        btn.disabled = true;
        return false;
    } else {
        name.style.border = "1px solid black";
        btn.disabled = false;
        return true;
    }
}
function checkNgaySinh() {
    let ns = document.getElementById('ngaySinh').value; //string
    ns = new Date(ns);
    let namht = new Date();
    let tuoi = namht.getFullYear() - ns.getFullYear();
    if (tuoi < 18) {
        document.getElementById('error-ngaySinh').innerHTML = "Tuoi phai tren 18"
        return false;
    } else {
        document.getElementById('error-ngaySinh').innerHTML = "";
        return true;
    }

}
// check name
function checkName() {
    var re = /^([A-Z][A-Za-z]+[\s]*){1,}/gm;
    var id = "name";
    var name = document.getElementById(id);
    var result = name.value;
    return xuLi(re, result, name);
}

function submitForm(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var lop = document.getElementById("lop").value;
    var monhoc = document.getElementById("monhoc").value;
    var ngaySinh = document.getElementById("ngaySinh").value;
    var loai = document.querySelector('input[name="loai"]:checked').value;
  
    var table = document.getElementById("tbl");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = name;
    cell2.innerHTML = lop;
    cell3.innerHTML = monhoc;
    cell4.innerHTML = ngaySinh;
    cell5.innerHTML = loai;
  }
  