import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices.js';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import FindAndReplace from '@ckeditor/ckeditor5-find-and-replace/src/findandreplace';
import Font from '@ckeditor/ckeditor5-font/src/font';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import GeneralHtmlSupport from '@ckeditor/ckeditor5-html-support/src/generalhtmlsupport';
import AutoImage from '@ckeditor/ckeditor5-image/src/autoimage';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';
import PictureEditing from '@ckeditor/ckeditor5-image/src/pictureediting';
import ImportWord from '@ckeditor/ckeditor5-import-word/src/importword';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import TextPartLanguage from '@ckeditor/ckeditor5-language/src/textpartlanguage';
import AutoLink from '@ckeditor/ckeditor5-link/src/autolink';
import Link from '@ckeditor/ckeditor5-link/src/link';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage';
import List from '@ckeditor/ckeditor5-list/src/list';
import ListProperties from '@ckeditor/ckeditor5-list/src/listproperties';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Mention from '@ckeditor/ckeditor5-mention/src/mention';
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';
import Style from '@ckeditor/ckeditor5-style/src/style';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableCaption from '@ckeditor/ckeditor5-table/src/tablecaption';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableColumnResize from '@ckeditor/ckeditor5-table/src/tablecolumnresize';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount';
import WProofreader from '@webspellchecker/wproofreader-ckeditor5/src/wproofreader';
import {REDUCED_MATERIAL_COLORS} from './colors.js'
import {EMOJIS_ARRAY} from './emojis.js'


/**
 * Enrich the special characters plugin with emojis.
 */
function SpecialCharactersEmoji( editor ) {
    if ( !editor.plugins.get( 'SpecialCharacters' ) ) {
        return;
    }

    // Make sure Emojis are last on the list.
    this.afterInit = function() {
        editor.plugins.get( 'SpecialCharacters' ).addItems( 'Emoji', EMOJIS_ARRAY );
    }
}

ClassicEditor.create( document.querySelector( '#cke5-feature-rich-demo' ), {
    plugins: [
        Alignment,
        Autoformat,
        AutoImage,
        AutoLink,
        BlockQuote,
        Bold,
        /* You must provide a valid token URL in order to use the CKBox application.
        After registering to CKBox, the fastest way to try out CKBox is to use the development token endpoint:
        https://ckeditor.com/docs/ckbox/latest/guides/configuration/authentication.html#token-endpoint */
        // CKBox,
        CloudServices,
        Code,
        CodeBlock,
        Essentials,
        FindAndReplace,
        Font,
        GeneralHtmlSupport,
        Heading,
        Highlight,
        HorizontalLine,
        Image,
        ImageCaption,
        ImageInsert,
        ImageResize,
        ImageStyle,
        ImageToolbar,
        ImageUpload,
        Base64UploadAdapter,
        ImportWord,
        Indent,
        IndentBlock,
        Italic,
        Link,
        LinkImage,
        List,
        ListProperties,
        MediaEmbed,
        Mention,
        PageBreak,
        Paragraph,
        PasteFromOffice,
        PictureEditing,
        RemoveFormat,
        SpecialCharacters,
        SpecialCharactersEmoji,
        SpecialCharactersEssentials,
        Strikethrough,
        Style,
        Subscript,
        Superscript,
        Table,
        TableCaption,
        TableCellProperties,
        TableColumnResize,
        TableProperties,
        TableToolbar,
        TextPartLanguage,
        TextTransformation,
        TodoList,
        Underline,
        UploadAdapter,
        WordCount,
        WProofreader
    ],
    toolbar: {
        shouldNotGroupWhenFull: true,
        items: [
            // --- Document-wide tools ----------------------------------------------------------------------
            'undo',
            'redo',
            '|',
            'importWord',
            '|',
            'findAndReplace',
            'selectAll',
            'wproofreader',
            '|',

            // --- "Insertables" ----------------------------------------------------------------------------

            'link',
            'insertImage',
            /* You must provide a valid token URL in order to use the CKBox application.
            After registering to CKBox, the fastest way to try out CKBox is to use the development token endpoint:
            https://ckeditor.com/docs/ckbox/latest/guides/configuration/authentication.html#token-endpoint*/
            // 'ckbox',
            'insertTable',
            'blockQuote',
            'mediaEmbed',
            'codeBlock',
            'pageBreak',
            'horizontalLine',
            'specialCharacters',
            '-',

            // --- Block-level formatting -------------------------------------------------------------------
            'heading',
            'style',
            '|',

            // --- Basic styles, font and inline formatting -------------------------------------------------------
            'bold',
            'italic',
            'underline',
            'strikethrough',
            {
                label: 'Basic styles',
                icon: 'text',
                items: [
                    'fontSize',
                    'fontFamily',
                    'fontColor',
                    'fontBackgroundColor',
                    'highlight',
                    'superscript',
                    'subscript',
                    'code',
                    '|',
                    'textPartLanguage',
                    '|'
                ]
            }, 'removeFormat',
            '|',

            // --- Text alignment ---------------------------------------------------------------------------
            'alignment',
            '|',

            // --- Lists and indentation --------------------------------------------------------------------
            'bulletedList',
            'numberedList',
            'todoList',
            '|',
            'outdent',
            'indent'
        ]
    },
    fontFamily: {
        supportAllValues: true
    },
    fontSize: {
        options: [ 10, 12, 14, 'default', 18, 20, 22 ],
        supportAllValues: true
    },
    fontColor: {
        columns: 12,
        colors: REDUCED_MATERIAL_COLORS
    },
    fontBackgroundColor: {
        columns: 12,
        colors: REDUCED_MATERIAL_COLORS
    },
    heading: {
        options: [
            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
            { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
            { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
            { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
            { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
            { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
            { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' }
        ]
    },
    htmlSupport: {
        allow: [
            // Enables all HTML features.
            {
                name: /.*/,
                attributes: true,
                classes: true,
                styles: true
            }
        ],
        disallow: [
            {
                attributes: [
                    { key: /^on(.*)/i, value: true },
                    { key: /.*/, value: /(\b)(on\S+)(\s*)=|javascript:|(<\s*)(\/*)script/i },
                    { key: /.*/, value: /data:(?!image\/(png|jpeg|gif|webp))/i }
                ]
            },
            { name: 'script' }
        ]
    },
    image: {
        styles: [ 'alignCenter', 'alignLeft', 'alignRight' ],
        resizeOptions: [
            {
                name: 'resizeImage:original',
                label: 'Default image width',
                value: null
            },
            {
                name: 'resizeImage:50',
                label: '50% page width',
                value: '50'
            },
            {
                name: 'resizeImage:75',
                label: '75% page width',
                value: '75'
            }
        ],
        toolbar: [
            'imageTextAlternative', 'toggleImageCaption',
            '|',
            'imageStyle:inline', 'imageStyle:wrapText', 'imageStyle:breakText', 'imageStyle:side',
            '|',
            'resizeImage'
        ],
        insert: {
            integrations: [ 'insertImageViaUrl' ]
        }
    },
    importWord: {
        tokenUrl: false,
        defaultStyles: true
    },
    list: {
        properties: {
            styles: true,
            startIndex: true,
            reversed: true
        }
    },
    link: {
        decorators: {
            toggleDownloadable: {
                mode: 'manual',
                label: 'Downloadable',
                attributes: {
                    download: 'file'
                }
            }
        },
        addTargetToExternalLinks: true,
        defaultProtocol: 'https://'
    },
    placeholder: 'Type or paste your content here!',
    style: {
        definitions: [
            {
                name: 'Title',
                element: 'h1',
                classes: [ 'document-title' ]
            },
            {
                name: 'Subtitle',
                element: 'h2',
                classes: [ 'document-subtitle' ]
            },
            {
                name: 'Callout',
                element: 'p',
                classes: [ 'callout' ]
            },
            {
                name: 'Side quote',
                element: 'blockquote',
                classes: [ 'side-quote' ]
            },
            {
                name: 'Needs clarification',
                element: 'span',
                classes: [ 'needs-clarification' ]
            },
            {
                name: 'Wide spacing',
                element: 'span',
                classes: [ 'wide-spacing' ]
            },
            {
                name: 'Small caps',
                element: 'span',
                classes: [ 'small-caps' ]
            },
            {
                name: 'Code (dark)',
                element: 'pre',
                classes: [ 'stylish-code', 'stylish-code-dark' ]
            },
            {
                name: 'Code (bright)',
                element: 'pre',
                classes: [ 'stylish-code', 'stylish-code-bright' ]
            }
        ]
    },
    table: {
        contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells',
            'tableProperties',
            'tableCellProperties',
            'toggleTableCaption'
        ]
    },
    wproofreader: {
        // serviceId: 'your-service-ID', // WProofreader: required for the Cloud version only.
        lang: 'auto',
        srcUrl: 'https://svc.webspellchecker.net/spellcheck31/wscbundle/wscbundle.js',
        autoStartup: false
    }
} )
    .then( editor => {
        window.editor = editor;

        document.querySelector( '.ck.ck-editor__main' ).appendChild( editor.plugins.get( 'WordCount' ).wordCountContainer );
    } ).catch( error => {
    console.error( error.stack );
} );
