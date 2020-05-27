module.exports = function analytics(ctx, next) {
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
