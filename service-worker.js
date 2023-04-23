self.addEventListener('push', function(event) {
  console.log('Received a push notification', event);

  if (event.data) {
    showNotification(event.data.text());
  } else {
    console.log('Push notification has no payload.');
  }
});

function showNotification(message) {
  self.registration.showNotification('My App', {
    body: message,
  });
}

// yes