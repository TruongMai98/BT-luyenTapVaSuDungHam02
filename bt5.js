// Bài 5: Viết hàm nhận vào 3 số nguyên bất kỳ, trả về số nguyên có giá trị nhỏ nhất.



function checkMinimum(a,b,c){
    let min = a;
    if (min < b && min < c){
        document.write(a + " la GTNN");
    }else if (min > b || min > c){
        min = b;
        if (min < c){
            document.write(b + " la GTNN");
        }else if (min > c){
            document.write(c + " la GTNN");
        }
    }
}
let a = parseInt(prompt("nhap so nguyen a"));
let b = parseInt(prompt("nhap so nguyen b"));
let c = parseInt(prompt("nhap so nguyen c"));
checkMinimum(a,b,c);