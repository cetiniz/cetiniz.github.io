function onSubmit(event) {
    event.preventDefault();

    const userName = document.getElementsById('username');
    const password = document.getElementsById('password');

    fetch("http://employgraduates.com/login",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({a: 1, b: 2})
        })
        .then(function(res){ console.log(res) })
        .catch(function(res){ console.log(res) })
}
