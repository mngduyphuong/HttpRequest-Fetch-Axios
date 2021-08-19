const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');


const getData = () => {
    var ID = document.getElementById('idTest').value;
    axios.get('https://reqres.in/api/users/' + ID)
  .then(function (response) {
    // handle success
    console.log(response);
    displayDataGet(response.data);
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
function displayDataGet(test){
  document.getElementById("dataID").innerHTML = test.data.id;
  document.getElementById("dataName").innerHTML = test.data.first_name + " " + test.data.last_name;
  document.getElementById("dataEmail").innerHTML = test.data.email;
  document.getElementById("dataImg").src = test.data.avatar;
  document.getElementById("dataError").innerHTML = "";
};
const sendData = () => {
  var postName = document.getElementById('postName').value;
  var postEmail = document.getElementById('postEmail').value;
  var postJob = document.getElementById('postJob').value;
  
  axios.post('https://reqres.in/api/users/', {
    name: postName,
    job: postJob,
    email: postEmail
  })
  .then(function (response) {
    console.log(response);
    displayDataPost(response);
  })
  .catch(function (error) {
    console.log(error);
  });

};
function displayDataPost(test){
  document.getElementById("dataPostID").innerHTML = test.data.id;
  document.getElementById("dataPostName").innerHTML = test.data.name;
  document.getElementById("dataPostEmail").innerHTML = test.data.email;
  document.getElementById("dataPostJob").innerHTML = test.data.job;
  document.getElementById("dataPostDate").innerHTML = test.data.createdAt;
};
getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
