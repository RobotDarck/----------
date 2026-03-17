let buttons = document.getElementById('buttons')
let but1 = document.getElementById('but1')
let but2 = document.getElementById('but2')
let but3 = document.getElementById('but3')
let result = document.getElementById('result')
let but4 = document.getElementById('res')
let main = document.getElementById('main')

let code = document.createElement('div')
let fone = document.createElement('div')
let lush = document.createElement('lu')
let butres = document.createElement('button')
let liner = document.createElement('div')
let rigtCollum = document.createElement('div')
let leftCollum = document.createElement('div')

liner.appendChild(rigtCollum)
liner.appendChild(leftCollum)
fone.appendChild(lush)

code.className = 'code'
fone.className = 'fone'
butres.textContent = 'проверить'
butres.className = 'res'
rigtCollum.className = 'rightcol'
leftCollum.className = 'leftcol'
liner.className = 'liner'

let activ = 0
let answer = 0
let section = 1
let pointAX = 0
let pointBX = 0
let pointAY = 0
let pointBY = 0
let errorType = 0
let but1res = false
let but2res = false
let error = false

let codes = ['IThub', 'Вебразработка', 'ДОД', 'ВебДизайнер', 'Разработчик игр', 'Программист', 'Студент', 'Колледж', 'error404', 'Кофейная машинка', 'Учёба', 'JS', 'Гусь', 'LXP', 'Пельмени', 'ИИ', 'Линукс', 'У меня лапки']
let fonetext = ['<html>', ['inp1', '<head>'], "<link rel='stylesheet' href='style.css'></link>", "</head>", ['inp2', '<body>'], "<div id=header>", "<div id='blocks'>", "<p id='text'> Колледж IThub </p>", '</div>', '</div>', "<div id='section'>","<div id='conteiner1'>","<button id='but1'>Ошибка 1</button>","<button id='but2'>Ошибка 2</button>","<button id='but3'>Ошибка 3</button>","</div>","<div id='conteiner2'>","<button id='but4'>Сдать результат</bbutton>","<img id='goose'>","</div>","</body>","</html>"]
let help = [['Почти у всех эллементов есть открывающая и закрывающая часть', 'Все элементы содержатся в скобках <>'], ['Почти у всех эллементов есть открывающая и закрывающая часть', 'Эта часть называется головой'], ['эта часть основная, но как она называется?', 'Почти у всех эллементов есть открывающая и закрывающая часть']]
let boxes = [['box1', 'Список студентов'],['box2', 'Список предподавателей'],['box3', 'Список предметов'],['box4', 'список ответов']]
let ansBox = [['box1', 'Студент'],['box2', 'Предподаватель'],['box3', 'Предмет'],['box4', 'Ответ']]
let generator1 = ['filler']

//заполнитель fone
for(i = 0; i < fonetext.length; i++){
    if (fonetext[i].length != 2){
        var lish = document.createElement('li')
        lish.innerText = fonetext[i]
        lush.appendChild(lish)
        lush.style.color = 'white'
        }
        else{
            var inp = document.createElement('input')
            lush.appendChild(inp)
            inp.className = (`${fonetext[i][0]}`)
}}

//генератор случайных пар к ошибке 2
for (let i = 0; i < 3; i++){
    var box = document.createElement('div')
    var ans = document.createElement('div')
    var chek = false
    var ran = Math.floor(Math.random() * 4)
    while (chek != true){
        ran = Math.floor(Math.random() * 4)
        for (let o = 0; o < generator1.length; o++){
            if (generator1[o] == ran){
                break
            }
            else if (generator1[o] != ran && o == (generator1.length - 1)){
                chek = true
                generator1.push(ran)
            }
        }
    }
    box.className = (`${boxes[ran][0]}`)
    box.className = (`right`)
    box.textContent = `${boxes[ran][1]}`
    ans.className = (`${ansBox[ran][0]}`)
    ans.className = (`left`)
    ans.textContent = `${ansBox[ran][1]}`
    rigtCollum.appendChild(box)
    leftCollum.appendChild(ans)
}

let left1 = leftCollum.getElementsByClassName('left')[0]
let left2 = leftCollum.getElementsByClassName('left')[1]
let left3 = leftCollum.getElementsByClassName('left')[2]
let right1 = rigtCollum.getElementsByClassName('right')[0]
let right2 = rigtCollum.getElementsByClassName('right')[1]
let right3 = rigtCollum.getElementsByClassName('right')[2]
let inp1 = lush.getElementsByClassName('inp1')[0]
let inp2 = lush.getElementsByClassName('inp2')[0]
massa = [[inp1, '<head>'], [inp2, '<body>']]

function remover(){
    but1.remove()
    but2.remove()
    but3.remove()
}

//сдача результата или возвращение назад
but4.addEventListener('click', function(){
    if (answer != 1){
        remover()
        var codeword = Math.floor(Math.random() * 18)
        buttons.appendChild(code)
        code.textContent = codes[codeword]
        buttons.style.justifyContent = 'center'
        but4.textContent = 'Сброс'
        answer = 1
        butres.remove()
    }
    else{
        code.remove()
        buttons.appendChild(but1)
        buttons.appendChild(but2)
        buttons.appendChild(but3)
        fone.remove()
        liner.remove()
        butres.remove()
        but4.textContent = 'Сдать результат'
        answer = 0
        buttons.style.width = '25%'
        buttons.style.justifyContent = 'space-between'
        buttons.style.height = '45px'
        buttons.style.paddingTop = '15%'
    }
})

//смена на ошибку 1
but1.addEventListener('click', function(){
    activ = 1
    if(but1res == false){
    remover()
    buttons.appendChild(fone)
    but4.textContent = 'Назад'
    answer = 1
    buttons.style.width = '100%'
    buttons.style.justifyContent = 'space-around'
    buttons.style.height = '80%'
    buttons.style.paddingTop = '0%'
    result.appendChild(butres)
}})

//смена на ошибку 2
but2.addEventListener('click', function(){
    activ = 2
    if(but2res == false){
    remover()
    buttons.appendChild(liner)
    but4.textContent = 'Назад'
    answer = 1
    buttons.style.width = '100%'
    buttons.style.justifyContent = 'space-around'
    buttons.style.height = '80%'
    buttons.style.paddingTop = '0%'
    result.appendChild(butres)
}})

//смена на ошибку 3
but3.addEventListener('click', function(){
    activ = 2
    if(but2res == false){
    remover()
    buttons.appendChild(liner)
    but4.textContent = 'Назад'
    answer = 1
    buttons.style.width = '100%'
    buttons.style.justifyContent = 'space-around'
    buttons.style.height = '80%'
    buttons.style.paddingTop = '0%'
    result.appendChild(butres)
}})

//проверка на валидность
butres.addEventListener('click', function(){
    if (activ == 1){
    error = false
    for(let i = 0; i <2; i++){
        if(massa[i][0].value != massa[i][1]){
            //massa[i][0].color = 'red'
            errorType = 1
            SendMessage(i)
            error = true
            break
        }
    }
    if(error == false){
        but1res = true
        but4.click()
    }}
    else if (activ == 2){
        
    }
})

//соедини блоки
left1.addEventListener('click', function(){
    if (section == 1){
        section = 'left'
        var cords = left1.getBoundingClientRect()
        pointBX = cords.x
        pointBY = cords.y
    }
    else {
        if(section != 'left'){
            var cords = left1.getBoundingClientRect()
            pointAX = cords.x
            pointAY = cords.y
            section = 1
        }
        else{
            section = 1
            pointAX = 0
            pointAY = 0
            errorType = 2
            SendMessage(1)
        }
    }
})

left2.addEventListener('click', function(){
    if (section == 1){
        section = 'left'
        var cords = left2.getBoundingClientRect()
        pointBX = cords.x
        pointBY = cords.y
    }
    else {
        if(section != 'left'){
            var cords = left2.getBoundingClientRect()
            pointAX = cords.x
            pointAY = cords.y
            section = 1
        }
        else{
            section = 1
            pointAX = 0
            pointAY = 0
            errorType = 2
            SendMessage(1)
        }
    }
})

left3.addEventListener('click', function(){
    if (section == 1){
        section = 'left'
        var cords = left3.getBoundingClientRect()
        pointBX = cords.x
        pointBY = cords.y
    }
    else {
        if(section != 'left'){
            var cords = left3.getBoundingClientRect()
            pointAX = cords.x
            pointAY = cords.y
            section = 1
        }
        else{
            section = 1
            pointAX = 0
            pointAY = 0
            errorType = 2
            SendMessage(1)
        }
    }
})


//Всплывающие окна
function SendMessage(i){
    if(errorType == 1){
        var helpbar = document.createElement('div')
        helpbar.className = 'helpbar'
        helpbar.innerText = help[i + 1][Math.floor(Math.random() * 1)]
        result.appendChild(helpbar)
        setTimeout(() => {  
            helpbar.remove();  
        }, 3000);
    }
    else if(errorType == 1){
        var helpbar = document.createElement('div')
        helpbar.className = 'helpbar'
        helpbar.innerText = "Неправильно, попробуйте ещё раз"
        result.appendChild(helpbar)
        setTimeout(() => {  
            helpbar.remove();  
        }, 3000);
    }
}