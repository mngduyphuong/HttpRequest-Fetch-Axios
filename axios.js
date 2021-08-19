const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');


const getData = () => {
    var ID = document.getElementById('idTest').value;
    axios.get('https://reqres.in/api/users/' + ID)
  .then(function (response) {
    // handle success
    console.log(response);
    displayData(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    document.getElementById("dataError").innerHTML = "Invalid ID";
    document.getElementById("dataID").innerHTML = "";
  document.getElementById("dataName").innerHTML = "";
  document.getElementById("dataEmail").innerHTML = "";
  document.getElementById("dataImg").src = "";
  });
};
function displayData(test){
  document.getElementById("dataID").innerHTML = test.data.id;
  document.getElementById("dataName").innerHTML = test.data.first_name + " " + test.data.last_name;
  document.getElementById("dataEmail").innerHTML = test.data.email;
  document.getElementById("dataImg").src = test.data.avatar;
  document.getElementById("dataError").innerHTML = "";
};
const sendData = () => {};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
