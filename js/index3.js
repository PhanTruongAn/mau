$(document).ready(function () {
    var i = 1;
    $("#btn2").click(function () {
        $("#myModal").modal();
    })
    function checkMasv() {
        let re = /^\d{10}$/;
        if ($("#txtMa").val() == "") {
            $("#tbMa").html("Mã không được để trống")
            $("#txtMa").focus();
            return false;
        }
        if (!re.test($("#txtMa").val())) {
            $("#tbMa").html("Mã phải gồm 10 chữ số")
            $("#txtMa").focus();
            return false;
        }
        $("#tbMa").html("*")
        return true;

    }
    $("#txtMa").blur(checkMasv);

    function checkTensv() {
        let re = /^([A-Z]{1}[A-Za-z]*)(\s*[A-Z]{1}[A-Za-z]*)*$/
        if ($("#txtName").val() == "") {
            $("#tbName").html("Tên sinh viên không được trống")
            $("#txtName").focus();
            return false;
        }
        if (!re.test($("#txtName").val())) {
            $("#tbName").html("Tên sinh viên phải bắt đầu bằng chữ hoa")
            $("#txtName").focus()
            return false;
        }
        $("#tbName").html("*")
        return true;
    };
    $("#txtName").blur(checkTensv);
    function checkDate() {
        if ($("#txtDate").val() == "") {
            $("#tbDate").html("Ngày không được để trống")
            $("#txtDate").focus();
            return false;
        }
        let date = new Date();
        let ntg = new Date($("#txtDate").val());
        date = date.setDate(date.getDate() + 7);
        if (date > ntg) {
            $("#tbDate").html("Ngày tham gia phải sau ngày hiện tại 7 ngày")
            $("#txtDate").focus();
            return false;
        }
        $("#tbDate").html("*")
        return true;
    };
    $("#txtDate").blur(checkDate);
    function checkMail() {
        let re = /^[A-Za-z]{1}[A-Za-z0-9]*@(gmail.com)$/
        if ($("#txtMail").val() == "") {
            $("#tbMail").html("Email không được trống")
            $("#txtMail").focus();
            return false;
        }
        if (!re.test($("#txtMail").val())) {
            $("#tbMail").html("Email phải theo mẫu xxx@gmail.com")
            $("#txtMail").focus();
            return false;
        }
        $("#tbMail").html("*")
        return true;
    };
    $("#txtMail").blur(checkMail);

    function checkSdt() {
        let re = /^0\d{3}-\d{3}-\d{3}$/
        if($("#txtSdt").val() == ""){
        $("#tbSdt").html("Số điện thoại không được trống")
        $("#txtSdt").focus();
        return false;
        }
        if(!re.test($("#txtSdt").val())){
           $("#tbSdt").html("Số điện thoại phải theo mẫu 0xxx-xxx-xxx")
           $("#txtSdt").focus();
           return false;
        }
        $("#tbSdt").html("*")
        return true;

    };
    $("#txtSdt").blur(checkSdt);

    function checkAdd(){
       if($("#txtAdd").val() == ""){
          $("#tbAdd").html("Ảnh đại diện không được trống")
          $("#txtAdd").focus();
          return false;
       }
       $("#tbAdd").html("*")
       return true;
    };
    $("#txtAdd").blur(checkAdd);

    $("#Save").click(function (){
      if(checkMasv()==true && checkTensv()==true && checkDate()==true && checkMail()==true && checkSdt()==true && checkAdd()==true ){
        alert("Đăng ký thành công");
        row = "<tr>";
        row += "<th>" + (i++) + "</th>";
        row += "<th>" + $("#txtMa").val() + "</th>";
        row += "<th>" + $("#txtName").val() + "</th>";
        row += "<th>" + $("#txtDate").val() + "</th>";
        row += "<th>" + $("#txtMail").val() + "</th>";
        row += "<th>" + $("#txtSdt").val() + "</th>";
        row += "<th>" + $("#txtAdd").val() + "</th>";
        $("#danhSach").append(row);
        $("#myModal").modal("hide");
      }else{
          alert("Mời bạn nhập đầy đủ thông tin")
      }
    });
});