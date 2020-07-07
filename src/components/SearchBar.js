import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
    state = { text: "" };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.text);
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="ui form searchBar">
                <div className="field">
                    <label>Search Images</label>
                    <input
                        type="text"
                        value={this.state.text}
                        onChange={(e) => {
                            this.setState({ text: e.target.value });
                        }}
                    />
                </div>
            </form>
        );
    }
}

export default SearchBar;
