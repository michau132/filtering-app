import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import styles from './App.css';
import UserInfo from '../UserInfo/UserInfo';


let newContacts; let
  contacts;
class App extends Component {
  constructor(props) {
    super(props);
    this.contacts = [];
    this.state = {
      searchQr: '',
      direction: 1,
      users: [],
      userCnt: [],
    };
  }

  firstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=10')
      .then(response => response.json())
      .then((data) => {
        contacts = data.results;
        contacts.map((contact) => {
          contact.name.first = this.firstLetter(contact.name.first);
          contact.name.last = this.firstLetter(contact.name.last);
        });

        this.setState({ users: contacts });
      });
  }

    filter =(event) => {
      this.setState({
        searchQr: event.target.value,
        users: contacts.filter(item => item.name.first.match(event.target.value)
                    || item.name.last.match(event.target.value)
                    || item.email.match(event.target.value)),
      });
    }


    sortAlphabeticByLastName = () => {
      newContacts = this.state.users.map(item => item);

      newContacts.sort((a, b) => {
        if (a.name.last < b.name.last) return (-1 * this.state.direction);
        if (a.name.last > b.name.last) return this.state.direction;
        return 0;
      });
      this.setState({
        users: newContacts,
        direction: this.state.direction * -1,
      });
    }

    handler =(event) => {
      const arr = this.state.userCnt.concat(event.props.item);
      this.setState({ userCnt: arr });
    }

    render() {
      return (
        <section className={styles.app}>
          <Sidebar
            users={this.state.users}
            sortAlphabeticByLastName={this.sortAlphabeticByLastName}
            filterHandle={this.filter}
            handler={this.handler}
          />
          <UserInfo
            userCnt={this.state.userCnt}
          />
        </section>
      );
    }
}

export default App;
