
  // Create and  mount
   var vm ;

// there is an alias to jQuery -> $
$(document).ready(function() {
  // start up code here 
  
 //  alert("jQuery is ready");
 // initVm();
});


function initVm() {

   Vue.component('greeting', {
      template: "greeting-template",
   });

   // Create and  mount
    vm = new Vue({
        el: '#app'
   });


}



