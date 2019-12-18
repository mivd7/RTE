let editor;
document.body.onload = appendTextarea();

function appendTextarea() {
    const editorDiv = document.getElementById("editor");
    const textarea = document.createElement('textarea');
    const paragraph = editorDiv.getElementsByTagName('p')[0];
    var att = document.createAttribute("class");       // Create a "class" attribute
    att.value = "democlass";                           // Set the value of the class attribute
    textarea.setAttributeNode(att);     


}

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
        removePlugins: ['Table']
    })
    .then(newEditor => {
        const toolbarContainer = document.querySelector('#toolbar-container');
        toolbarContainer.appendChild(newEditor.ui.view.toolbar.element);
        editor = newEditor;
        // appendTextarea();
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