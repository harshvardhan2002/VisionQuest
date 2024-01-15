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

var graphpack_selector = document.getElementById("graphics_pack");
var e = graphpack_selector.value;
let update_gpack = () => { 
  e = 'imgs/' + graphpack_selector.value + '_'; 
  // loadmygestures();
};
graphpack_selector.addEventListener('change', update_gpack);
update_gpack();

function loadmygestures() {

  // var e = document.getElementById("graphics_pack").value;
  // console.log(e);
  // e = 'imgs/' + e + '_';

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

  handsfree.useGesture({
    "name": "thumbsdown",
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
        "DiagonalDownLeft",
        1
      ],
      [
        "addDirection",
        "Thumb",
        "VerticalDown",
        0.6666666666666666
      ],
      [
        "addCurl",
        "Index",
        "FullCurl",
        1
      ],
      [
        "addCurl",
        "Index",
        "NoCurl",
        0.1111111111111111
      ],
      [
        "addDirection",
        "Index",
        "HorizontalLeft",
        1
      ],
      [
        "addDirection",
        "Index",
        "DiagonalDownLeft",
        0.25
      ],
      [
        "addCurl",
        "Middle",
        "FullCurl",
        1
      ],
      [
        "addDirection",
        "Middle",
        "HorizontalLeft",
        1
      ],
      [
        "addDirection",
        "Middle",
        "DiagonalDownLeft",
        0.1111111111111111
      ],
      [
        "addCurl",
        "Ring",
        "FullCurl",
        1
      ],
      [
        "addDirection",
        "Ring",
        "HorizontalLeft",
        1
      ],
      [
        "addDirection",
        "Ring",
        "DiagonalUpLeft",
        0.034482758620689655
      ],
      [
        "addCurl",
        "Pinky",
        "FullCurl",
        1
      ],
      [
        "addDirection",
        "Pinky",
        "DiagonalUpLeft",
        0.30434782608695654
      ],
      [
        "addDirection",
        "Pinky",
        "HorizontalLeft",
        1
      ],
      [
        "addDirection",
        "Thumb",
        "DiagonalDownRight",
        1
      ],
      [
        "addDirection",
        "Index",
        "HorizontalRight",
        1
      ],
      [
        "addDirection",
        "Index",
        "DiagonalDownRight",
        0.25
      ],
      [
        "addDirection",
        "Middle",
        "HorizontalRight",
        1
      ],
      [
        "addDirection",
        "Middle",
        "DiagonalDownRight",
        0.1111111111111111
      ],
      [
        "addDirection",
        "Ring",
        "HorizontalRight",
        1
      ],
      [
        "addDirection",
        "Ring",
        "DiagonalUpRight",
        0.034482758620689655
      ],
      [
        "addDirection",
        "Pinky",
        "DiagonalUpRight",
        0.30434782608695654
      ],
      [
        "addDirection",
        "Pinky",
        "HorizontalRight",
        1
      ],
      [
        "setWeight",
        "Thumb",
        2
      ]
    ]
  })
  thumbsdown = loadImage(e + "thumbsdown.png");

  handsfree.useGesture({
    "name": "bye",
    "algorithm": "fingerpose",
    "models": "hands",
    "confidence": 7.5,
    "description": [
      [
        "addCurl",
        "Thumb",
        "NoCurl",
        0.875
      ],
      [
        "addCurl",
        "Thumb",
        "HalfCurl",
        1
      ],
      [
        "addDirection",
        "Thumb",
        "DiagonalUpRight",
        1
      ],
      [
        "addDirection",
        "Thumb",
        "VerticalUp",
        0.5
      ],
      [
        "addDirection",
        "Thumb",
        "DiagonalUpLeft",
        0.375
      ],
      [
        "addCurl",
        "Index",
        "NoCurl",
        1
      ],
      [
        "addDirection",
        "Index",
        "VerticalUp",
        0.875
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
        "addDirection",
        "Middle",
        "VerticalUp",
        1
      ],
      [
        "addDirection",
        "Middle",
        "DiagonalUpRight",
        0.034482758620689655
      ],
      [
        "addCurl",
        "Ring",
        "FullCurl",
        1
      ],
      [
        "addCurl",
        "Ring",
        "HalfCurl",
        0.15384615384615385
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
        0.4
      ],
      [
        "addDirection",
        "Ring",
        "DiagonalUpLeft",
        0.6
      ],
      [
        "addCurl",
        "Pinky",
        "FullCurl",
        1
      ],
      [
        "addCurl",
        "Pinky",
        "HalfCurl",
        0.15384615384615385
      ],
      [
        "addDirection",
        "Pinky",
        "DiagonalUpRight",
        0.5
      ],
      [
        "addDirection",
        "Pinky",
        "VerticalUp",
        0.375
      ],
      [
        "addDirection",
        "Pinky",
        "DiagonalUpLeft",
        1
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
      ],
      [
        "setWeight",
        "Middle",
        2
      ]
    ],
    "enabled": true
  })
  bye = loadImage(e + "bye.png");

  handsfree.useGesture({
    "name": "doubt",
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
        "VerticalUp",
        1
      ],
      [
        "addDirection",
        "Thumb",
        "DiagonalUpLeft",
        0.7647058823529411
      ],
      [
        "addCurl",
        "Index",
        "NoCurl",
        1
      ],
      [
        "addDirection",
        "Index",
        "VerticalUp",
        1
      ],
      [
        "addCurl",
        "Middle",
        "NoCurl",
        1
      ],
      [
        "addDirection",
        "Middle",
        "VerticalUp",
        1
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
        "VerticalUp",
        1
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
        "VerticalUp",
        1
      ]
    ]
  })
  doubt = loadImage(e + "doubt.png");

  handsfree.useGesture({
    "name": "thumbsup",
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
        "VerticalUp",
        0.42857142857142855
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
        "FullCurl",
        1
      ],
      [
        "addDirection",
        "Index",
        "HorizontalLeft",
        1
      ],
      [
        "addDirection",
        "Index",
        "DiagonalUpLeft",
        0.15384615384615385
      ],
      [
        "addCurl",
        "Middle",
        "FullCurl",
        1
      ],
      [
        "addDirection",
        "Middle",
        "HorizontalLeft",
        1
      ],
      [
        "addCurl",
        "Ring",
        "FullCurl",
        1
      ],
      [
        "addDirection",
        "Ring",
        "HorizontalLeft",
        1
      ],
      [
        "addCurl",
        "Pinky",
        "FullCurl",
        1
      ],
      [
        "addDirection",
        "Pinky",
        "HorizontalLeft",
        1
      ],
      [
        "setWeight",
        "Thumb",
        2
      ]
    ]
  })
  thumbsup = loadImage(e + "thumbsup.png");

  handsfree.useGesture({
    "name": "idea",
    "algorithm": "fingerpose",
    "models": "hands",
    "confidence": 7.5,
    "description": [
      [
        "addCurl",
        "Thumb",
        "HalfCurl",
        1
      ],
      [
        "addCurl",
        "Thumb",
        "NoCurl",
        0.1111111111111111
      ],
      [
        "addDirection",
        "Thumb",
        "VerticalUp",
        1
      ],
      [
        "addCurl",
        "Index",
        "NoCurl",
        1
      ],
      [
        "addDirection",
        "Index",
        "VerticalUp",
        1
      ],
      [
        "addDirection",
        "Index",
        "DiagonalUpLeft",
        0.034482758620689655
      ],
      [
        "addCurl",
        "Middle",
        "FullCurl",
        1
      ],
      [
        "addDirection",
        "Middle",
        "VerticalUp",
        1
      ],
      [
        "addDirection",
        "Middle",
        "DiagonalUpLeft",
        1
      ],
      [
        "addCurl",
        "Ring",
        "FullCurl",
        1
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
        0.07142857142857142
      ],
      [
        "addCurl",
        "Pinky",
        "FullCurl",
        1
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
        0.42857142857142855
      ],
      [
        "setWeight",
        "Index",
        2
      ]
    ],
    "enabled": true
  })
  idea = loadImage(e + "idea.png");
}
function predictgesture() {
  // gestures = handsfree.model.hands.getGesture()
  // console.log(gestures[0]?.name)
  handsfree.use('logger', ({ hands }) => {
    if (!hands) return

    gestures = handsfree.model.hands.getGesture()

    // overlay_img_size = 500;

    if (gestures[0]?.name == "nice" || gestures[1]?.name == "nice") {
      image(nice, posx, posy, overlay_img_size, overlay_img_size);
    }
    if (gestures[0]?.name == "thumbsdown") {
      image(thumbsdown, posx, posy, overlay_img_size, overlay_img_size);
    }
    if (gestures[0]?.name == "bye" || gestures[1]?.name == "bye") {
      image(bye, posx, posy, overlay_img_size, overlay_img_size);
    }
    if (gestures[0]?.name == "doubt" || gestures[1]?.name == "doubt") {
      image(doubt, posx, posy, overlay_img_size, overlay_img_size);
    }
    if (gestures[0]?.name == "thumbsup" || gestures[1]?.name == "thumbsup") {
      image(thumbsup, posx, posy, overlay_img_size, overlay_img_size);
    }
    if (gestures[0]?.name == "idea" || gestures[1]?.name == "idea") {
      image(idea, posx, posy, overlay_img_size, overlay_img_size);
    }
  })
}


const handsfree = new Handsfree({ hands: true, showDebug: false })
// handsfree.enablePlugins('browser')
handsfree.start()
// document.querySelector('#debug-window').appendChild(handsfree.debug.$wrap)
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
