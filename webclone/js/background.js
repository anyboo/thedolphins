setTimeout(function() {
    console.log(document.all.length, document.styleSheets[0])

    for (var i in document.styleSheets[0]) {
        console.log(i)
    }
    $.get('http://bullstech.cn:9999/api/glassmanage', function(data) {
        console.log(data)
    })
}, 5000)
