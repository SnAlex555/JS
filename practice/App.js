import { Component } from "./Component/Component.js";

export class App extends Component {
    constructor() {
        super();
        this.state = {
            count: 1,
            desc: "qwe",
        }
    }
        
    increaseCount(){
        this.setState((state) =>{
            return {
                ...state,
                count: this.state.count + 1,
            }
        })
    }
    
    decreaseCount(){
        this.setState((state) =>{
            return {
                ...state,
                count: this.state.count - 1,
            }
        })
    }    
    
    onClick(evt) {
        if(evt.target.closest('.plus')){
            this.increaseCount()
        }
        if(evt.target.closest('.minus')){
            this.decreaseCount()
        }
    }
    
    componentDidMount(){
        this.addEventListener("increase", this.increaseCount);
        this.addEventListener("decrease", this.decreaseCount);
    }    
    
    componentWillUnmount(){
        this.removeEventListener("increase", this.increaseCount);
        this.removeEventListener("decrease", this.decreaseCount);
    }
    
    static get observedAttributes () {
        return ['title-content']
    }
    
    render() {
        return `
        <button type="button" class="btn btn-info plus">+</button>
        <span>${this.state.count}</span>
        <button type="button" class="btn btn-info minus">-</button>
        `
    }
}

customElements.define("my-app", App)