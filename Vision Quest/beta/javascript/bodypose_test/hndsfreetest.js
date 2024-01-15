var overlay_img_size = 500;
var posx_slider = document.getElementById("posx");
var posx = posx_slider.value;
let update_posx = () => posx = posx_slider.value;
posx_slider.addEventListener('input', update_posx);
update_posx();

var posy_slider = document.getElementById("posy");
var posy = posy_slider.value;
let update_posy = () => posy = posy_slider.value;
posy_slider.addEventListener('input', update_posy);
update_posy();

var sizer_slider = document.getElementById("sizer");
var overlay_img_size = sizer_slider.value;
let update_size = () => overlay_img_size = sizer_slider.value;
sizer_slider.addEventListener('input', update_size);
update_size();

function loadmygestures() {

  var e = document.getElementById("graphics_pack").value;
  console.log(e);
  e = 'imgs/' + e + '_';

  handsfree.useGesture({
    "name": "nice",
    "algorithm": "fingerpose",
    "models": "hands",
    "confidence": 7.5,
    "description": [
      [
        "addCurl",
        "Thumb",
        "NoCurl",
        1
      ],
      [
        "addDirection",
        "Thumb",
        "DiagonalUpLeft",
        1
      ],
      [
        "addCurl",
        "Index",
        "HalfCurl",
        1
      ],
      [
        "addDirection",
        "Index",
        "DiagonalUpLeft",
        1
      ],
      [
        "addCurl",
        "Middle",
        "NoCurl",
        1
      ],
      [
        "addCurl",
        "Middle",
        "HalfCurl",
        0.07142857142857142
      ],
      [
        "addDirection",
        "Middle",
        "DiagonalUpLeft",
        1
      ],
      [
        "addDirection",
        "Middle",
        "VerticalUp",
        0.5
      ],
      [
        "addCurl",
        "Ring",
        "NoCurl",
        1
      ],
      [
        "addDirection",
        "Ring",
        "DiagonalUpLeft",
        0.5294117647058824
      ],
      [
        "addDirection",
        "Ring",
        "VerticalUp",
        1
      ],
      [
        "addDirection",
        "Ring",
        "DiagonalUpRight",
        0.23529411764705882
      ],
      [
        "addCurl",
        "Pinky",
        "NoCurl",
        1
      ],
      [
        "addDirection",
        "Pinky",
        "DiagonalUpLeft",
        0.15789473684210525
      ],
      [
        "addDirection",
        "Pinky",
        "VerticalUp",
        1
      ],
      [
        "addDirection",
        "Pinky",
        "DiagonalUpRight",
        0.42105263157894735
      ],
      [
        "addDirection",
        "Thumb",
        "DiagonalUpRight",
        1
      ],
      [
        "addDirection",
        "Index",
        "DiagonalUpRight",
        1
      ],
      [
        "addDirection",
        "Middle",
        "DiagonalUpRight",
        1
      ],
      [
        "addDirection",
        "Ring",
        "DiagonalUpRight",
        0.5294117647058824
      ],
      [
        "addDirection",
        "Ring",
        "DiagonalUpLeft",
        0.23529411764705882
      ],
      [
        "addDirection",
        "Pinky",
        "DiagonalUpRight",
        0.15789473684210525
      ],
      [
        "addDirection",
        "Pinky",
        "DiagonalUpLeft",
        0.42105263157894735
      ],
      [
        "setWeight",
        "Thumb",
        2
      ],
      [
        "setWeight",
        "Index",
        2
      ]
    ]
  })
  nice = loadImage(e + "nice.png");
}

function predictgesture() {
  handsfree.use('logger', data => {
    if (!data.pose) {
      console.log("Please come in frame");
    }
    else {
      console.log("You are in!");
    }
  })
}


const handsfree = new Handsfree({ pose: true, showDebug: true })
handsfree.start()

document.addEventListener('handsfree-init', event => {
  console.log("Initiliazation done...")
})

document.addEventListener('handsfree-gotUserMedia', event => {
  console.log("Getting user camera feed...")
})

document.addEventListener('handsfree-modelReady', event => {
  console.log("Model ready!")
  loadmygestures()
  predictgesture()

})
