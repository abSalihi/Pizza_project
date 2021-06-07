function addinput() {
    var name = document.getElementById("name").value;
    console.log(name)
 
    document.getElementById("message").innerHTML = "output: " + name;
}