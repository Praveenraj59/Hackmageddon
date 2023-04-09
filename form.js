const form = document.querySelector('#form')
const name = document.querySelector('#name')
const  age= document.querySelector('#age')
const gender = document.querySelector('#gender')
const phone = document.querySelector('#phone')
const address = document.querySelector('#address')
const medical = document.querySelector('#medical')
const hospital = document.querySelector('#hospital')
const alterno = document.querySelector('#alterno')
const raddress = document.querySelector('#raddress')
const blood = document.querySelector('#blood')

form.addEventListener('submit',(e)=>{
        
    if(!validateInputs()){
        e.preventDefault();
    }
})

function validateInputs(){
    const name=name.value.trim()
    const age=age.value.trim()
    const gender=gender.value.trim()
    const phone=phone.value.trim()
    const address=address.value.trim()
    const medical=medical.value.trim()
    const hospital=hospital.value.trim()
    const alterno=alterno.value.trim()
    const raddress=raddress.value.trim()
    const blood=blood.value.trim()
    let success= true
    if(name== null||name==""){
        success=false;
        setError(name,'Enter a valid Name')
    }
    else{
        setSuccess(name)
    }
    if(age==null||age==""){
        success=false;
        setError(age,'Enter a valid Age')
    }
    else{
        setSuccess(age)
    }
    if(gender==null||gender==""){
        success=false;
        setError(gender,'Enter your Gender')
    }
    else{
        setSuccess(gender)
    }
    var ph=/^\d{10}$/;
    if(phone.value.match(ph)){
        setSuccess(phone)
    }
    else{
        success=false;
        setError(phone,'Enter a valid Phone no.')
    }
    if(address==null||address==""){
        success=false;
        setError(address,'Enter your Address')
    }
    else{
        setSuccess(address)
    }
    if(medical==null||medical==""){
        success=false;
        setError(medical,'Enter your medical details')
    }
    else{
        setSuccess(medical)
    }
    if(hospital==null||hospital==""){
        success=false;
        setError(hospital,'Previously visited Hospital')
    }
    else{
        setSuccess(hospital)
    }
    if(alterno.value.match('/^\d{10}$/')){
        setSuccess(alterno)
    }
    else{
        success=false;
        setError(alterno,'Enter a valid Alternate Phone no.')
    }
    if(raddress==null||raddress==""){
        success=false;
        setError(raddress,'Enter your Relative Address')
    }
    else{
        setSuccess(raddress)
    }
    if(blood==null||blood==""){
        success=false;
        setError(blood,'Enter your Blood Group')
    }
    else{
        setSuccess(blood)
    }

}

function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}
