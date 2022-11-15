export default class SearchList extends HTMLElement {
    constructor() {
        super()

        this.date - this.getAttribute('data');  
    }

    connectedCallback(){
        console.log(this.data)
        this.render()
    }

    render() {
        this.innerHTML = `
        <ul>
            $this.data
            .map((item) => <li> ${item} </li>
        </ul>
        `
    }
}

customElements.define('search-list',SearchList)