// Format Date
// Related Post: https://board.jdownloader.org/showpost.php?p=420365&postcount=375

var a /*date*/ = now();

alert(a);

// Function
function now() {
    var d = new Date();
    var t = d.toString().split(" ");
    return t[3] + ('0' + (d.getMonth() + 1)).slice(-2) + t[2] + " " + t[4];
}
