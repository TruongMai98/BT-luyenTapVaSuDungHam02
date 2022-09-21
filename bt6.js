// Bài 6: Viết hàm nhận vào một số, kiểm tra xem nếu số đưa vào có phải là nguyên dương không.
// Nếu là nguyên dương trả về true, ngược lại trả về false.
function laSoNguyenDuong(value) {
    let result;
    if (Number.isInteger(value) && value > 0) {
        result = true;
    } else {
        result = false;
    }
    return result;
}
document.write(laSoNguyenDuong(+prompt("nhap 1 so bat ky")));