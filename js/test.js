// Object Oriented Programming in JavaScript
/*
How to call:
 
      // creating your person object:
      var Christopher = new Person({
            name: "Christopher", // inside of objects we use commas
            title: "Programmer"
      });
     
      // call the privileged functions
      Christopher.programs("jquery and html");
      Christopher.sayTitle();
 
      // call the public function
      Christopher.getPublic();
     
      //Can't call the private variables - Doesn't work
      //Christopher.init() <-- Private Function - Doesn't work
      //var NoData = Christopher.ajaxData 
 
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
     
// “this” means (this object or instance – “Christopher Instance” – Christopher.programs(“stuff”) )
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