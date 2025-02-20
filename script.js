const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');
        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navUl = document.querySelector('.navbar ul');

    menuIcon.addEventListener('click', function() {
        navUl.classList.toggle('active');
    });
});


// Menu Icon Navbar
const menuIcon = document.querySelector("#menu-icon")
const navbar = document.querySelector(".navbar .nav-list")

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x")
  navbar.classList.toggle("active")
}

// Text Rotation
class TextRotate {
  constructor(el, toRotate, period) {
    this.toRotate = toRotate
    this.el = el
    this.loopNum = 0
    this.period = Number.parseInt(period, 10) || 2000
    this.txt = ""
    this.isDeleting = false
    this.tick()
  }

  tick() {
    const i = this.loopNum % this.toRotate.length
    const fullTxt = this.toRotate[i]

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1)
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>"
    
    let delta = 200 - Math.random() * 100

    if (this.isDeleting) {
      delta /= 2
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period
      this.isDeleting = true
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false
      this.loopNum++
      delta = 500
    }

    setTimeout(() => {
      this.tick()
    }, delta)
  }
}

window.onload = () => {
  const elements = document.getElementsByClassName("text-rotate")
  for (let i = 0; i < elements.length; i++) {
    const toRotate = elements[i].getAttribute("data-rotate")
    const period = elements[i].getAttribute("data-period")
    if (toRotate) {
      new TextRotate(elements[i], JSON.parse(toRotate), period)
    }
  }
}

// Scroll Sections Active Link
const sections = document.querySelectorAll("section")
const navLinks = document.querySelectorAll(".navbar a")

window.onscroll = () => {
  sections.forEach((sec) => {
    const top = window.scrollY
    const offset = sec.offsetTop - 150
    const height = sec.offsetHeight
    const id = sec.getAttribute("id")

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active")
        document.querySelector(".navbar a[href*=" + id + "]").classList.add("active")
      })
    }
  })

  // Sticky Navbar
  const header = document.querySelector(".navbar")
  header.classList.toggle("sticky", window.scrollY > 100)

  // Remove Menu Icon Navbar when click navbar link (scroll)
  menuIcon.classList.remove("bx-x")
  navbar.classList.remove("active")
}

