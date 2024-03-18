// localStorage.getItem('userId', 501246)
const localStorage = () => {
    const inputText = document.getElementById('storage-value');
    const inputId = document.getElementById('storage-id');
    const inputTextValue = inputText.value;
    const inputIdValue = inputId.value;
    // console.log(inputIdValue, inputTextValue)
    localStorage.setItem(inputIdValue, inputTextValue);
    inputText = '';
    inputId = '';

}

