// Bài 4: Viết hàm kiểm tra xem ký tự nhập vào có phải là ký tự số không. Nếu là ký tự số hàm trả về true, ngược lại trả về false.
//isNaN : không phải là số
//"sadws" → true
// "1213" → fale


let value = prompt("nhap gia tri bat ki");

function checkTypeOf(value){
    let result;
    if (isNaN(value)){
        result = false;
    }else if (!isNaN(value)){
        result = true;
    }

    return result;
}

document.write("'" + value + "' = " + checkTypeOf(value));



