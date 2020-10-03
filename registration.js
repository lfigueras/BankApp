//QUERY DOM
let newAcc = document.getElementById('newAcc');
let btnAdd = document.getElementById('btn-add');


const Userinfo = function(name, money){
    this.name = name;
    this.money = money;
}
const userArray = [];
let i = 0;

btnAdd.addEventListener('click', addUser)
document.addEventListener('keypress', function (e){
                if (e.keyCode === 13 || e.which === 13){
                    addUser();
                    // console.log(e)
                    document.getElementById('newAcc').value = '';
                }
            });



function addUser(){
    let newAccValue = document.getElementById('newAcc').value;
    let letters = /^[A-Za-z]+$/;
    let clear = document.getElementById('newAcc').value ='';
    if(newAccValue.match(letters)){
                clear;
                userArray[i] = new Userinfo(newAccValue, 0);
                let listHandler = document.getElementById('user_list')
                let pic = document.createElement("img");
                let name = document.createElement('span');
                let money = document.createElement('span')
                pic.className = 'pic';
                listHandler.appendChild(pic);
                listHandler.appendChild(name);
                listHandler.appendChild(money);
                pic.setAttribute('src', 'imgProfile.png')
                name.innerHTML = newAccValue;
                money.innerHTML = userArray[i].money;
                i++

                pic.addEventListener('click', e=>{
                    document.getElementById('form').classList.add('hide');
                    document.getElementById('prof').classList.remove('hide');
                })
               return true;
            }else{
                alert('Please enter valid characters.')
                clear;
            }
}
