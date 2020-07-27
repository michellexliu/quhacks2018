var dropped = false;
function dropdown() {
    if (dropped == false) {
        document.getElementById("Menu").className = "";
        dropped = true;
    } else {
        document.getElementById("Menu").className = "collapsed";
        dropped = false;
    }
}