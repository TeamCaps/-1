var _chart = document.querySelector('.chart');
var _chartBar = document.querySelectorAll('.chart-bar');
var color = ['#9986dd','#fbb871','#bd72ac','#f599dc'] //색상
var newDeg = []; //차트 deg

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function chartLabel(){
  var _div = document.createElement('div');
  _div.className = 'chart-total';
  _div.innerHTML = `<span class="chart-total-num">Total:<br> 3,135</span>
                    <span class="chart-total-text1">Automobile</span>
                    <span class="chart-total-text2">Disablility</span>
                    <span class="chart-total-text3">Life</span>
                    <span class="chart-total-text4">Property</span>`;
  insertAfter(_div,_chart);
}

function chartDraw(){ 
  for( var i=0;i<_chartBar.length;i++){
    var _num = _chartBar[i].dataset.deg
    newDeg.push( _num )
  }

  var num = newDeg.length - newDeg.length;
  _chart.style.background = 'conic-gradient(#9986dd '+
                                                newDeg[num]+'deg, #fbb871 '+
                                                newDeg[num]+'deg '+newDeg[num+1]+'deg, #bd72ac '+
                                                newDeg[1]+'deg '+newDeg[2]+'deg, #f599dc '+
                                                newDeg[2]+'deg )';
  
  chartLabel();
}
chartDraw();




var count = 0;   	
var width = 0;							

var count1 = 0;   	
var width1 = 0;	

var count2 = 0;   	
var width2 = 0;	

function CountChecked(field){ 					
  if (field.checked) {						
    count += 1;								
  }
  else {										
    count -= 1;								
  }
  var width = count / 8.0 * 100;

  $('div').data('width',width);

  (function( $ ) {
    "use strict";

    $(function() {
      
        function animated_contents() {
          
            $(".zt-skill-bar > div ").each(function (i) {
                var $this  = $(this),
                    skills = $this.data('width');
  
                $this.css({'width' : skills + '%'});
  
            });
        }
        
        if(jQuery().appear) {
            $('.zt-skill-bar').appear().on('appear', function() {
                animated_contents();
            });
        } else {
            animated_contents();
        }
    });
  }(jQuery));


  document.getElementById('result').innerText
= width+'%';
}


function CountChecked1(field){ 					
  if (field.checked) {						
    count1 += 1;								
  }
  else {										
    count1 -= 1;								
  }
  var width1 = count1 / 8.0 * 100;

  $('div').data('width',width1);

  (function( $ ) {
    "use strict";

    $(function() {
      
        function animated_contents() {
          
            $(".zt-skill-bar1 > div ").each(function (i) {
                var $this  = $(this),
                    skills = $this.data('width');
  
                $this.css({'width' : skills + '%'});
  
            });
        }
        
        if(jQuery().appear) {
            $('.zt-skill-bar1').appear().on('appear', function() {
                animated_contents();
            });
        } else {
            animated_contents();
        }
    });
  }(jQuery));


  document.getElementById('result1').innerText
= width1+'%';
}


function CountChecked2(field){ 					
  if (field.checked) {						
    count2 += 1;								
  }
  else {										
    count2 -= 1;								
  }
  var width2 = count2 / 8.0 * 100;

  $('div').data('width',width2);

  (function( $ ) {
    "use strict";

    $(function() {
      
        function animated_contents() {
          
            $(".zt-skill-bar2 > div ").each(function (i) {
                var $this  = $(this),
                    skills = $this.data('width');
  
                $this.css({'width' : skills + '%'});
  
            });
        }
        
        if(jQuery().appear) {
            $('.zt-skill-bar2').appear().on('appear', function() {
                animated_contents();
            });
        } else {
            animated_contents();
        }
    });
  }(jQuery));


  document.getElementById('result2').innerText
= width2+'%';
}
