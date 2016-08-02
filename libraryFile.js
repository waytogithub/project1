function RenderChart(chartHeight,chartWidth,chartData){
this.chartHeight=chartHeight;
this.chartWidth=chartWidth;
this.chartData=chartData;

}
RenderChart.prototype.sumTotal = function() {
  console.log(this.chartData.data[0].values[0].central.prof);
  var sumOfProfit=0,sumOfSales=0,k=0;
  for(var i=0;i<this.chartData.data[k].values.length;i++){
  sumOfProfit+=this.chartData.data[k].values[i].central.prof;
  }
  console.log(sumOfProfit);

}