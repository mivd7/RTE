import ClassicEditor from './node_modules/@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import {Plugins, Toolbar} from './node_modules/@ckeditor/ckeditor5-build-classic';
import {Font} from './node_modules/@ckeditor/ckeditor5-font';

let editor;

const config = {
  plugins: [...Plugins, Font],
        fontSize: {
                options: [
                12,
                14,
                'default',
                18
                ]
            },
        toolbar: [
            ...Toolbar, 'fontSize',
        ],
}

export default config; 