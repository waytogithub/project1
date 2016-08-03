function RenderChart(chartHeight,chartWidth,chartData){
this.chartHeight=chartHeight;
this.chartWidth=chartWidth;
this.chartData=chartData;

}
RenderChart.prototype.calSumTotal = function(chartData) {
 var sum=0,sumStringobj={},sumArray[],sumOfProfit=0,sumOfSales=0,sumArray=[];
 
 
 for(var j=0;j<chartData.dataset[i].values.length;j++){
   for(k=0;k<this.chartData.dataset[i].values[j].data[k].length;k++){
     var l=this.chartData.dataset[i].values[j].data[k].sop.slice(1,l).length;
     sumOfProfit+=(parseInt(this.chartData.dataset[i].values[j].data[k].sop.slice(1,l)));
     }
   for(k=0;k<this.chartData.dataset[i].values[j].data[k].length;k++){
     var l=this.chartData.dataset[i].values[j].data[k].sos.slice(1,l).length;
     sumOfSales+=(parseInt(this.chartData.dataset[i].values[j].data[k].sos.slice(1,l)));
     }      
 sumArrayCoffee[j]={"sumOfProfit":sumOfProfit,"sumOfSales":sumOfSales}; 
 }
 

}

}
