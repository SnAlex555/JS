import { Component } from "./core/Component" ;

export class Button extends Component {

    onClick() {
        this.dispatch(this.props.eventtype)
    };

    componentDidMount(){
        this.addEventListener('click',this.onClick);
    };

    componentWillUnmount(){
        this.addEventListener('click',this.onClick);
    };

    static get observedAttributes() {
        return ['eventtype' , 'content']
    };

    render() {
        return `
        <my-button eventtype="increase" content="+'></my-button>
        <span>${this.state.count}</span>
        <button type="button" class="btn btn-primary">${this.props.content} </button>
        `
    };

    }
customElements.define("my-app", Button)