
import React, { Component } from 'react';

const MyContext = React.createContext();

export default class Provider extends Component {
  constructor(props) {
    super(props);
    this.contacts = [];
    this.state = {
      direction: 1,
      users: [],
      userCnt: [],
    };
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=10')
      .then(response => response.json())
      .then((data) => {
        this.contacts = data.results;
        this.setState({ users: data.results });
      });
  }


  filter =(event) => {
    console.log(event);
    const findMatchingUser = value => contact => contact.name.first.match(value) || contact.name.last.match(value);

    const filteredUsers = this.contacts.filter(findMatchingUser(event.target.value));
    this.setState({
      users: filteredUsers,
    });
  }


  sortAlphabeticByLastName = () => {
    const { users, direction } = this.state;
    const newContacts = users.map(item => item);

    newContacts.sort((a, b) => {
      if (a.name.last < b.name.last) return (-1 * direction);
      if (a.name.last > b.name.last) return direction;
      return 0;
    });
    this.setState({
      users: newContacts,
      direction: direction * -1,
    });
  }

  showMoreUserDetails =item => () => {
    const { userCnt } = this.state;
    const arr = userCnt.concat(item);
    this.setState({ userCnt: arr });
  }

  render() {
    const { children } = this.props;
    const { users, userCnt } = this.state;
    const { sortAlphabeticByLastName, filter, showMoreUserDetails } = this;
    return (
      <MyContext.Provider
        value={{
          users,
          userCnt,
          sortAlphabeticByLastName,
          filter,
          showMoreUserDetails,
        }}
      >
        {children}
      </MyContext.Provider>
    );
  }
}

export const MyConsumer = MyContext.Consumer;
