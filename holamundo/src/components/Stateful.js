import Reac, {Component} from 'react'
class Stareful extends Component {
    constructor(props){
        super(props);
        this.state = {
            hello: 'Hola mundo'
        }
    }
    render(){
        return(
            <h1>this.state.hello</h1>
        )
    }
}

export default Stareful