// class MyButton extends HTMLElement {

//     constructor () {
//         super() ;
//         this.content = this.getAttribute ('content')
//     }

//     connectedCallback() {
//         this.innerHTML = `
//         <div>
//             <a href='#'>${this.content}</a>
//         </div>
//         `
//     }

//     disconnectedCallBack() {

//     }

//     attributeChangeCallback(name,oldValue,newValue,) {
//         console.log(name,oldValue,newValue)
//     }

//     static get observedAttributes() {
//         return['content']
//     }

// }

// customElements.define('user-search', Search)

import "./SearchList"

 class Search extends HTMLElement {

    constructor() {
        super();
        this.data = [
            "Albania",
            "Bahamas",
            "Armenia",
            "Belarus",
            "Brazil",
            "Cambodia",
            "Czech Republic",
            "Germany",
        ];
        this.value = ''
    }

    onSearch(evt){
        this.value = evt.target.value;
        const data = this.data.filter((item) => item.includes(this.value))
        this.querySelector('.container').innerHTML = 
        <search-list data = '${JSON.stringify(data)}'></search-list>
    }

    connectedCallback() {
        this.render();
        this.addEventListener('input',this.onSearch)
    }

    disconnectedCallback() {
        this.removeEventListener('input',this.onSearch)
    }


    render() {
        this.innerHTML =`
            <input type='text' 
            placeholder='Type something...' 
            value=$'{this.value}' 
            />

            <div class='container'>
                <search-list data ='${JSON.stringify(this.data)}'
                </search-list>
            </div>
            `
    }

}

customElements.define('user-search', Search)