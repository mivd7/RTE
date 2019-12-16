DecoupledEditor
    .create(document.querySelector('#editor'), {
        fontSize: {
            options: [
                10,
                12,
                14,
                'default',
                18,
                20,
                22,
                24,
                26,
                28,
                32,
                36,
                40
            ]
        },
    })
    .then(editor => {
        const toolbarContainer = document.querySelector('#toolbar-container');

        toolbarContainer.appendChild(editor.ui.view.toolbar.element);
    })
    .catch(error => {
        console.error(error);
    });

function handleClick() {
    var editorInput = document.getElementById('editor')
    var output = document.getElementById('output');
    output.insertAdjacentText("beforebegin", editorInput.innerHTML)
}