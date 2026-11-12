
let n = Number(prompt("Nhập một số: "));

let laSoNguyenTo = true;

if (n < 2 || !Number.isInteger(n)) {
    laSoNguyenTo = false;
}
else {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            laSoNguyenTo = false;
            break;
        }
    }
}

if (laSoNguyenTo) {
    alert(n + " là số nguyên tố");
}
else {
    alert(n + " không phải là số nguyên tố");
}
