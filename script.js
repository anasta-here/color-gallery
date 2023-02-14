/*
<div class="color" title="#ff0000">
  <div class="block" style="background-color: red"></div>
  <div class="name">Red</div>
</div>
*/

function createBlock (name) {
  const $block = document.createElement('div')
  $block.classList.add('block')
  $block.style.backgroundColor = name

  return $block
}

function createLabel (name) {
  const $label = document.createElement('div')
  $label.classList.add('label')
  $label.textContent = name

  return $label
}

function createColor (name, hex) {
  const $color = document.createElement('div')
  $color.classList.add('color')
  $color.title = hex

  $color.append(createBlock(name), createLabel(name))

  return $color
}

function buildGallery (colors) {
  const $gallery = document.getElementById('gallery')
  const $fragment = document.createDocumentFragment()

  for (const color in colors) {
    $fragment.append(createColor(color, colors[color]))
  }

  $gallery.append($fragment)
}

buildGallery(colors)
