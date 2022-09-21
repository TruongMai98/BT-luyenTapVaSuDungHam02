// Bài 3: Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào. Gọi hàm vừa xây dựng được.
function factorial(n) {
    let result = 1;
    for (let i = n; i > 1; i--) {
        result = result * i;
    }
    return result;
}

let num = +prompt("nhap 1 so bat ki");
document.write(num + "! = " + factorial(num));