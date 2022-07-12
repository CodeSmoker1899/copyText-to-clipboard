

copy = () =>{
    var copiedText = document.getElementById('input')

    copiedText.select();
    navigator.clipboard.writeText(copiedText.value);
}