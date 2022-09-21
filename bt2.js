// Bài 2: Viết hàm tính diện tích, hàm tính chu vi hình tròn. Gọi hàm vừa xây dựng được
function areaOfCircle(r) {
    let S = 3.14 * Math.pow(r, 2);
    return S;
}

function circumference(r) {
    let C = 2 * 3.14 * r;
    return C;
}
let r = +prompt("Nhap ban kinh hinh trong");
document.write("Dien tich hinh tron la: " + areaOfCircle(r) + "<br>");
document.write("Chu vi hinh tron la: " + circumference(r));