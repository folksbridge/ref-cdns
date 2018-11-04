class App extends React.Component {
  constructor(props) {
    super(props);
    this.moods = [{
      name: "Happy",
      "emoji": "😀"
    }, {
      name: "Angry",
      "emoji": "😠"
    }, {
      name: "Really Angry",
      "emoji": "😡"
    }, {
      name: "Sad",
      "emoji": "🙁"
    }, {
      name: "Really Sad",
      "emoji": "☹️"
    }, {
      name: "Poop",
      "emoji": "💩"
    }];
    this.state = {
      mood: {
        name: "[ Emoji Placeholder ]",
        emoji: null
      }
    };
  }

  handleButtonClick() {
    const mood = this.moods[Math.floor(Math.random() * this.moods.length)];
    this.setState({
      mood
    });
  }

  render() {
    return React.createElement("div", {
      className: "App"
    }, React.createElement(MoodView, {
      mood: this.state.mood
    }), React.createElement(MoodButton, {
      mood: this.state.mood,
      onButtonClick: this.handleButtonClick.bind(this)
    }));
  }

}

function MoodView({
  mood
}) {
  return React.createElement("div", {
    className: "Mood"
  }, React.createElement("div", {
    className: "Mood__emoji"
  }, mood.emoji), React.createElement("div", {
    className: "Mood__name"
  }, mood.name));
}

function MoodButton({
  onButtonClick,
  mood
}) {
  return React.createElement("div", {
    className: "MoodButton"
  }, React.createElement("button", {
    className: "Mood__button",
    onClick: onButtonClick
  }, "Random Mood - ", mood.name));
} // Mount the App container to a root element


ReactDOM.render(React.createElement(App, null), document.getElementById('App'));