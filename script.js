/*<div class="color" title="#ff0000">
      <div class="block" style="background-color: red;"></div>
      <div class="label">red</div>
</div>*/

// createBlock creates an html element for the block, it will accept a color as a parameter
// and return the html element
function createBlock (color) {
    const $block = document.createElement('div')
    $block.classList.add('block')
    $block.style.backgroundColor = color
    return $block
}


// createLabel creates the html for a label that accepts a color as a parameter 
// and return the html element
function createLabel (color) {
    const $label = document.createElement('div')
    $label.classList.add('label')
    $label.textContent = color
    return $label
}


// createColor creates the html for the color element that will set the name of color and hex value
// and return the html element
function createColor (name, hex) {
    const $color = document.createElement('div')
    $color.classList.add('color')
    $color.title = hex
    $color.append(createBlock(name), createLabel(name))
    return $color
}


// createGallery adds colors to the gallery
// accepts colors (data) as a parameter
function createGallery (colors) {
    const $gallery = document.getElementById('gallery')

    for(const color in colors) {
        $gallery.append(createColor(color, colors[color]))
    }
}

createGallery(colors)