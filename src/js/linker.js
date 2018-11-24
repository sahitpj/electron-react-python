function execute_python() {
    var path = require("path")
  
    const city = 'XYZ';
    var options = {
      scriptPath : path.join(__dirname, '../python/'),
      args : [city]
    }
  
    const {PythonShell} = require("python-shell");
  
    var shell = new PythonShell('main.py', options); //executes python script on python3
  
    shell.on('message', function(message) {
      swal(message); //message is STD output of python script
    })
  }
  
function myfunction() {
    document.getElementById("demo").innerHTML = "Hello World"
}
  