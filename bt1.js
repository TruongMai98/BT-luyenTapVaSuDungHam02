// Bài 1: Viết hàm tính bình phương của một số bất kỳ được đưa vào. Gọi hàm vừa xây dựng được.
function squareNum(num) {
    let square = Math.pow(num, 2);
    return square;
}

let number = +prompt(" nhap 1 so bat ki");
document.write(squareNum(number));