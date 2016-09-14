import angular from 'angular';
// Create a Require Context for all Controllers and Templates:
var TemplateRequire, ControllerRequire;
function load(){
  TemplateRequire = require.context('./',true,/^\.\/.*\.template\.html$/);
  ControllerRequire = require.context('./',true,/^\.\/.*controller$/);
}
load();

angular.module('hot-module-replacement',['ui.router'])
.constant('$hmr',{
  // Function to create Template Factory, using require-context to grab latest template.
  template: function(name,data){
    return function(){
      return TemplateRequire('./template.html')(data);
    };
  },
  
  // Function to create Controller Factory, using require-context to grab latest controller
  controller: function(name){
    return function(){
      return ControllerRequire('./controller');
    };
  }
})

// Accept a Hot Module Replacement by reloading state.
.run(function($state){
  if(module.hot){
    module.hot.accept([TemplateRequire.id,ControllerRequire.id],function() {
      load();
      $state.transitionTo($state.current, $state.params, {
          reload: true,
          inherit: false,
          notify: true
      });
    });
  }
});