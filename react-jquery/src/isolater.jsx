class MoodRandomizer extends React.Component {
    constructor(props) {
        super(props)
        
        this.moods = [
            { name: "Happy", "emoji": "😀" }, 
            { name: "Angry", "emoji": "😠" },
            { name: "Really Angry", "emoji": "😡" },
            { name: "Sad", "emoji": "🙁" },
            { name: "Really Sad", "emoji": "☹️" },
            { name: "Poop", "emoji": "💩" }
        ];
        
        this.state = {
            mood: { 
                name: "[ Emoji Placeholder ]", 
                emoji: null 
            }
        }
    }
    
    handleButtonClick() {
        const mood = this.moods[Math.floor(Math.random()*this.moods.length)];
        this.setState({ mood });
    }
    
    render() {
        return (
            <div className="Mood">
                <div className="Mood__emoji">{ this.state.mood.emoji }</div>
                <div className="Mood__name">{ this.state.mood.name }</div>
                <button className="Mood__button" onClick={ this.handleButtonClick.bind(this) }>Random Mood</button>
            </div>
        )
    }
}

// Render our MoodRandomizer to our container / wrapper element
ReactDOM.render(<MoodRandomizer />, document.getElementById('mood-container'));