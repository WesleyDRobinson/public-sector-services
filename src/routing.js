import page from 'page'
import HyperHTMLElement from 'hyperhtml-element'

import analytics from './analytics.js'

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

function clearFirstElementChild(element) {
  const exitAnimation = 'fadeOut'
  const fEC = element.firstElementChild
  if (fEC) fEC.classList.add(exitAnimation)
  return element
}

function home(ctx, next) {
  window.gtag('event', 'Home Viewed')

  next()
}

function about() {
  window.gtag('event', 'About Us Viewed')

  const aboutUs = wire()`<about-us></about-us>`
  const mainArea = document.querySelector('#main-area')
  clearFirstElementChild(mainArea)
  setTimeout(() => bind(mainArea)`${aboutUs}`, 1000)
}

function contact() {
  window.gtag('event', 'Contact Information Viewed')

  const contact = wire()`<contact-information></contact-information>`
  const mainArea = document.querySelector('#main-area')
  clearFirstElementChild(mainArea)
  setTimeout(() => bind(mainArea)`${contact}`, 1000)
}

function services() {
  window.gtag('event', 'Our Services Viewed')

  const ourServices = wire()`<our-services></our-services>`
  const mainArea = document.querySelector('#main-area')
  clearFirstElementChild(mainArea)
  setTimeout(() => bind(mainArea)`${ourServices}`, 1000)
}

function bio() {
  window.gtag('event', 'Bio | Resume Viewed')

  const bioResume = wire()`<bio-resume></bio-resume>`
  const mainArea = document.querySelector('#main-area')
  clearFirstElementChild(mainArea)
  setTimeout(() => bind(mainArea)`${bioResume}`, 1000)
}

