function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  console.log(
    'get param by name',
    decodeURIComponent(results[2].replace(/\+/g, ' '))
  );
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function getPlaidInfo() {
  console.log('getting plaid info')
  return fetch('/plaid/share_public_plaid')
  .then((r) => r.json())
  .then((data) => {
    console.log('data:', data)
    PLAID_ENV = data.PLAID_ENV,
    PLAID_PUBLIC_KEY = data.PLAID_PUBLIC_KEY
  })
  .then(() => {
    makeHandler();
  })
}

function makeHandler() {
  console.log('making handler', typeof PLAID_ENV, typeof PLAID_PUBLIC_KEY)
  let handler = Plaid.create({
    apiVersion: 'v2',
    clientName: 'my first plaid app',
    env: `${PLAID_ENV}`,
    product: ['transactions'],
    key: `${PLAID_PUBLIC_KEY}`,
    onSuccess: function(public_token) {
      console.log('success')
    }
  });
  handler.open()
}

(function($) {
  console.log('hello')
  getPlaidInfo();
})(jQuery);
