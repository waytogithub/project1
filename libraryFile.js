
function RenderChart(chartHeight,chartWidth,chartData){
this.chartHeight=chartHeight;
this.chartWidth=chartWidth;
this.chartData=chartData;

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
val=getVal(this.chartData,"Espresso","Central","Caffe Mocha");
var max=getMaxSop(this.chartData);
console.log(max);
render(this.chartData,this.chartHeight,this.chartWidth,max);

}
 function getMaxSop(chartData){

var l=chartData.dataset[0].values[0].data[0].sop.length;

var max=parseInt(chartData.dataset[0].values[0].data[0].sop.slice(1,l));
for(var i=0;i<chartData.dataset.length;i++){
  for(var j=0;j<chartData.dataset[i].values.length;j++){
    for(k=0;k<chartData.dataset[i].values[j].data.length;k++){
      l=chartData.dataset[i].values[j].data[k].sop.length;
      if(parseInt(chartData.dataset[i].values[j].data[k].sop.slice(1,l))>max)
        max=chartData.dataset[i].values[j].data[k].sop.slice(1,l);
    }
  }
return max;
}
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
function render(chartData,chartHeight,chartWidth,max){
var svgHeight=300; 
var svgWidth=500;
var gap=30;
var margin=20;
var divisionX=chartWidth/max;
var val=getVal(this.chartData,"Espresso","Central","Caffe Mocha");
var divisionY=(svgHeight/(chartData.dataset[0].values[0].data.length))
var width=divisionX*val;
var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute('width', svgWidth);
        svg.setAttribute('height', svgHeight);
        svg.setAttribute("style", "margin:20px");
        var url = "http://www.w3.org/2000/svg";
createRect(url,svg,divisionY,width)
}
 

 function createRect(url,svg,height,width){
        

        var rec = document.createElementNS(url, "rect");
            rec.setAttributeNS(null, "height",height);
            rec.setAttributeNS(null, "width",width);
            rec.setAttributeNS(null, "fill", "rgba(50,140,90,0.5)");
            svg.appendChild(rec);
       
    }
