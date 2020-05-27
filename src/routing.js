import page from 'page'
import HyperHTMLElement from 'hyperhtml-element'

import analytics from './analytics.js'

const { bind } = HyperHTMLElement

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

function home(ctx, next) {
  window.gtag('event', 'Home Viewed')
  page('/about')
  next()
}

function about() {
  window.gtag('event', 'About Us Viewed')
  bindEl('about-us')
}

function contact() {
  window.gtag('event', 'Contact Information Viewed')
  bindEl('contact-information')
}

function services() {
  window.gtag('event', 'Our Services Viewed')
  bindEl('our-services')
}

function bio() {
  window.gtag('event', 'Bio | Resume Viewed')
  bindEl('bio-resume')
}

function bindEl(elName) {
  const el = document.createElement(elName)
  const mainArea = document.querySelector('#main-area')
  clearFirstElementChild(mainArea)
  setTimeout(() => bind(mainArea)`${el}`, 1000)
}

function clearFirstElementChild(element) {
  const exitAnimation = 'fadeOut'
  const fEC = element.firstElementChild
  if (fEC) fEC.classList.add(exitAnimation)
  return element
}
