import './style.css'


/* ========================================
   ELEMENTS
======================================== */

const menuButton =
  document.querySelector('#menuButton')

const navigation =
  document.querySelector('#navigation')

const navigationLinks =
  navigation
    ? navigation.querySelectorAll('a')
    : []

const logo =
  document.querySelector('.logo')


/* ========================================
   MENU OPEN / CLOSE
======================================== */

function openMenu() {

  if (!menuButton || !navigation) {
    return
  }

  menuButton.classList.add('active')

  navigation.classList.add('active')

  menuButton.setAttribute(
    'aria-expanded',
    'true'
  )

  navigation.setAttribute(
    'aria-hidden',
    'false'
  )

}


function closeMenu() {

  if (!menuButton || !navigation) {
    return
  }

  menuButton.classList.remove('active')

  navigation.classList.remove('active')

  menuButton.setAttribute(
    'aria-expanded',
    'false'
  )

  navigation.setAttribute(
    'aria-hidden',
    'true'
  )

}


function toggleMenu() {

  if (!menuButton || !navigation) {
    return
  }

  const isOpen =
    menuButton.classList.contains('active')

  if (isOpen) {

    closeMenu()

  } else {

    openMenu()

  }

}


/* ========================================
   HAMBURGER CLICK
======================================== */

if (menuButton) {

  menuButton.addEventListener(
    'click',
    toggleMenu
  )

}


/* ========================================
   NAVIGATION LINK CLICK
======================================== */

navigationLinks.forEach((link) => {

  link.addEventListener(
    'click',
    () => {

      closeMenu()

    }
  )

})


/* ========================================
   LOGO CLICK
======================================== */

if (logo) {

  logo.addEventListener(
    'click',
    () => {

      closeMenu()

    }
  )

}


/* ========================================
   ESC KEY
======================================== */

document.addEventListener(
  'keydown',
  (event) => {

    if (event.key === 'Escape') {

      closeMenu()

    }

  }
)


/* ========================================
   CLOSE MENU WHEN RESIZING TO DESKTOP
======================================== */

window.addEventListener(
  'resize',
  () => {

    if (
      window.innerWidth > 700
    ) {

      closeMenu()

    }

  }
)


/* ========================================
   INFINITE WORKS SLIDER
======================================== */

const worksTracks =
  document.querySelectorAll('.works-track')

worksTracks.forEach((track) => {

  const cards =
    Array.from(track.children)

  cards.forEach((card) => {

    const clone =
      card.cloneNode(true)

    clone.setAttribute(
      'aria-hidden',
      'true'
    )

    track.appendChild(clone)

  })

})