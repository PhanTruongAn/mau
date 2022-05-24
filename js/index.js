$(document).ready(function () {
    var i = 2;
    $("#btn2").click(function () {
        $("#myModal").modal();
    })
    function CheckMaSv() {
        let re = /^\d{10}$/;
        if ($("#txtMaSv").val() == "") {
            $("#tbMa").html("Không được để trống");
            return false;
        }
        if (!re.test($("#txtMaSv").val())) {
            $("#tbMa").html("Mã phải gồm 10 chữ số")
            return false;
        }
        $("#tbMa").html("*")
        return true;
    }
    $("#txtMaSv").blur(CheckMaSv);
    function CheckTenSv() {
        let re = /^([A-Z]{1}[A-Za-z]*)(\s*[A-Z]{1}[A-Za-z]*)*$/;
        if ($("#txtTenSv").val() == "") {
            $("#tbTen").html("Tên không được để trống");
            return false;
        }
        if (!re.test($("#txtTenSv").val())) {
            $("#tbTen").html("Tên phải bắt đầu bằng chữ in hoa")
            return false;
        }
        $("#tbTen").html("*")
        return true;
    }
    $("#txtTenSv").blur(CheckTenSv)
    function CheckNgay() {
        if ($("#txtNgay").val() == "") {
            $("#tbNgay").html("Ngày không được để trống");
            return false;
        }
        var today = new Date();
        var ntt = new Date($("#txtNgay").val());
        today = today.setDate(today.getDate() + 7);
        if (today > ntt) {
            $("#tbNgay").html("Ngày tham gia phải sau ngày hiện tại 7 ngày")
            return false;
        }
        $("#tbNgay").html("*")
        return true;
    }
    $("#txtNgay").blur(CheckNgay);
    function CheckMail() {
        re = /^[A-Za-z]{1}[A-Za-z0-9]*@(iuh.edu.vn)$/;
        if ($("#txtEmail").val() == "") {
            $("#tbEmail").html("Email không được để trống")
            return false;
        }
        if (!re.test($("#txtEmail").val())) {
            $("#tbEmail").html("Email phải theo mẫu xxxx@iuh.edu.vn")
            return false;
        }
        $("#tbEmail").html("*")
        return true;
    }
    $("#txtEmail").blur(CheckMail);
    function CheckSdt() {
        re = /^0909-\d{3}-\d{3}$/;
        if ($("#txtSdt").val() == "") {
            $("#tbSdt").html("Số điện thoại không được để trống")
            return false;
        }
        if (!re.test($("#txtSdt").val())) {
            $("#tbSdt").html("Số điện thoại phải theo mẫu 0xxx-xxx-xxx")
            return false;
        }
        $("#tbSdt").html("*")
        return true;
    }
    $("#txtSdt").blur(CheckSdt);
    //Sự kiện lưu vào bảng
    $("#Save").click(function () {
        if (CheckMaSv() == true && CheckTenSv() == true && CheckNgay() == true && CheckMail() == true && CheckSdt() == true) {
            alert("Đăng kí thành công");
            row = "<tr>";
            row += "<th>" + (i++) + "</th>";
            row += "<th>" + $("#txtMaSv").val() + "</th>";
            row += "<th>" + $("#txtTenSv").val() + "</th>";
            row += "<th>" + $("#txtNgay").val() + "</th>";
            row += "<th>" + $("#txtEmail").val() + "</th>";
            row += "<th>" + $("#txtSdt").val() + "</th>";
            $("#danhSach").append(row);
            $("#myModal").modal("hide");
        } else {
            alert("Mời bạn nhập thông tin đầy đủ")
        }
    })
});