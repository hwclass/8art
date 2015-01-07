/**
 * @module $art
 * author : eray arslan
 *
 * 8bit design thing with fuckin' javascript array
 *
 * Example
 *
 *   var example = new $art({
 *     target  : document.getElementById("example"),
 *     image   : exampleArr,
 *     size    : 15,
 *     success : function() {
 *       alert("such w0w amaze!");
 *     }
 *   });
 *
 * @param {Object} o
 * @return {$art}
 */

var $art = function $art(o) {
  if (!(this instanceof $art)) {
    return new $art(o);
  }
  //
  var self = this;
  //
  var transparent = "#$$$$$$";
  //
  var el = o.target;
  var obj = o.image;
  var pixel_size = o.size;
  var success = o.success;
  //
  this.pixel_size = pixel_size;
  this.height = obj.length;
  this.width = 0;
  this.success = success;
  //
  var calculateWidth = function(obj) {
    for (var i=0; i < self.height; i++) {
      if (obj[i].length > self.width) {
        self.width = obj[i].length;
      }
    }
  };
  var calculateElementSize = function() {
    el.width = self.pixel_size * self.width;
    el.height = self.pixel_size * self.height;
  };
  //
  calculateWidth(obj);
  //
  this.image = el.getContext("2d");
  this.draw = function() {
    calculateElementSize();
    //
    for (var y = 0; y < self.height; y++) {
      for (var x = 0; x < self.width; x++) {
        if (obj[y][x] !== undefined && obj[y][x] !== transparent) {
          this.image.fillStyle = obj[y][x];
          this.image.fillRect(self.pixel_size * x, self.pixel_size * y, self.pixel_size, self.pixel_size);
          this.image.stroke();
        }
      }
    }
    //
    if(self.success) { self.success(); };
  };
  this.resize = function(size) {
    self.image.clearRect(
        0
      , 0
      , self.image.canvas.width
      , self.image.canvas.height
    );
    //
    self.pixel_size = size;
    self.draw();
  };
  //
  return this;
};
