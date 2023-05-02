// console.log("Service Worker Successfully Loaded!YE");

self.addEventListener('push', function (e) {
    var options = {
        body: 'Visit now!',
        icon: 'https://images.unsplash.com/photo-1580250642511-1660fe42ad58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            {action: 'explore', title: 'Explore!',
                icon: 'images/checkmark.png'},
                {action: 'close', title: 'Close',
                icon: 'images/xmark.png'},
        ]
    };
    e.waitUntil(
    self.registration.showNotification('We have added a new blog/podcast!', options)
    );
});

self.addEventListener('fetch',() => console.log("fetch"));