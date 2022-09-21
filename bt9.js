// Bài 9: Viết hàm truyền vào một mảng ký tự, và một ký tự bất kỳ, kiểm tra xem ký tự bất kỳ đó có nằm trong mảng không.
// Nếu có trả về số lần xuất hiện của ký tự đó, nếu không trả về -1.
let n = prompt("nhap mot chuoi ky tu hoac so bat ky");
let arr = n.split("");
let a = prompt("nhap mot ky tu bat ky de kiem tra xem co ton tai trong chuoi vua nhap");

function check(a, arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (a == arr[i]) {
            count += 1;
        }
    }
    if (count != 0) {
        document.write("xuat hien " + count + " lan");
    } else if (count == 0) {
        document.write("-1");
    }
}


check(a,arr);