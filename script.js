let fullform=document.forms.feedback;

let input=document.forms.feedback.elements.u_name;
let radio=document.forms.feedback.elements.type;
let mail=document.forms.feedback.elements.mail_box;
let content=document.forms.feedback.elements.txt;
let check=document.forms.feedback.elements.chk_box;

let but=document.forms.feedback.elements.sub_btn;

let para=document.querySelector(".para");
let alert=document.querySelector(".alert_box");

fullform.addEventListener("submit", (event) =>{
    event.preventDefault()
    setTimeout(()=>{
        alert.classList.remove("alert-show");
        location.href = location.href;
    },1500)
    
    if(input.value=="")
    {
        para.innerText="Invalid username";
        alert.classList.add("alert-show");
    }
    else if(radio.value=="")
    {
        para.innerText="Select atleast 1 feedback category";
        alert.classList.add("alert-show");
    }
    else if(mail.value=="")
    {
        para.innerText="please enter your mail id";
        alert.classList.add("alert-show");
    }
    else if(content.value=="")
    {
        para.innerText="please enter your feedback briefly";
        alert.classList.add("alert-show");
    }
    else if(!(check.checked))
    {
        para.innerText="please accept the terms and condition";
        alert.classList.add("alert-show");
    }
    else
    {

        para.innerText="submitted successfully";
        alert.classList.add("alert-show");
        alert.style.background="green";    
    }
});



