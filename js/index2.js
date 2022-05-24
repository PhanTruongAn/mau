$(document).ready(function () {
    var i = 1; // Khởi tạo số thứ tự
    // Viết code vào
    $("#btn2").click(function () {
        $("#myModal").modal();
    });

    function kiemTraTen() {
        var i = 1;
        let mauKT = /^([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if ($("#Name").val() == "") {
            $("#tbName").html("không để trống");
            return false;
        }
        if (!mauKT.test($("#Name").val())) {
            $("#tbName").html("Mỗi ký tự đầu viết hoa không sử dụng số, không để khoảng trắng ở ký tự đầu");
            return false;
        }
        $("#tbName").html("*");
        return true;
    }
    $("#Name").blur(kiemTraTen);

    function kiemTraSoAo() {
        var mauKT = /^\d*$/;
        if ($("#Ao").val() == "") {
            $("#tbAo").html("không để trống");
            return false;
        }
        if (!mauKT.test($("#Ao").val())) {

            $("#tbAo").html("Dùng số từ 1 đến 100, không để khoảng trắng ở ký tự đầu ");
            return true;

        } else {
            var soAo = $("#Ao").val();
            if ((soAo < 1 || soAo > 100)) {
                $("#tbAo").html("Số áo từ 1 đến 100");
                return false;
            } else {
                $("#tbAo").html("*");
                return true;
            }

        }

    }
    $("#Ao").blur(kiemTraSoAo);

    function kiemtraclb() {
        var mauKT = /^([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})(\s{1}[1,9]+)$/;
        if ($("#txtCLB").val() == "") {
            $("#tbCLB").html("không để trống");
            return false;
        }
        if (!mauKT.test($("#txtCLB").val())) {

            $("#tbCLB").html("Dùng chữ hoa đầu từ và số (ví dụ: Ha Noi 1)");
            return false;

        }
        $("#tbCLB").html("*");
        return true;
    }
    $("#txtCLB").blur(kiemtraclb);

    function kiemTraNTT() {
        if ($("#NTT").val() == "") {
            $("#tbNTT").html("không để trống");
            return false;
        }
        var today = new Date();
        var ntt = new Date($("#NTT").val());
        today = today.setDate(today.getDate() + 7);
        if (today > ntt) {
            $("#tbNTT").html("Phải sau ngày hiện tại 7 ngày");
            return false;
        }
        $("#tbNTT").html("*");
        return true;
    }
    $("#NTT").blur(kiemTraNTT);

    function kiemTraSDT() {
        var mauKT = /^0\d{3}-\d{3}-\d{3}$/;
        if ($("#SDT").val() == "") {
            $("#tbSDT").html("không để trống");
            return false;
        }
        if (!mauKT.test($("#SDT").val())) {
            $("#tbSDT").html("Theo dạng 0XXX-XXX-XXX trong đó X là số, không để khoảng trắng ở ký tự đầu");
            return false;
        }
        $("#tbSDT").html("*");
        return true;
    }
    $("#SDT").blur(kiemTraSDT);

    function kiemtraADD() {
        if ($("#ADD").val() == "") {
            $("#tbADD").html("không để trống");
            return false;
        }
        $("#tbADD").html("*");
        return true;
    }
    $("#ADD").blur(kiemtraADD);
    $("#Save").click(function () {
        if (kiemTraTen() == true && kiemtraclb() == true && kiemTraNTT() == true && kiemTraSDT() == true && kiemTraSoAo() == true && kiemtraADD() == true) {
            alert('Đăng ký thành công');
            row = "<tr>";
            row += "<th>" + (i++) + "</th>";
            row += "<th>" + $("#Name").val() + "</th>";
            row += "<th>" + $("#Ao").val() + "</th>";
            row += "<th>" + $("#txtCLB").val() + "</th>";
            row += "<th>" + $("#NTT").val() + "</th>";
            row += "<th>" + $("#SDT").val() + "</th>";
            row += "<th>" + $("#ADD").val() + "</th>";
            $("#danhSach").append(row);
            $("#myModal").modal("hide");
        } else {
            alert('Vui lòng nhập chính xác và đầy đủ thông tin');
        }
    })
})