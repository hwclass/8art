/**
 * @module $art
 * author eray arslan
 */

var $art = function(o) {
    //
    var self = this;
    //
    var el = o.target;
    var obj = o.image;
    var pixel_size = o.size;
    //
    this.pixel_size = pixel_size;
    this.height = obj.length;
    this.width = 0;
    //
    var calculateWidth = function(obj) {
        for (var i=0; i < self.height; i++) {
            if (obj[i].length > self.width) {
                self.width = obj[i].length;
            }
        }
    };
    //
    calculateWidth(obj);
    el.width = self.pixel_size * this.width;
    el.height = self.pixel_size * this.height;
    //
    this.image = el.getContext("2d");
    this.draw = function() {
        for (var y = 0; y < self.height; y++) {
            for (var x=0; x < self.width; x++) {
                if(obj[y][x] !== undefined && obj[y][x] !== "#ffffff") {
                    this.image.fillStyle = obj[y][x];
                    this.image.fillRect(self.pixel_size * x, self.pixel_size * y, self.pixel_size,self.pixel_size);
                    this.image.stroke();
                }
            }
        }
    };
    //
    return this;
};
