var drawModule = (function () {
    var drawSquare = function(x, y, color) {
        // This is the single square
        context.fillStyle = color;
        context.fillRect(x*squareSize, y*squareSize, squareSize, squareSize);
        context.fillStyle = 'grey';
        context.strokeRect(x*squareSize, y*squareSize, squareSize, squareSize);
    }

    var drawDiamond = function(x1, y1, x2, y2, x3, y3, x4, y4, color) {
        context.fillStyle = color;
        context.beginPath();
        context.moveTo(x1*squareSize, y1*squareSize);
        context.lineTo(x2*squareSize, y2*squareSize);
        context.lineTo(x3*squareSize, y3*squareSize);
        context.lineTo(x4*squareSize, y4*squareSize);
        context.fill();

        context.fillStyle = 'grey';
        context.beginPath();
        context.moveTo(x1*squareSize, y1*squareSize);
        context.lineTo(x2*squareSize, y2*squareSize);
        context.lineTo(x3*squareSize, y3*squareSize);
        context.lineTo(x4*squareSize, y4*squareSize);
        context.stroke();

    }

    var drawCircle = function() {
      var x;
      var y;
      var r = 25;

      switch(squareKey) {
            
        case "Q": 
          x = 3.5;
          y = 3.5;
          break;
        case "W": 
          x = 4.5;
          y = 3.5;
          break;
        case "E": 
          x = 5.5;
          y = 3.5;
          break;
        case "A": 
          x = 3.5;
          y = 4.5;
          break;
        case "S": 
          x = 4.5;
          y = 4.5;
          break;
        case "D": 
          x = 5.5;
          y = 4.5;
          break;
        case "Z": 
          x = 3.5;
          y = 5.5;
          break;
        case "X": 
          x = 4.5;
          y = 5.5;
          break;
        case "C": 
          x = 5.5;
          y = 5.5;
          break;
        default:
          x=10;
          y=10;
      }

      context.fillStyle = 'grey';
      context.beginPath();
      context.moveTo(x*squareSize+r, y*squareSize);
      context.arc(x*squareSize, y*squareSize, r, 0, Math.PI * 2, true);
      context.stroke();
    }

    var paint = function(){
      
        context.fillStyle = 'grey';
        context.fillRect(0, 0, w, h);
        context.strokeStyle = 'black';
        context.strokeRect(0, 0, w, h);
  
        //Left
        drawDiamond(0, 0, 1, 1, 1, 3+(1/3), 0, 3, aLeft[0][0]);
        drawDiamond(1, 1, 2, 2, 2, 3+(2/3), 1, 3+(1/3), aLeft[0][1]);
        drawDiamond(2, 2, 3, 3, 3, 4, 2, 3+(2/3), aLeft[0][2]);
        drawDiamond(0, 3, 1, 3+(1/3), 1, 5+(2/3), 0, 6, aLeft[1][0]);
        drawDiamond(1, 3+(1/3), 2, 3+(2/3), 2, 5+(1/3), 1, 5+(2/3), aLeft[1][1]);
        drawDiamond(2, 3+(2/3), 3, 4, 3, 5, 2, 5+(1/3), aLeft[1][2]);
        drawDiamond(0, 6, 1, 5+(2/3), 1, 8, 0, 9, aLeft[2][0]);
        drawDiamond(1, 5+(2/3), 2, 5+(1/3), 2, 7, 1, 8, aLeft[2][1]);
        drawDiamond(2, 5+(1/3), 3, 5, 3, 6, 2, 7, aLeft[2][2]);

        //Top
        drawDiamond(0, 0, 3, 0, 3+(1/3), 1, 1, 1, aTop[0][0]);
        drawDiamond(3, 0, 6, 0, 5+(2/3), 1, 3+(1/3), 1, aTop[0][1]);
        drawDiamond(6, 0, 9, 0, 8, 1, 5+(2/3), 1, aTop[0][2]);
        drawDiamond(1, 1, 3+(1/3), 1, 3+(2/3), 2, 2, 2, aTop[1][0]);
        drawDiamond(3+(1/3), 1, 5+(2/3), 1, 5+(1/3), 2, 3+(2/3), 2, aTop[1][1]);
        drawDiamond(5+(2/3), 1, 8, 1, 7, 2, 5+(1/3), 2, aTop[1][2]);
        drawDiamond(2, 2, 3+(2/3), 2, 4, 3, 3, 3, aTop[2][0]);
        drawDiamond(3+(2/3), 2, 5+(1/3), 2, 5, 3, 4, 3, aTop[2][1]);
        drawDiamond(5+(1/3), 2, 7, 2, 6, 3, 5, 3, aTop[2][2]);

        //Front
        drawSquare(3, 3, aFront[0][0]);
        drawSquare(4, 3, aFront[0][1]);
        drawSquare(5, 3, aFront[0][2]);
        drawSquare(3, 4, aFront[1][0]);
        drawSquare(4, 4, aFront[1][1]);
        drawSquare(5, 4, aFront[1][2]);
        drawSquare(3, 5, aFront[2][0]);
        drawSquare(4, 5, aFront[2][1]);
        drawSquare(5, 5, aFront[2][2]);

        //Right
        drawDiamond(6, 3, 7, 2, 7, 3+(2/3), 6, 4, aRight[0][0]);
        drawDiamond(7, 2, 8, 1, 8, 3+(1/3), 7, 3+(2/3), aRight[0][1]);
        drawDiamond(8, 1, 9, 0, 9, 3, 8, 3+(1/3), aRight[0][2]);
        drawDiamond(6, 4, 7, 3+(2/3), 7, 5+(1/3), 6, 5, aRight[1][0]);
        drawDiamond(7, 3+(2/3), 8, 3+(1/3), 8, 5+(2/3), 7, 5+(1/3), aRight[1][1]);
        drawDiamond(8, 3+(1/3), 9, 3, 9, 6, 8, 5+(2/3), aRight[1][2]);
        drawDiamond(6, 5, 7, 5+(1/3), 7, 7, 6, 6, aRight[2][0]);
        drawDiamond(7, 5+(1/3), 8, 5+(2/3), 8, 8, 7, 7, aRight[2][1]);
        drawDiamond(8, 5+(2/3), 9, 6, 9, 9, 8, 8, aRight[2][2]);

        //Bottom
        drawDiamond(3, 6, 4, 6, 3+(2/3), 7, 2, 7, aBottom[0][0]);
        drawDiamond(4, 6, 5, 6, 5+(1/3), 7, 3+(2/3), 7, aBottom[0][1]);
        drawDiamond(5, 6, 6, 6, 7, 7, 5+(1/3), 7, aBottom[0][2]);
        drawDiamond(2, 7, 3+(2/3), 7, 3+(1/3), 8, 1, 8, aBottom[1][0]);
        drawDiamond(3+(2/3), 7, 5+(1/3), 7, 5+(2/3), 8, 3+(1/3), 8, aBottom[1][1]);
        drawDiamond(5+(1/3), 7, 7, 7, 8, 8, 5+(2/3), 8, aBottom[1][2]);
        drawDiamond(1, 8, 3+(1/3), 8, 3, 9, 0, 9, aBottom[2][0]);
        drawDiamond(3+(1/3), 8, 5+(2/3), 8, 6, 9, 3, 9, aBottom[2][1]);
        drawDiamond(5+(2/3), 8, 8, 8, 9, 9, 6, 9, aBottom[2][2]);

        //console.log(aFront[2][2]);
        drawCircle();
    }

    var init = function(){
      context.clearRect(0,0,w,h);  
      directKey = "unpressed";
      squareKey = "unpressed";
      gameloop = setInterval(paint, 80);
    }

      return {
        init : init
      };
  
      
  }());

