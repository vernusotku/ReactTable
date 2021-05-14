import {Component, createContext} from 'react'
import {Container, Table, InputGroup, Button} from 'react-bootstrap'
const TableContext = createContext();
export default class Table_new extends Component{
    constructor(props) {
        super(props)
        this.state = {
            rows: [],
            name: '',
            age: '',
            favorite: ''
        }
    }
        render()
        {
            return (
                <TableContext.Provider value={{

                    setName: (e) => {
                                this.setState({name: e.target.value})
                    },
                    setAge: (e) => {
                        this.setState({age:e.target.value})
                    },
                    setFavorite: (e) =>{
                        this.setState({favorite:e.target.value})
                    }
                    ,
                    addRow: () => {
                        let nextstep = this.state
                        nextstep.rows.push('placeholder')
                        this.setState(nextstep)
                    }
                }
                }
                >
                    <div>
                        <TableInput/>
                        <TableButton/>
                        <Table className='table'>
                            <thead>
                            <td>Name</td>
                            <td>Age</td>
                            <td>Favorite</td>
                            </thead>
                            <tbody>
                            {this.state.rows.map(row => {
                                return(


                                        <tr>
                                            <td>{this.state.name}</td>
                                            <td>{this.state.age}</td>
                                            <td>{this.state.favorite}</td>
                                        </tr>

                                )
                            }
                            )
                            }
                            </tbody>
                        </Table>
                    </div>
                </TableContext.Provider>
            )
        }
    }

class TableInput extends Component{
    render(){
        return (
            <TableContext.Consumer>
                {(ctx) => {
                    return (
                        <InputGroup>
                            <p className='p-2 m-lg-2'>Name</p>
                            <input type='text' onChange={ctx.setName}/>
                            <p>Age</p>
                            <input type='text'  onChange={ctx.setAge}/>
                            <p>Fovorite</p>
                            <input type='text' onChange={ctx.setFavorite}/>
                        </InputGroup>
                    )
                }}

            </TableContext.Consumer>
        )
    }
}

class TableButton extends  Component {
    render(){
        return (
            <TableContext.Consumer>
                {(ctx) => {return <Button className='text-center'  onClick={ctx.addRow} >Add </Button>}}
            </TableContext.Consumer>
        )
    }
}