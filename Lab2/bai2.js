let tien = 910000;
let soKmh;

if (tien <=90000) {
    soKmh = tien / 1800;
}
else if (tien <= 205000) {
    soKmh = 50 + (tien - 90000) / 2300;
}
else{
    soKmh = 100 + (tien - 205000) / 3000;
}

alert ("SỐ ĐIỆN ĐÃ SỬ DỤNG: " +soKmh +" kWh ");