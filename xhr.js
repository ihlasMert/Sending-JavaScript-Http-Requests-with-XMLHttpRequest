const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');
const sendHttpRequest = (method, url)=>{
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json"
    xhr.onload=()=>{
        const data = xhr.response
        console.log(xhr.response)
    }
    xhr.send()
}

const getData = () => {
    sendHttpRequest("GET", "https://reqres.in/api/users")
};

const sendData = () => {};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);