let editor;

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
    .then(newEditor => {
        const toolbarContainer = document.querySelector('#toolbar-container');
        toolbarContainer.appendChild(newEditor.ui.view.toolbar.element);
        editor = newEditor;
    })
    .catch(error => {
        console.error(error);
    });

function handleSubmit() {
    const editorData = editor.getData();
    console.log(editorData)
}

function showHTML() {
    var editorInput = document.getElementById('editor')
    var output = document.getElementById('output');
    output.insertAdjacentText("beforebegin", editorInput.innerHTML)
}