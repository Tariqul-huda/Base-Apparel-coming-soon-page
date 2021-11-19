const email = document.getElementById('email');
const button = document.getElementById('button');
const controller = new AbortController();
const article = document.getElementsByClassName('article')[0];
const div = document.getElementsByClassName('article--email')[0];
let count =0;



function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}
{/* <span class="article--email--error--icon"><img src="./images/icon-error.svg" alt="" srcset=""></span> */}


const emailHandler = ()=>{
  if(!ValidateEmail(email.value)){
    // div.insertAdjacentHTML('afterend','<p class="article--email--error">Please provide a valid email</p>')
    const err=document.createElement('p');
    err.textContent = 'Please provide a valid email';
    err.className ='article--email--error';
    article.appendChild(err)
    const errIcon = document.createElement('img');
    errIcon.src ='./images/icon-error.svg';
    errIcon.className = 'article--email--error--icon';
    div.insertBefore(errIcon,div.childNodes[2]);
    if(count>0){
       article.removeChild(err)
       div.removeChild(errIcon);
    }
    count++;
  }
}

button.addEventListener("click",emailHandler)


email.addEventListener('click',()=>{
  const err = document.querySelector('.article--email--error');
  const errIcon = document.querySelector('.article--email--error--icon');
  if(err && errIcon){
    console.log(errIcon)
    err.remove();
    errIcon.remove();
    count =0;
  }
})