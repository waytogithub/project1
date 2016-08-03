function RenderChart(chartHeight,chartWidth,chartData){
this.chartHeight=chartHeight;
this.chartWidth=chartWidth;
this.chartData=chartData;

}
RenderChart.prototype.calSumTotal = function() {

  console.log((this.chartData.data[0].values[0].central.Prof).length);
  var sumTotal="";
  var sumOfProfit,sumOfSales;
  //console.log(this.chartData.data.length);
  for(var k=0;k<this.chartData.data.length;k++){
  sumOfProfit=0;sumOfSales=0;
  for(var i=0;i<this.chartData.data[k].values.length;i++){
  var l=(this.chartData.data[k].values[i].central.Prof).length;	
  sumOfProfit+=parseInt((this.chartData.data[k].values[i].central.Prof).slice(1,l));
  }
  for(var i=0;i<this.chartData.data[k].values.length;i++){
  var l=(this.chartData.data[k].values[i].central.Sales).length;
  sumOfSales+=parseInt((this.chartData.data[k].values[i].central.Sales).slice(1,l));
  }
  sumTotal+=sumOfProfit+' '+sumOfSales+' ';
  console.log(sumTotal);
  //east
  sumOfProfit=0;sumOfSales=0;
  for(var i=0;i<this.chartData.data[k].values.length;i++){
  var l=(this.chartData.data[k].values[i].east.Prof).length;	
  sumOfProfit+=parseInt((this.chartData.data[k].values[i].east.Prof).slice(1,l));
  }
  for(var i=0;i<this.chartData.data[k].values.length;i++){
  var l=(this.chartData.data[k].values[i].east.Sales).length;
  sumOfSales+=parseInt((this.chartData.data[k].values[i].east.Sales).slice(1,l));
  }
  sumTotal+=sumOfProfit+' '+sumOfSales+' ';
  //south
  sumOfProfit=0;sumOfSales=0;
  for(var i=0;i<this.chartData.data[k].values.length;i++){
  var l=(this.chartData.data[k].values[i].south.Prof).length;	
  sumOfProfit+=parseInt((this.chartData.data[k].values[i].south.Prof).slice(1,l));
  }
  for(var i=0;i<this.chartData.data[k].values.length;i++){
  var l=(this.chartData.data[k].values[i].central.Sales).length;
  sumOfSales+=parseInt((this.chartData.data[k].values[i].south.Sales).slice(1,l));
  }  
  sumTotal+=sumOfProfit+' '+sumOfSales+' ';
  //west
  sumOfProfit=0;sumOfSales=0;
  for(var i=0;i<this.chartData.data[k].values.length;i++){
  var l=(this.chartData.data[k].values[i].central.Prof).length;	
  sumOfProfit+=parseInt((this.chartData.data[k].values[i].west.Prof).slice(1,l));
  }
  for(var i=0;i<this.chartData.data[k].values.length;i++){
  var l=(this.chartData.data[k].values[i].west.Sales).length;
  sumOfSales+=parseInt((this.chartData.data[k].values[i].west.Sales).slice(1,l));
  }  
  sumTotal+=sumOfProfit+' '+sumOfSales+' ';
  }
  console.log(sumTotal);
}

this.render(hLines,vLines){
this.hLines=hLines;
this.vLines=vLines;
this.svgHeight=500;
this.svgWidth=500;
this.chartHeight=svgHeight-50;
this.chartWidth=svgWidth-50;
var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
       svg.setAttribute('width', svgWidth);
       svg.setAttribute('height', svgHeight);
       svg.setAttribute("style", "margin:20px");
    var url = "http://www.w3.org/2000/svg";
for(var i=0;i<)



}
