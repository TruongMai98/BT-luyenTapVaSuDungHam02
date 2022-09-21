// Bài 7: Viết hàm truyền vào 2 số nguyên bất kì, thực hiện đổi chỗ hai số nguyên đó.
function swap(a, b) {
    return [b, a]
}

let a = +prompt("nhap so nguyen a");
let b = +prompt("nhap so nguyen b");
document.write(swap(a,b));