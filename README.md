![Logo](http://fc08.deviantart.net/fs70/f/2014/245/0/a/8bit_deadpool_dancin_by_th3applejack-d7xr2oh.gif)

# 8art

8bit design thing with fuckin' javascript array

## usage

```html

<canvas id="you" width="300" height="300"></canvas>

```

```js

// from "designs/you.json"

var you = [
    ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#8bae21","#8bae21","#8bae21","#8bae21","#8bae21","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
    ["#ffffff","#ffffff","#ffffff","#ffffff","#8bae21","#8bae21","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#8bae21","#8bae21","#ffffff","#ffffff","#ffffff","#ffffff"],
    ["#ffffff","#ffffff","#ffffff","#8bae21","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#8bae21","#ffffff","#ffffff","#ffffff"],
    ["#ffffff","#ffffff","#8bae21","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#8bae21","#ffffff","#ffffff"],
    ["#ffffff","#ffffff","#8bae21","#ffffff","#ffffff","#ffffff","#8bae21","#ffffff","#ffffff","#ffffff","#8bae21","#ffffff","#ffffff","#ffffff","#8bae21","#ffffff","#ffffff"],
    ["#ffffff","#ffffff","#8bae21","#ffffff","#ffffff","#ffffff","#cccccc","#ffffff","#ffffff","#ffffff","#cccccc","#ffffff","#ffffff","#ffffff","#8bae21","#ffffff","#ffffff"],
    ["#ffffff","#ffffff","#8bae21","#ffffff","#ffffff","#ffffff","#cccccc","#ffffff","#ffffff","#ffffff","#cccccc","#ffffff","#ffffff","#ffffff","#8bae21","#ffffff","#ffffff"],
    ["#ffffff","#ffffff","#8bae21","#ffffff","#ffffff","#ffffff","#8bae21","#ffffff","#ffffff","#ffffff","#8bae21","#ffffff","#ffffff","#ffffff","#8bae21","#ffffff","#ffffff"],
    ["#ffffff","#ffffff","#8bae21","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#8bae21","#ffffff","#ffffff"],
    ["#ffffff","#ffffff","#ffffff","#8bae21","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#8bae21","#ffffff","#ffffff","#ffffff"],
    ["#ffffff","#ffffff","#8bae21","#ffffff","#8bae21","#8bae21","#8bae21","#8bae21","#8bae21","#8bae21","#8bae21","#8bae21","#8bae21","#ffffff","#8bae21","#ffffff","#ffffff"],
    ["#ffffff","#8bae21","#ffffff","#ffffff","#8bae21","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#8bae21","#ffffff","#ffffff","#8bae21","#ffffff"],
    ["#ffffff","#8bae21","#ffffff","#8bae21","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#8bae21","#ffffff","#8bae21","#ffffff"],
    ["#8bae21","#8bae21","#8bae21","#8bae21","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#8bae21","#8bae21","#8bae21","#8bae21"],
    ["#8bae21","#ffffff","#ffffff","#8bae21","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#8bae21","#ffffff","#ffffff","#8bae21"],
    ["#ffffff","#8bae21","#8bae21","#8bae21","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#8bae21","#8bae21","#8bae21","#ffffff"],
    ["#ffffff","#ffffff","#ffffff","#8bae21","#ffffff","#ffffff","#ffffff","#8bae21","#8bae21","#8bae21","#ffffff","#ffffff","#ffffff","#8bae21","#ffffff","#ffffff","#ffffff"],
    ["#ffffff","#ffffff","#ffffff","#8bae21","#8bae21","#8bae21","#8bae21","#8bae21","#ffffff","#8bae21","#8bae21","#8bae21","#8bae21","#8bae21","#ffffff","#ffffff","#ffffff"],
    ["#ffffff","#ffffff","#ffffff","#8bae21","#ffffff","#ffffff","#ffffff","#8bae21","#ffffff","#8bae21","#ffffff","#ffffff","#ffffff","#8bae21","#ffffff","#ffffff","#ffffff"],
    ["#ffffff","#ffffff","#ffffff","#8bae21","#8bae21","#8bae21","#8bae21","#8bae21","#ffffff","#8bae21","#8bae21","#8bae21","#8bae21","#8bae21","#ffffff","#ffffff","#ffffff"]
];

```

```js

var test = new $art({
  target  : document.getElementById("you"), // canvas element
  image   : you, // image arr
  size    : 10, // pixel size
  success : function() { // success callback
    alert("such w0w amaze!");
  }
});

test.draw();

test.resize(5); // yes, u can!

```

## result

![Result](http://i.hizliresim.com/Rb1mOR.png)

## future tasks

- [x] Initial Release
- [ ] **Test**
- [ ] And more development processes (best part)

## contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
