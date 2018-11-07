(function (window, document, drawModule, undefined) {
  drawModule.init();

    document.onkeydown = function(event) {

        keyCode = window.event.keyCode; 
        keyCode = event.keyCode;

        switch(keyCode) {
        
        case 37: 
          if (directKey == "unpressed") {
            directKey = "left";
            moveCube();
            console.log("left"); 
          }
          break;

        case 39:
          if (directKey == "unpressed") {
            directKey = "right";
            moveCube();
            console.log("right");
          }
          break;

        case 38:
          if (directKey == "unpressed") {
            directKey = "up";
            moveCube();
            console.log("up");
          }
          break;

        case 40:
          if (directKey == "unpressed") {
            directKey = "down";
            moveCube();
            console.log("down");
          }
          break;

        case 81:
          if (squareKey == "unpressed") {
            squareKey = "Q";
            console.log("Q");
          }
          break;

        case 87:
          if (squareKey == "unpressed") {
            squareKey = "W";
            console.log("W");
          }
          break;
        
        case 69:
          if (squareKey == "unpressed") {
            squareKey = "E";
            console.log("E");
          }
          break;

        case 65: 
          if (squareKey == "unpressed") {
            squareKey = "A";
            console.log("A"); 
          }
          break;

        case 83:
          if (squareKey == "unpressed") {
            squareKey = "S";
            console.log("S");
          }
          break;

        case 68:
          if (squareKey == "unpressed") {
            squareKey = "D";
            console.log("D");
          }
          break;

        case 90: 
          if (squareKey == "unpressed") {
            squareKey = "Z";
            console.log("Z"); 
          }
          break;

        case 88:
          if (squareKey == "unpressed") {
            squareKey = "X";
            console.log('X');
          }
          break;

        case 67:
          if (squareKey == "unpressed") {
            squareKey = "C";
            console.log('C');
          }
          break;
        }
      }

        document.onkeyup = function(event) {

          keyCode = window.event.keyCode; 
          keyCode = event.keyCode;
  
          switch(keyCode) {
          
          case 37: 
            if (directKey == "left") {
              directKey = "unpressed";
              console.log("left up"); 
            }
            break;
  
          case 39:
            if (directKey == "right") {
              directKey = "unpressed";
              console.log("right up");
            }
            break;
  
          case 38:
            if (directKey == "up") {
              directKey = "unpressed";
              console.log("up up");
            }
            break;
  
          case 40:
            if (directKey == "down") {
              directKey = "unpressed";
              console.log("down up");
            }
            break;

          case 81:
            if (squareKey == "Q") {
              squareKey = "unpressed";
              console.log("Q up");
            }
            break;

          case 87:
            if (squareKey == "W") {
              squareKey = "unpressed";
              console.log("W up");
            }
            break;
          
          case 69:
            if (squareKey == "E") {
              squareKey = "unpressed";
              console.log("E up");
            }
            break;

          case 65: 
            if (squareKey == "A") {
              squareKey = "unpressed";
              console.log("A up"); 
            }
            break;

          case 83:
            if (squareKey == "S") {
              squareKey = "unpressed";
              console.log("S up");
            }
            break;
  
          case 68:
            if (squareKey == "D") {
              squareKey = "unpressed";
              console.log("D up");
            }
            break;

          case 90: 
            if (squareKey == "Z") {
              squareKey = "unpressed";
              console.log("Z up"); 
            }
            break;

          case 88:
            if (squareKey == "X") {
              squareKey = "unpressed";
              console.log('X up');
            }
            break;
  
          case 67:
            if (squareKey == "C") {
              squareKey = "unpressed";
              console.log('C up');
            }
            break;
          }
      }

          
    
    
    })(window, document, drawModule);

    var moveCube = function() {
      if(squareKey == "unpressed") {
        console.log("Turnt");
        var tempArray;
        switch(directKey) {
          case "up":
            tempArray = aBottom;
            aBottom = flip(aBack);
            aBack = flip(aTop);
            aTop = aFront;
            aFront = tempArray;

            //twist right clockwise
            aRight = twistClockwise(aRight);
            //twist left counter
            aLeft = twistCounterClockwise(aLeft);
            break;
          case "down": 
            tempArray = aTop;
            aTop = flip(aBack);
            aBack = flip(aBottom);
            aBottom = aFront;
            aFront = tempArray;

            //twist right counter
            aRight = twistCounterClockwise(aRight);
            //twist left clockwise
            aLeft = twistClockwise(aLeft);
            break;
          case "left":
            tempArray = aRight;
            aRight = aBack;
            aBack = aLeft;
            aLeft = aFront;
            aFront = tempArray;

            //twist top clockwise
            aTop = twistClockwise(aTop);
            //twist bottom counter
            aBottom = twistCounterClockwise(aBottom);
            break;
          case "right":
            tempArray = aLeft;
            aLeft = aBack;
            aBack = aRight;
            aRight = aFront;
            aFront = tempArray;

            //twist top counter
            aTop = twistCounterClockwise(aTop);
            //twist bottom clockwise
            aBottom = twistClockwise(aBottom);
            break;
        }
      } else {
        movePart();
      } 
    }

    var movePart = function() {
      var x;
      var y;
      switch(squareKey) {
        case "Q":
          x = 0;
          y = 0;
          break;
        case "W":
          x = 0;
          y = 1;
          break;
        case "E":
          x = 0;
          y = 2;
          break;
        case "A": 
          x = 1;
          y = 0;
          break;
        case "S":
          x = 1;
          y = 1;
          break;
        case "D":
          x = 1;
          y = 2;
          break;
        case "Z": 
          x = 2;
          y = 0;
          break;
        case "X":
          x = 2;
          y = 1;
          break;
        case "C":
          x = 2;
          y = 2;
          break;
      }

      var tempArray;
      switch(directKey) {
        case "up":
          moveColUp(y);
          if(y==2) {
            //twist right clockwise
            aRight = twistClockwise(aRight);
          } else if(y==0) {
            //twist left counter
            aLeft = twistCounterClockwise(aLeft);
          }
          break;
        case "down": 
          moveColDown(y);
          if(y==2) {
            //twist right counter
            aRight = twistCounterClockwise(aRight);
          } else if(y==0) {
            //twist left clockwise
            aLeft = twistClockwise(aLeft);
          }
          break;
        case "left":
          tempArray = aRight[x];
          aRight[x] = aBack[x];
          aBack[x] = aLeft[x];
          aLeft[x] = aFront[x];
          aFront[x] = tempArray;
          if(x==0) {
            //twist top clockwise
            console.log(aTop);
          aTop = twistClockwise(aTop);
          } else if(x==2) {
            //twist bottom counter
            aBottom = twistCounterClockwise(aBottom);
          }
          break;
        case "right":
          tempArray = aLeft[x];
          aLeft[x] = aBack[x];
          aBack[x] = aRight[x];
          aRight[x] = aFront[x];
          aFront[x] = tempArray;
          if(x==0) {
            //twist top counter
          aTop = twistCounterClockwise(aTop);
          } else if(x==2) {
            //twist bottom clockwise
            aBottom = twistClockwise(aBottom);
          }
          break;
      }
    }

    var moveColUp = function(y){
      var tempArray;
      var flippedBack = flip(aBack);
      var flippedTop = flip(aTop);
      for (var x=0; x<3; x++) {
        tempArray = aBottom[x][y];
        aBottom[x][y] = flippedBack[x][y];
        aBack[x][y] = flippedTop[x][y];
        aTop[x][y] = aFront[x][y];
        aFront[x][y] = tempArray;
      }
    }

    var moveColDown = function(y){
      var tempArray;
      var flippedBack = flip(aBack);
      var flippedBottom = flip(aBottom);
      for (var x=0; x<3; x++) {
        tempArray = aTop[x][y];
        aTop[x][y] = flippedBack[x][y];
        aBack[x][y] = flippedBottom[x][y];
        aBottom[x][y] = aFront[x][y];
        aFront[x][y] = tempArray;
      }
    }

    var twistClockwise = function(twistArray){
      var v00 = twistArray[0][0];
      var v01 = twistArray[0][1];
      var v02 = twistArray[0][2];
      var v10 = twistArray[1][0];
      var v11 = twistArray[1][1];
      var v12 = twistArray[1][2];
      var v20 = twistArray[2][0];
      var v21 = twistArray[2][1];
      var v22 = twistArray[2][2];
      
      twistArray[0][2] = v00;
      twistArray[1][2] = v01;
      twistArray[2][2] = v02;
      twistArray[0][1] = v10;
      twistArray[1][1] = v11;
      twistArray[2][1] = v12;
      twistArray[0][0] = v20;
      twistArray[1][0] = v21;
      twistArray[2][0] = v22;
      return twistArray;
    }

    var twistCounterClockwise = function(twistArray){
      var v00 = twistArray[0][0];
      var v01 = twistArray[0][1];
      var v02 = twistArray[0][2];
      var v10 = twistArray[1][0];
      var v11 = twistArray[1][1];
      var v12 = twistArray[1][2];
      var v20 = twistArray[2][0];
      var v21 = twistArray[2][1];
      var v22 = twistArray[2][2];
      
      twistArray[2][0] = v00;
      twistArray[1][0] = v01;
      twistArray[0][0] = v02;
      twistArray[2][1] = v10;
      twistArray[1][1] = v11;
      twistArray[0][1] = v12;
      twistArray[2][2] = v20;
      twistArray[1][2] = v21;
      twistArray[0][2] = v22;
      return twistArray;
    }

    var flip = function(twistArray){
      console.log("Flippin");
      var v00 = twistArray[0][0];
      var v01 = twistArray[0][1];
      var v02 = twistArray[0][2];
      var v20 = twistArray[2][0];
      var v21 = twistArray[2][1];
      var v22 = twistArray[2][2];
      
      twistArray[2][0] = v00;
      twistArray[2][1] = v01;
      twistArray[2][2] = v02;
      twistArray[0][0] = v20;
      twistArray[0][1] = v21;
      twistArray[0][2] = v22;
      return twistArray;
    }

    