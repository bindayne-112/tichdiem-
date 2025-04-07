function generateQRCode() {
    var phoneNumber = document.getElementById("phone").value;

    if (phoneNumber) {
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
