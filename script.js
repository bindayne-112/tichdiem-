function generateQRCode() {
    var phoneNumber = document.getElementById("phone").value;

    if (phoneNumber) {
        // Giả sử mỗi lần nhập sẽ tích 1 điểm
        var points = 1;
        
        // Gửi dữ liệu tới Google Sheets thông qua Google Apps Script
        var url = 'https://script.google.com/macros/s/AKfycbxS2KI-di93DhRmf8ceY3oq2LJhVbYWkP8GzWgMH_VcYYjoAgd2hACvxc_mawFEo2C23A/exec'; // Đã thay URL này với URL của bạn
        var params = {
            phoneNumber: phoneNumber,
            points: points
        };

        // Gửi POST request tới Google Apps Script
        fetch(url, {
            method: 'POST',
            body: new URLSearchParams(params)
        })
        .then(response => response.text())
        .then(result => {
            console.log(result); // Hiển thị kết quả từ Google Apps Script
            alert("Số điện thoại đã được lưu và điểm tích lũy đã được cập nhật!");
        })
        .catch(error => {
            console.error("Lỗi khi gửi dữ liệu:", error);
        });

        // Tạo mã QR
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
