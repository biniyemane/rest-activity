const resultDiv = document.getElementById('result');

function hideResults() {
    resultDiv.classList.add('hidden');
    resultDiv.innerHTML = '';
}

function showResults(data) {
    resultDiv.classList.remove('hidden');
    resultDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}

function getAllPosts() {
    hideResults();
    fetch('http://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => showResults(data))
        .catch(error => console.log('Error:', error));
}

function getPost10() {
    hideResults();
    fetch('http://jsonplaceholder.typicode.com/posts/10')
        .then(response => response.json())
        .then(data => showResults(data))
        .catch(error => console.log('Error:', error));
}

function createNewPost() {
    hideResults();
    fetch('http://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            title: 'Uero 24',
            body: 'Playing Soccer',
          
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('New Post ID:', data.id);
        showResults(data);
    })
    .catch(error => console.log('Error:', error));
}

function replacePost12() {
    hideResults();
    fetch('http://jsonplaceholder.typicode.com/posts/12', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            id: 12,
            title: 'Updated Title',
            body: 'Updated Body',
         
        })
    })
    .then(response => response.json())
    .then(data => showResults(data))
    .catch(error => console.log('Error:', error));
}



function updatePost12Title() {
    hideResults();
    fetch('http://jsonplaceholder.typicode.com/posts/12', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            title: 'Partially Updated Title'
        })
    })
    .then(response => response.json())
    .then(data => showResults(data))
    .catch(error => console.log('Error:', error));
}

function deletePost12() {
    hideResults();
    fetch('http://jsonplaceholder.typicode.com/posts/12', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(() => {
        showResults({ message: 'Post with ID 12 deleted successfully' });
    })
    .catch(error => console.log('Error:', error));
}
