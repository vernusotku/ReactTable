import {Component} from 'react'


export default class Table extends Component{
    render() {
        return(
            <div>
            <td>{this.props.name}</td>
            <td>{this.props.age}</td>
            <td>{this.props.favorite}</td>
            </div>
        )
    }
}