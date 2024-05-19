(function() {
    var url = new URL(window.location.href);
    if (url.hostname === 'www.google.com' && url.searchParams.has('q')) {
        url.searchParams.set('udm', '14');
        window.location.href = url.href;
    }
})();