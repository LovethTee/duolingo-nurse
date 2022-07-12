



document.querySelector('#askWater').addEventListener('click', addWater)
document.querySelector('#askMedications').addEventListener('click', addMedications)
document.querySelector('#askBathroom').addEventListener('click', addBathroom)
document.querySelector('#askDoctor').addEventListener('click', addDoctor)
document.querySelector('#askFeelings').addEventListener('click', addFeelings)

function addWater(){
    water.classList.toggle('hidden')
    medications.classList.add('hidden')
    bathroom.classList.add('hidden')
    doctor.classList.add('hidden')
    feelings.classList.add('hidden')
    
}
function addBathroom(){
    bathroom.classList.toggle('hidden')
    medications.classList.add('hidden')
    water.classList.add('hidden')
    doctor.classList.add('hidden')
    feelings.classList.add('hidden')
    
}
function addMedications(){
    medications.classList.toggle('hidden')
    water.classList.add('hidden')
    bathroom.classList.add('hidden')
    doctor.classList.add('hidden')
    feelings.classList.add('hidden')
    
}
function addDoctor(){
    doctor.classList.toggle('hidden')
    medications.classList.add('hidden')
    bathroom.classList.add('hidden')
    water.classList.add('hidden')
    feelings.classList.add('hidden')
    
}
function addFeelings(){
    feelings.classList.toggle('hidden')
    medications.classList.add('hidden')
    bathroom.classList.add('hidden')
    doctor.classList.add('hidden')
    water.classList.add('hidden')
    
}
