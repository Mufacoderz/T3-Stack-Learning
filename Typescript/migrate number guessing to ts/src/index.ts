const imgBox = document.getElementById('imgBox') as HTMLDivElement;
const qrImage = document.getElementById('qrImage') as HTMLImageElement;
const qrText = document.getElementById('qrText') as HTMLInputElement;

function generateCode(): void {
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add('show-img');
        qrText.value = '';
    } else {
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);
    }
}

(window as any).generateCode = generateCode;