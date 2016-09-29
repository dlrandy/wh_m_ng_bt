import angular from 'angular';
import hotSpotTmpl from '../tmpl/HotSpot.tmpl.html';

import hotSpotController from '../controllers/HotSpot.controller';


export default class HotSpot {
    constructor() {
        this.templateUrl = hotSpotTmpl;
        this.restrict = 'E';
        this.scope = {
            articles: "="
        };
        console.log($, $.jquery)
        this.$window = $(window);
        this.controller = hotSpotController;
        this.controllerAs = 'hotSpotCtrl';
    }

    compile() {
        return this.link.bind(this);
    }
    link($scope, $element, attributes, controller) {
        var win = this.$window;
        	
        var topOffset = $element.offset().top;
    console.log(win, topOffset)
    var wwin = win[0];
        function affixElement() {
             console.log(wwin.pageYOffset,wwin.pageYOffset > topOffset, topOffset)
            if (wwin.pageYOffset-155 > topOffset) {
            	 console.log(wwin.pageYOffset,'dfdfffffffffff', topOffset)
                $element.css('position', 'fixed');
                $element.css('top', '50px');
                $element.css('z-index', '999');
            } else {
                $element.css('position', '');
                $element.css('top', '');
            }
        }

        $scope.$on('$routeChangeStart', function() {
            win.unbind('scroll', affixElement);
        });
        win.bind('scroll', affixElement);
    }
}