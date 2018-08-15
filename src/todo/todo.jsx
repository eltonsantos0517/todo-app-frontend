import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {


    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }

        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleAdd() {

    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm description={this.state.description}
                    handleAdd={this.handleAdd} handleChange={this.handleChange} />
                <TodoList />
            </div>
        )
    }
}