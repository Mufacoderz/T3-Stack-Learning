const imgBox = document.getElementById('imgBox');
const qrImage = document.getElementById('qrImage');
const qrText = document.getElementById('qrText');
function generateCode() {
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add('show-img');
        qrText.value = '';
    }
    else {
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);
    }
}
window.generateCode = generateCode;
export {};
//# sourceMappingURL=index.js.map