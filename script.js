function generateQRCode() {
    var phoneNumber = document.getElementById("phone").value;

    if (phoneNumber) {
        // Lưu thông tin số điện thoại vào localStorage
        localStorage.setItem("customerPhone", phoneNumber);

        // Hiển thị thông báo nhập thành công
        alert("Số điện thoại đã được nhập. Mã QR sẽ được tạo!");

        // Tạo mã QR cho số điện thoại
        var qrCodeContainer = document.getElementById("qr-code");
        qrCodeContainer.innerHTML = ""; // Xóa mã QR cũ nếu có

        var qrCode = new QRCode(qrCodeContainer, {
            text: phoneNumber,
            width: 128,
            height: 128
        });
    } else {
        alert("Vui lòng nhập số điện thoại!");
    }
}
