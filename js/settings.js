var mycanvas = document.getElementById('mycanvas');
var context = mycanvas.getContext('2d');
var w = 750;
var h = 750;
var squareSize = w/9;
var aFront = [['red','red','red'],['red','red','red'],['red','red','red']];
var aRight = [['green','green','green'],['green','green','green'],['green','green','green']];
var aTop = [['white','white','white'],['white','white','white'],['white','white','white']];
var aLeft = [['blue','blue','blue'],['blue','blue','blue'],['blue','blue','blue']];
var aBottom = [['yellow','yellow','yellow'],['yellow','yellow','yellow'],['yellow','yellow','yellow']];
var aBack = [['orange','orange','orange'],['orange','orange','orange'],['orange','orange','orange']];
var directKey;
var squareKey;