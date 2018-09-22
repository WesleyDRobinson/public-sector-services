import page from 'page'
import HyperHTMLElement from 'hyperhtml-element'

const { bind, wire } = HyperHTMLElement

import CustomHome from './components/custom-home'
import OurServices from './components/our-services'
import AboutUs from './components/about-us'
import ContactInformation from './components/contact-information'
import BioResume from './components/bio-resume'

page('*', analytics)
page('/', home)
page('/about', about)
page('/services', services)
page('/contact', contact)
page('/bio', bio)
page('/resume', '/bio#marcia-raines-resume')
page()

const exitAnimation = 'fadeOut'

function analytics(ctx, next) {
  if (ctx.init) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || gtag
    window.gtag('js', new Date());
    window.gtag('config', 'UA-68515019-6');
    next()
  } else {
    next()
  }

  function gtag() {
    return window.dataLayer.push(arguments)
  }
}

function home() {
  window.gtag('event', 'Home Viewed')
  page('/about')
}

function about() {
  window.gtag('event', 'About Us Viewed')
  const mainArea = document.querySelector('#main-area')
  const fEC = mainArea.firstElementChild
  if (fEC) fEC.classList.add(exitAnimation)
  const aboutUs = wire()`<about-us></about-us>`
  setTimeout(() => bind(mainArea)`${aboutUs}`, 1000)
}

function contact() {
  window.gtag('event', 'Contact Information Viewed')
  const mainArea = document.querySelector('#main-area')
  const fEC = mainArea.firstElementChild
  if (fEC) fEC.classList.add(exitAnimation)

  const contact = wire()`<contact-information></contact-information>`
  setTimeout(() => bind(mainArea)`${contact}`, 1000)
}

function services() {
  window.gtag('event', 'Our Services Viewed')
  const mainArea = document.querySelector('#main-area')
  const fEC = mainArea.firstElementChild
  if (fEC) fEC.classList.add(exitAnimation)
  const ourServices = wire()`<our-services></our-services>`
  setTimeout(() => bind(mainArea)`${ourServices}`, 1000)
}

function bio() {
  window.gtag('event', 'Bio | Resume Viewed')
  const mainArea = document.querySelector('#main-area')
  const fEC = mainArea.firstElementChild
  if (fEC) fEC.classList.add(exitAnimation)
  const bioResume = wire()`<bio-resume></bio-resume>`
  setTimeout(() => bind(mainArea)`${bioResume}`, 1000)
}
