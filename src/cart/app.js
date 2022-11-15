class App extends HTMLElement {
    constructor () {
        super()
        this.data = [
            {
        id:1,
        title:"Product #1" ,
        preview: "",
        description: "Android, экран 6.67 OLED (1080x2400), Qualcomm Snapdragon 778G+, ОЗУ 8 ГБ, флэш-память 256 ГБ, камера 54 Мп, аккумулятор 4800 мАч, 2 SIM " , 
        price: 1500,00 р,      
    },

    {
        id:1,
        title:"Product #1" ,
        preview: "",
        description: "Android, экран 6.67 OLED (1080x2400), Qualcomm Snapdragon 778G+, ОЗУ 8 ГБ, флэш-память 256 ГБ, камера 54 Мп, аккумулятор 4800 мАч, 2 SIM " , 
        price: 1500,00 р,         
    },
    
    {
        id:1,
        title:"Product #1" ,
        preview: "",
        description: "Android, экран 6.67 OLED (1080x2400), Qualcomm Snapdragon 778G+, ОЗУ 8 ГБ, флэш-память 256 ГБ, камера 54 Мп, аккумулятор 4800 мАч, 2 SIM " , 
        price: 1500,00 р,      
    },
        ]
    }



    connectedCallback() {

    }

    render() {
    this.innerHTML = 'It works!!!'
    }
}

customElements.define('It app', App)