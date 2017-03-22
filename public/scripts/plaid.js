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
  console.log('getting plaid info');
  return fetch('/plaid/share_public_plaid')
    .then(r => r.json())
    .then(data => {
      console.log('data:', data);
      (plaid_env = data.PLAID_ENV), (plaid_public_key = data.PLAID_PUBLIC_KEY);
    })
    .then(() => {
      makeHandler();
    });
}

function makeHandler() {
  let handler = Plaid.create({
    apiVersion: 'v2',
    clientName: '2cents demo app',
    env: plaid_env,
    product: ['transactions'],
    key: plaid_public_key,
    onSuccess: function(public_token) {
      $.post('/plaid/get_access_token', { public_token: public_token }, function() {
        console.log('posting to get_AT');
      });
    }
  });
  handler.open();
  startLooking();
  // let starter = setTimeout(() => {
  //   console.log('starting')
  // }, 1000)
}

function startLooking() {
  let iframe = document.getElementById('plaid-link-iframe-1');
  let innerDoc = iframe.contentDocument;
  console.log(iframe)
  setTimeout(() => {
    let instits = innerDoc.getElementById('plaid-link-container')
    console.log(instits)
  }, 3000)
  // let head = $('head')
  // let linkInputs = $('<script>').attr('src', '../scripts/linkInputs.js')
  // linkInputs.appendTo(head)
  // console.log(head)
}

(function($) {
  console.log('dom loaded');
  getPlaidInfo();

  let accessToken = getParameterByName('access_token');
  if (accessToken != null) {
    console.log('accessToken:', accessToken);
    $.post('/set_access_token', { access_token: accessToken }, function() {
      $('#container').fadeOut('fast', function() {
        $('#intro').hide();
        $('#app, #steps').fadeIn('slow');
      });
    });
  }

})(jQuery);
