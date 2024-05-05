document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thanks for contacting us!');
});

function searchPosts() {
    let input = document.getElementById('searchBox');
    let filter = input.value.toUpperCase();
    let posts = document.querySelectorAll('article');

    for (let i = 0; i < posts.length; i++) {
        let title = posts[i].getElementsByTagName('h2')[0];
        if (title.innerHTML.toUpperCase().indexOf(filter) > -1) {
            posts[i].style.display = "";
        } else {
            posts[i].style.display = "none";
        }
    }
}

let currentCount = 3;

function loadMorePosts() {
    let posts = document.querySelectorAll('.post:hidden');
    for (let i = 0; i < posts.length && i < currentCount; i++) {
        posts[i].style.display = 'block';
    }
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    if (name && email) {
        // perform submission logic
        alert('Thank you for contacting us, ' + name + '!');
    } else {
        alert('Please fill in all fields.');
    }
});

var firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-project-id.firebaseapp.com",
    databaseURL: "https://your-project-id.firebaseio.com",
    projectId: "your-project-id",
    storageBucket: "your-project-id.appspot.com",
    messagingSenderId: "your-sender-id",
    appId: "your-app-id"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  