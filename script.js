function generateQR() {
    let text = document.getElementById("qrText").value;
    let qrDiv = document.getElementById("qrcode");
    let downloadBtn = document.getElementById("downloadBtn");

    qrDiv.innerHTML = ""; // Clear old QR code

    if (text.trim() === "") {
        alert("Please enter text or a URL");
        return;
    }

    let qrCode = new QRCode(qrDiv, {
        text: text,
        width: 200,
        height: 200
    });

    // Show download button after QR is generated
    setTimeout(() => {
        downloadBtn.style.display = "inline-block";
    }, 500);
}

function downloadQR() {
    let qrCanvas = document.querySelector("#qrcode canvas");
    if (!qrCanvas) {
        alert("Generate a QR code first!");
        return;
    }

    let link = document.createElement("a");
    link.href = qrCanvas.toDataURL("image/png");
    link.download = "qrcode.png";
    link.click();
}
