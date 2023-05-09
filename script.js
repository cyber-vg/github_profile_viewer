const APIURL="https://api.github.com/users/" 
const main=document.querySelector(".main")
const searchbox=document.querySelector("#search")

const getUser= async (username)=>{
  const response = await fetch(APIURL+username);
  const data= await response.json()
  console.log(data)
  if(data.login==null){
    alert(`Invalid Username ${searchbox.value}
    Please enter a valid user name`)
    return false
  }
   const card = ` <div class="col">
  
  <div class="all">
    <div class="img">
      <img class="avatar" src="${data.avatar_url}" alt="img" />
    </div>
    <div class="info">
      <h2>${data.login}</h2>
      <p>${data.bio}</p>

      <ul class="info-li">
        <li><strong>${data.followers} Followers </strong></li>
        <li><strong>${data.following} Following</strong></li>
        <li><strong>${data.public_repos} Repos</strong></li>
      </ul>
      <div class="repos">
       
      </div>
    </div>
  </div>
</div>`

main.innerHTML=card;
getRepo(username)
}

getUser("cyber-vg")

const getRepo = async(username)=>{
  const response = await fetch(APIURL+username+"/repos")
  const data = await response.json();

const newdata=data.slice(0,10);
console.log(newdata)
const repo =document.querySelector(".repos") 

for (const element of newdata) {
  const child =document.createElement("a");
  child.classList.add("repo");
  child.href=element.html_url;
  child.innerText=element.name;
  child.target="_blank"
  repo.appendChild(child);


  
}
}
const formsubmit =()=>{
 
  if(searchbox.value!=""){
    getUser(searchbox.value )
  }
  return false;
}

searchbox.addEventListener("focusout",
function (){
  formsubmit()
}
)

/* <a href="#" class="repo" target="_blank">repo 1</a>
<a href="#" class="repo" target="_blank">repo 2</a>
<a href="#" class="repo" target="_blank">repo 3</a> */