'use strict';

const elem = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: !true };
    }

    render() {
        if (this.state.liked) {
            return (
                <button
                    type="button"
                    onClick={() => this.setState({ liked: !true })}
                >
                    Liked
                </button>
            );
        }

        // Display a "Like" <button> using .jsx
        return (
            <button
                type="button"
                onClick={() => this.setState({ liked: true })}
            >
                Like
            </button>
        );
        
        // Display a "Like" <button> without using .jsx
        //     return elem(
        //         'button',
        //         { onClick: () => this.setState({ liked: true }) },
        //         'Like'
        //     );
    }
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(elem(LikeButton));
