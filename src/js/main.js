function consentGranted() {
  gtag('consent', 'update', {
    ad_storage: 'granted',
    analytics_storage: 'granted',
  });
  window.clarity('consent');
}
function acceptCookies() {
  localStorage.setItem('cookies', true);
  consentGranted();
  document.getElementById('cookie-consent').style.display = 'none';
}
function declineCookies() {
  localStorage.setItem('cookies', false);
  document.getElementById('cookie-consent').style.display = 'none';
}

window.onload = function onload() {
  if (localStorage.getItem('cookies') == 'true') {
    consentGranted();
  } else {
    document.getElementById('cookie-consent').style.display = '';
  }
};
