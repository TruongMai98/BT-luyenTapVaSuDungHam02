// Bài 8: Viết hàm truyền vào mảng số nguyên bất kỳ, sau đó đảo ngược mảng số nguyên đó.
function swapArr(arr) {
    return arr.reverse();
}

let arr = [];
let n = +prompt("Nhap n phan tu cua mang");
for (let i = 1; i <= n; i++) {
    let numInt = +prompt("nhap so nguyen thu " + i);
    arr.push(numInt);
}
document.write(swapArr(arr));