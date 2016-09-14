import angular from 'angular';
import signInAndUpTmpl from '../tmpl/signInAndUp.tmpl.html';
import '../../../assets/scss/application/directives/signInAndUpDirective.scss';
import signInAndUpController from '../controllers/signInAndUp.controller';


export default class SignInAndUp {
	constructor(){
		this.templateUrl = signInAndUpTmpl;
		this.restrict = 'E';
		this.scope = {};
		this.controller = signInAndUpController;
		this.controllerAs = 'signInAndUpCtrl';
	}

	compile(){
		return this.link.bind(this);
	}
	link(scope, element, attributes, controller){

	}
}

