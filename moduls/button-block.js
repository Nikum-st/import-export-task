import getRandomColor from "../src/utils";

export default class Button{
    #buttonBlock;
    #button;
    constructor(){
        this.#buttonBlock = document.createElement('div');
        this.#button = document.createElement('button')
    }
    createButton (){
        this.#button.classList.add('button');
        this.#button.textContent = 'Изменить цвет страницы';
        this.#buttonBlock.append(this.#button);
        document.body.append(this.#buttonBlock);
    }
    createEventClick(){
        this.#button.addEventListener('click', ()=>{
            const body = document.querySelector('body');
            body.style.background = getRandomColor();
        })
    }
}

