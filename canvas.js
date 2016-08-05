function Canvas(url){
this.url=url;
}
Canvas.prototype.createRectangle = function(svg,height,width,x,y){
  var rect = document.createElementNS(this.url, "rect");
    rect.setAttributeNS(null, "x",x);
    rect.setAttributeNS(null, "y",y);
    rect.setAttributeNS(null, "height",height);
    rect.setAttributeNS(null, "width",width);
    rect.setAttributeNS(null,"fill","grey");
    svg.appendChild(rect);
};
 Canvas.prototype.createLines = function(svg,x1,y1,x2,y2,style){
        var lineXY = document.createElementNS(this.url, "line");
            lineXY.setAttributeNS(null, "x1",x1);
            lineXY.setAttributeNS(null, "y1",y1);
            lineXY.setAttributeNS(null, "x2",x2);
            lineXY.setAttributeNS(null, "y2",y2);
            lineXY.setAttribute('style', "stroke:#5BDE6C");
            svg.appendChild(lineXY);
       
    };