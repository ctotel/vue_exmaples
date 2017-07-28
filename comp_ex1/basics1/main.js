
"use strict"

var userData =[]; 

var actVM = [];

var vm = new VM(); 
var vm2 = new VM(); 

var example1; 


function VM(selector, passData) {

   var self =this;
   this.vue = null;
   this.selector = selector;

   vm = new Vue({
    el: this.selector,
    data: passData,
  });

}

function UserType(id, first, last) {
   this.id= id
   this.first = first
   this.last = last
}




// there is an alias to jQuery -> $
$(document).ready(function() {
  // start up code here 
  
   //alert("Ready to build");

  // Working 
  userData.push( new UserType(1, "Craig", "Totel"));
  userData.push( new UserType(2, "Tom", "Jones"));
  userData.push( new UserType(3, "Dave3", "Cripe"));
  userData.push( new UserType(4, "Aaron", "Ashe")); 

  actVM.projectId=10;
  actVM.actId  = 10
  actVM.users = userData;

  vm = new VM('#vue-instance', userData);

  vm2 = new VM('#vue-exp1', actVM);


// This works 
example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' },
      { message: 'Test' }  
    ]
  }
});


});



$(document).ready(function() {
  // start up code here 
  console.log("This is atest ")

});


function buttonHandler (event) {
  console.log("Button Handler")

}