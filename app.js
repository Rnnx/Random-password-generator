const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
const len = characters.length;
const passLength = 15

const genBtn = document.querySelector('#gen-btn')
const txtFieldLeft = document.querySelector('#pass-1')
const txtFieldRight = document.querySelector('#pass-2')

genBtn.addEventListener('click', function() {
    let passLeft = getRandomPass()
    let passRight = getRandomPass()
    txtFieldLeft.textContent = passLeft
    txtFieldRight.textContent = passRight
})

function getRandomPass() {
    let pass = ''
    for (let i = 0; i < passLength; i++) {
        pass += characters[getRandomIndex(len-1)]
    }
    return pass
}

function getRandomIndex(max) {
    return Math.floor(Math.random() * (max + 1))
}