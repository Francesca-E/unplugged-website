const inputs= document.querySelectorAll('input');
var button = document.getElementById("enter");
const patterns={
email:/^([a-z\d\.\'-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
}

function validate(field, regex){

if(regex.test(field.value)){
  field.className='valid';
}else{
  field.className='invalid';
}
}


inputs.forEach((input)=>{

  input.addEventListener('keyup',(e)=>{
    validate(e.target,patterns[e.target.attributes.name.value])
  });

});




// email regex
// (yourname)@(domain).(extension)(.again)
// (francesca)@(gmail).(co)(.uk)
// any letters a-z
// any digit
// \. escapes the regex value of . (any characheter) we want the literal .
// + means one or more figure
// {2,8} between 2 and 8 characters
// ? makes the character before it optional, as it is in parenthesis it makes the
// whole thing in parenthesis optional
