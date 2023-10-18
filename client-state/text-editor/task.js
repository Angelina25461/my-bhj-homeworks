const editor = document.getElementById('editor');

editor.value = localStorage.getItem('editorValue');

editor.addEventListener('input', function () {
    localStorage.setItem('editorValue', editor.value);
});

const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', function () {
    editor.value = '';
    localStorage.removeItem('editorValue');
});