import angular from 'angular';
import ngPeopleTmpl from '../tmpl/NgPeople.tmpl.html';

import ngPeopleController from '../controllers/NgPeople.controller';


export default class NgPeople {
	constructor(){
		this.templateUrl = ngPeopleTmpl;
		this.restrict = 'E';
		this.scope = {
			people: "="
		};
		this.controller = ngPeopleController;
		this.controllerAs = 'ngPeopleCtrl';
	}

	compile(){
		return this.link.bind(this);
	}
	link(scope, element, attributes, controller){

	}
}
