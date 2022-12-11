import {Component, createContext} from 'react'
import {Table, InputGroup, Button} from 'react-bootstrap'
const TableContext = createContext();




class TableInput extends Component{
    render(){
        return (
            <TableContext.Consumer>
                {(ctx) => {
                    return (
                        <InputGroup className="d-flex justify-content-center flex-nowrap">
                            <p className='p-2 m-lg-2'>Name</p>
                            <input type='text' onChange={ctx.setName}/>
                            <p className='p-2 m-lg-2'>Age</p>
                            <input type='text'  onChange={ctx.setAge}/>
                            <p className='p-2 m-lg-2'>Fovorite</p>
                            <input type='text' onChange={ctx.setFavorite}/>
                        </InputGroup>
                    )
                }}

            </TableContext.Consumer>
        )
    }
}
export default class Table_new extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            favorite: '',
            age: '',
            rows: []
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
                    },
                    addRow: () => {
                        let nextstep = this.state
                        nextstep.rows.push(this.state)
                        this.setState(nextstep)
                    },
                    delRow: () => {
                        console.log("Я тип удалил")
                    }                
                }
                }
                >
                    <div>
                        <TableInput/>
                        <AddButton/>
                        <Table className='table'>
                            <thead>                        
                                <td>Name</td>
                                <td>Age</td>
                                <td>Favorite</td>
                            </thead>
                            <tbody>
                            {
                                this.state.rows.map(row => {
                                        return( <tr>
                                            <td>{this.state.name}</td>
                                            <td>{this.state.age}</td>
                                            <td>{this.state.favorite}</td>
                                            <DelButton />
                                        </tr> )  
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
class AddButton extends  Component {
        render(){
            return (
                <TableContext.Consumer>
                    {(ctx) => {return <Button className='text-center'  onClick={ctx.addRow}>Add</Button>}}
                </TableContext.Consumer>
            )
        }
}
class DelButton extends Component{
    render(){
        return (
            <TableContext.Consumer>
                {(ctx) => {return <Button className='text-center'  onClick={ctx.delRow}>Del</Button>}}
            </TableContext.Consumer>
        )
    }
}