self.addEventListener('push', function (e) {
    var options = {
        body: 'Visit pls',
        icon: 'images/volcano.jpg',
        vibrate: [100, 50, 100],
        url: "www.everydaybeing.uk",
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