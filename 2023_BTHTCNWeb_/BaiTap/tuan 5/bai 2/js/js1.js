let nhapDiem = prompt("Nhap diem");

let diemTB = parseFloat(nhapDiem);

if(!isNaN(diemTB)) {
    if(diemTB >= 0 && diemTB <= 10) {
        let thongBao="";
        if(diemTB >= 8) {
            thongBao = "Xep loai Gioi";
        }
        else if(diemTB >= 6.5) {
            thongBao = "Xep loai Kha";
        }
        else if (diemTB >= 5) {
            thongBao = "Xep loai Trung Binh";
        }
        else {
            thongBao= "Xep loai Yeu";
        }

        alert(thongBao);
    } else {
        alert("Diem khong hop le")
    }
}