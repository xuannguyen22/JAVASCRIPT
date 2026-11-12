
let chucVu = prompt("Nhập chức vụ (intern, staff, senior, manager):");

let ngayCong = Number(prompt("Nhập số ngày công:"));

let heSo = 0;
let luongCoBan = 5000000;
let ngayCongQuyDinh = 24;

if (chucVu == "intern") {
    heSo = 1.0;
}
else if (chucVu == "staff") {
    heSo = 1.5;
}
else if (chucVu == "senior") {
    heSo = 2.0;
}
else if (chucVu == "manager") {
    heSo = 3.0;
}
else {
    alert("Chức vụ không hợp lệ!");
}

let luong = heSo * ngayCong * luongCoBan / ngayCongQuyDinh;

alert("Lương của nhân viên là: " + luong + " đồng");
