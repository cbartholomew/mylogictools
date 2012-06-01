// Object Oriented Programming in JavaScript
/*
How to call:
 
      // creating your person object:
      var Patrick = new Person({
            name: "Patrick", // inside of objects we use commas
            title: "Programmer"
      });
     
      // call the privileged functions
      Patrick.programs("jquery and html");
      Patrick.sayTitle();
 
      // call the public function
      Patrick.getPublic();
     
      //Can't call the private variables - Doesn't work
      //Patrick.init() <-- Private Function - Doesn't work
      //var NoData = Patrick.ajaxData 
 
*/
// This is your class (Person Object)
function Person(config){
      // private functions and variables (people can't access the data inside)
      var name  = config.name;
      var title = config.title;
      var ajaxData = "";
     
      // when loading ajax data, always load in private variable
      function init(){
            // $.ajax({
            // url: "myurl",
            // data: {
                  // param1: "data"
            // },
            // success: function(data)
                  // {
                        // private var
                        // ajaxData = data;
                  // }
            // });
      }
     
      // privileged  functions (people can access this if they instantiate the object)
     
// “this” means (this object or instance – “Patrick Instance” – Patrick.programs(“stuff”) )
      this.programs = function(what)
      {    
            alert("privledged  function: " + name + " Programs " + what);    
      }
     
      this.sayTitle = function()
      {
            alert(name + "'s" + " title is " + title);
      }
}
 
// Public functions - only have access to "privileged" functions
Person.prototype.getPublic = function()
{
      alert("some public function");
}