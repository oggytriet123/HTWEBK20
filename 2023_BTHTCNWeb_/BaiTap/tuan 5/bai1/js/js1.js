var a = parseFloat(prompt("Nhap canh a:"));
var b = parseFloat(prompt("Nhap canh c:"));
var c = parseFloat(prompt("Nhap canh c:"));

if(a+b > c && a + c > b && b + c > a) {
    
    if (a == b && b == c) {
        alert("Tam giac deu");
    }
    
    else if ( a == b && c == b && a == c) {
        alert("Tam giac can");
    }

    else {
        alert("tam giac thuong")
    }
} else {
    alert("Ba canh nay khong tao thanh mot tam giac");
}