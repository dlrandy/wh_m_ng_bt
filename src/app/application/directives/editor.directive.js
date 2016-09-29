import angular from 'angular';
import jquery from 'jquery';
import WangEditor from 'wangeditor/dist/js/wangEditor.js';
import editotrTmpl from '../tmpl/editor.tmpl.html';
import editorController from '../controllers/editor.controller';
import emotions from './emotions.json';

export default class Editor {
	constructor(){
		this.templateUrl = editotrTmpl;
		this.restrict = 'E';
		this.scope = {};
		this.controller = editorController;
		this.controllerAs = 'editorCtrl';
		

	}

	compile(){
		return this.link.bind(this);
	}
	link(scope, element, attributes, controller){
       this.editor = new WangEditor('editorWang');
         this.editor.config.uploadImgUrl = '/upload';

    // 配置自定义参数（举例）
    this.editor.config.uploadParams = {
        token: 'abcdefg',
        user: 'wangfupeng1988'
    };

    // 设置 headers（举例）
    this.editor.config.uploadHeaders = {
        'Accept' : 'text/x-json'
    };
       this.editor.config.menus= [
        '|',
        'emotion',
        '|',
        'img',
        '|',
        'undo',
        'redo',
        'fullscreen'
    ];
        this.editor.config.emotions =Object.assign( {
    // 支持多组表情

    // 第二组，id叫做'weibo'
    'default': {
        title: '默认表情',  // 组名称
        data: emotions
    }
    // 下面还可以继续，第三组、第四组、、、
}, this.editor.config.emotions);
		this.editor.create();
	}
}

