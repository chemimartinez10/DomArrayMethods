//Variables and const


//Methods
//--fetch--
function getUser() {
    return fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {
            console.log(data.results[0].name)
            return `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`
        })
        .catch(e => console.log(e))
}

// getUser().then(a => {
//     document.querySelector('body').innerText = a
// })


//Event Listeners