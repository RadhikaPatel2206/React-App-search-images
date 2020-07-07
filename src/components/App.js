import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import Unsplash from "../api/Unsplash";

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (text) => {
        const response = await Unsplash.get("/search/photos", {
            params: {
                query: text,
            },
        });

        this.setState({ images: response.data.results });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;
