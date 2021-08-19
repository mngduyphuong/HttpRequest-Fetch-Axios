const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');


const getData = () => {
    var ID = document.getElementById('idTest').value;
    axios.get('https://reqres.in/api/users/' + ID)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
};

const sendData = () => {};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
