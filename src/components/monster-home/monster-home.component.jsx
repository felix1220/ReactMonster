import React from 'react';
import { Component } from 'react';
import { CardList } from '../../components/card-list/card-list.component';
import { SearchBox } from '../../components/search-box/search-box.component';
import { Link } from 'react-router-dom';

export class MonsterHome extends Component {
    constructor() {
        super();
        this.state = {
          monsters: [],
          searchField: ''
        }
      }
      componentDidMount() { //gets called when component is rendered
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ monsters: users}));
      }
      render() {
        const { monsters, searchField} = this.state;
        const filteredMonster = monsters.filter( monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
         return (
        <div className="App">
            <span>
                <SearchBox 
                    placeholder = 'search monsters'
                    handleChange={ e => this.setState({ searchField: e.target.value })}
                />
            </span>
            <span>
                <Link to='/detail'>Monster Detail</Link>
            </span>
         
          <CardList monsters={filteredMonster}>
          </CardList>
       
         
        </div>
        );
      }
}
