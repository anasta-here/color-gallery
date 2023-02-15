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
  const $gallery = document.createElement('div')
  $gallery.classList.add('gallery')

  for (const color of colors) {
    $gallery.append(createColor(color.name, color.hex))
  }

  return $gallery
}

function buildTitle (text) {
  const $title = document.createElement('h2')
  $title.classList.add('title')
  $title.textContent = text

  return $title
}

function buildGalleries (colors, hues) {
  const $galleries = document.getElementById('galleries')
  const $fragment = document.createDocumentFragment()

  const colorsArray = Object.keys(colors).map(color => {
    return { name: color, hex: colors[color] }
  })

  for (const hue of hues) {
    const colors = colorsArray.filter(color => color.name.includes(hue))

    $fragment.append(buildTitle(hue), buildGallery(colors))
  }

  $galleries.append($fragment)
}

const hues = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

buildGalleries(colors, hues)
