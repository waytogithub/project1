
function RenderChart(chartHeight,chartWidth,chartData){
this.chartHeight=chartHeight;
this.chartWidth=chartWidth;
this.chartData=chartData;
//console.log(getVal(this.chartData,"Espresso","East","Caffe Mocha"));
}

RenderChart.prototype.calSumTotal = function(chartData) {

 var sum=0,sumStringobj={},sumArray=[],sumArray=[],sumTotal=[];
 var noOfLines=this.chartData.dataset[0].length;
 for(var i=0;i<this.chartData.dataset.length;i++){
 
    for(var j=0;j<this.chartData.dataset[i].values.length;j++){
    var sumOfProfit=0,sumOfSales=0;
    for(k=0;k<this.chartData.dataset[i].values[j].data.length;k++){
      var l=this.chartData.dataset[i].values[j].data[k].sop.length;
      sumOfProfit+=(parseInt(this.chartData.dataset[i].values[j].data[k].sop.slice(1,l)));
    }
   
    for(k=0;k<this.chartData.dataset[i].values[j].data.length;k++){
     var l=this.chartData.dataset[i].values[j].data[k].sos.length;
     sumOfSales+=(parseInt(this.chartData.dataset[i].values[j].data[k].sos.slice(1,l)));
    }      
     sumArray[j]={"sumOfProfit":sumOfProfit,"sumOfSales":sumOfSales}; 

 }
   sumTotal[i]={"sumArray":sumArray};
 
 }

var maxSopSos={};
maxSopSos=getMaxSopSos(this.chartData);
//console.log(maxSopSos);
render(this.chartData,this.chartHeight,this.chartWidth,maxSopSos.maxSos);

}
function getMaxSopSos(chartData){
var sopLength=chartData.dataset[0].values[0].data[0].sop.length;
var sosLength=chartData.dataset[0].values[0].data[0].sos.length;
var maxSop=parseInt(chartData.dataset[0].values[0].data[0].sop.slice(1,sopLength));
var maxSos=parseInt(chartData.dataset[0].values[0].data[0].sos.slice(1,sosLength));
for(var i=0;i<chartData.dataset.length;i++){
  for(var j=0;j<chartData.dataset[i].values.length;j++){
    for(k=0;k<chartData.dataset[i].values[j].data.length;k++){
      sopLength=chartData.dataset[i].values[j].data[k].sop.length;
      sosLength=chartData.dataset[i].values[j].data[k].sos.length;
      if(parseInt(chartData.dataset[i].values[j].data[k].sop.slice(1,sopLength))>maxSop)
        maxSop=chartData.dataset[i].values[j].data[k].sop.slice(1,sopLength);
      if(parseInt(chartData.dataset[i].values[j].data[k].sos.slice(1,sosLength))>maxSos)
        maxSos=chartData.dataset[i].values[j].data[k].sos.slice(1,sosLength);
     
    }
  }
}
return {"maxSop":maxSop,"maxSos":maxSos};
}
function getShade(val){
 if(val>0 && val<1000)
    return 20;
   else if(val>1000 && val< 2000)
      return 50;
     else if(val>2000 && val <5000)
       return 100;
   else if (val>5000 && val<7000)
     return 150;
 else return 255;

 }
function render(chartData,chartHeight,chartWidth,maxSos){
var svgHeight=100; 
var svgWidth=200;
var gap=5;
var margin=20;
var divisionX=svgWidth/maxSos;
console.log(maxSos);

//console.log(val);

//console.log(sopVal,sosVal);

var divisionY=(svgHeight/(chartData.dataset[0].values[0].data.length));
var url = "http://www.w3.org/2000/svg";

//console.log(width);

var divId =document.getElementById("container");
//console.log(divId);
var k=0;
for(var j=0;j<chartData.dataset[k].values.length;j++){
var svg = document.createElementNS(url, "svg");
    svg.setAttribute('width', svgWidth);
    svg.setAttribute('height', svgHeight);
    divId.appendChild(svg);
 var line=new Axes(url);
 line.createLines(svg,((divisionX*j)-1)+margin,margin,((divisionX*j)-1)+margin,(svgHeight-((((chartData.dataset[k].values[j].data.length)-1)*gap))+margin),"stroke:rgb(0,0,0);stroke-width:2");
 //var text=new Axes(url);
 //text.createText(svg,((divisionX*j)-1)+margin,margin-10,chartData.dataset[k].values[j].zone,"blue");
 for(var i=0;i<chartData.dataset[k].values[j].data.length;i++){
 var canvas=new Canvas(url);
 //canvas.createLines(svg,svgWidth*i,0,svgWidth*i,svgHeight,"stroke:#000000")
 var sosLength=chartData.dataset[k].values[j].data[i].sos.length;
 //console.log(sosLength);
 var sosVal=parseInt(chartData.dataset[k].values[j].data[i].sos.slice(1,sosLength));
 //console.log(sosVal);
 var width=divisionX*sosVal;
 var height=divisionY-(((chartData.dataset[k].values[j].data.length)-1)*gap);
 console.log(height);
 canvas.createRectangle(svg,height,width,margin,margin);
 
 }
}
} 
