import React from 'react'
import axios from 'axios'
import UsersList from './components/Users.js';
import Menu from './components/Menu.js';
import Footer from './components/Footer.js';



class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'users': []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/Users/')
        .then(response => {
            const users = response.data
            this.setState( {
                'users': users
            })
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div >
                <Menu menus = {this.state.menus}/>
                <UsersList users = {this.state.users}/>
                <Footer footers = {this.state.footers}/>
            </div>
        )
    }
}

export default App;
