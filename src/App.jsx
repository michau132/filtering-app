import React, { Component } from 'react';
import ProductTile from './contact.jsx';



let newContacts, contacts;
class App extends Component {
    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
        this.state = {
            searchQr: '',
            direction: 1,
            users: [],
            userCnt: []
        }
    }
    firstLetter(text) {
        return text.charAt(0).toUpperCase() + text.slice(1)
    }
    componentDidMount() {
        fetch('https://randomuser.me/api/?results=10')
            .then(response => response.json())
            .then(data => { contacts = data.results;
                contacts.map( contact => {
                    contact.name.first = this.firstLetter( contact.name.first )
                    contact.name.last = this.firstLetter( contact.name.last )
                })

                this.setState({ users: contacts }) });
    }
    filter =( event ) => {

        this.setState({
            searchQr: event.target.value,
            users: contacts.filter( item => {
                return item.name.first.match( event.target.value ) ||
                    item.name.last.match( event.target.value ) ||
                    item.email.match( event.target.value )
            })
        })
    }


    sortAlphabeticByLastName =() => {

        newContacts = this.state.users.map( item => item);

        newContacts.sort( ( a , b ) => {
            if( a.name.last < b.name.last ) return ( -1 * this.state.direction);
            if( a.name.last > b.name.last ) return this.state.direction;
            return 0;
        });
        this.setState({
            users: newContacts,
            direction: this.state.direction * -1
        })
    }
    handler(event) {
        const arr = this.state.userCnt.concat(event.props.item)
        this.setState({userCnt: arr})
        console.log(arr)
    }
    render() {
        return (
            <section className={'main-app'}>
                <header className={'main-app__header'}>
                    <h2>Contacts</h2>
                    <h3>More info</h3>
                </header>
                <div className="main-app_cnt">
                    <div className={'main-app__users-row'}>
                        <button onClick={ this.sortAlphabeticByLastName }>Sort by last name</button>
                        <input type="text" placeholder={'type a name'} onKeyUp={ this.filter }/>
                        { this.state.users.map(( contact , i ) =>
                            <ProductTile key={ i }
                                         item={ contact }
                                         handler = { this.handler }
                            />
                        ) }
                    </div>
                    <div className={'main-app__main-section'}>
                        {
                            this.state.userCnt.map(( item, i ) => {
                                return (
                                    <div key={ i }>
                                        <img src={ item.picture.large } alt=""/>
                                        <h2>{ item.name.last + ' ' + item.name.first }</h2>
                                        <p>Phone: {item.cell}</p>
                                        <p>Email: {item.email}</p>
                                        {Object.entries(item.location).map( adress => {
                                            console.log(adress)
                                            return (
                                                <span>{adress.join(': ')}  </span>
                                            )
                                        })}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }

}

export default App;
