function test(colorA, colorB) {
  
  var r = Math.ceil(parseInt(colorA.slice(1,3), 16) + parseInt(colorB.slice(1,3), 16) / 2) 
  var g = Math.ceil(parseInt(colorA.slice(3,5), 16) + parseInt(colorB.slice(3,5), 16) / 2)
  var b = Math.ceil(parseInt(colorA.slice(5,7), 16) + parseInt(colorB.slice(5,7), 16) / 2)

  if (r > 255) {
    r = 255
  }

  if (g > 255) {
    g = 255
  }

  if (b > 255) {
    b = 255
  }
  
  var avgHex = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`

  return avgHex
}