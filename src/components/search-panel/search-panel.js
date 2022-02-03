import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameTurn: '',
        }
    }

    onSearch = (e) => {
        const nameTurn = e.target.value;
        this.setState({nameTurn});
        this.props.onSearch(nameTurn);
    }

    render() {
        return (
            <input type="text"
                className="search-input form-control"
                placeholder="Employee's name"
                value={this.state.nameTurn}
                onChange={this.onSearch}/>
        )
    }
}

export default SearchPanel;