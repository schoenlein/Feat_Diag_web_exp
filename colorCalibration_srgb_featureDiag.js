

/*----------------------------------COLOR CALIBRATION ------------------------------------ */

function colorCalibration_srgb() {



/*----------------------------------Part 2: ENTER DESIRED COLOR COORDINATES IN xyY ------------------------------------ */

numColors = 18 //currently includes background color - as last color, 

R = [190,
157,
238,
206,
254,
241,
35,
94,
29,
78,
103,
86,
240,
203,
255,
150,
0,
105
]

G = [26,
70,
113,
131,
220,
221,
140,
132,
102,
99,
48,
64,
96,
124,
255,
150,
0,
105
]

B = [52,
70,
13,
91,
32,
136,
87,
107,
151,
122,
123,
96,
145,
144,
255,
150,
0,
105
]



  var Rval = new Array(numColors).fill(0)
  var Gval = new Array(numColors).fill(0)
  var Bval = new Array(numColors).fill(0)
  

  for (var i = 0; i<numColors; i++){
    Rval[i] = Math.round(R[i]);
    Gval[i] = Math.round(G[i]);
    Bval[i] = Math.round(B[i]);
  }




// Set background color to gray - last color in calibration list //
document.body.style.backgroundColor = "rgb("+Rval[numColors-1]+","+Gval[numColors-1]+","+Bval[numColors-1]+")" 

rBackground = Rval[numColors-1]
gBackground = Gval[numColors-1]
bBackground = Bval[numColors-1]

var promptedColorR1 = Rval
var promptedColorG1 = Gval
var promptedColorB1 = Bval


return {"Red":promptedColorR1, "Green":promptedColorG1, "Blue":promptedColorB1}


//----------- END OF COLOR CALIBRATION -----------------// 
}

