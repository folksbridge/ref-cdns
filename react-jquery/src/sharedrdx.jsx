const { createStore, applyMiddleware } = Redux;
const { Provider } = ReactRedux;
const { connect } = ReactRedux;
const { combineReducers } = Redux;

// Actions
const SET_MOOD = "SET_MOOD";

function setMood() {
    const moods = [
        { name: "Happy", "emoji": "😀" }, 
        { name: "Angry", "emoji": "😠" },
        { name: "Really Angry", "emoji": "😡" },
        { name: "Sad", "emoji": "🙁" },
        { name: "Really Sad", "emoji": "☹️" },
        { name: "Poop", "emoji": "💩" }
    ];
    
    const mood = moods[Math.floor(Math.random()*moods.length)];

    return { 
        type: SET_MOOD, 
        mood 
    };
}

// Reducer
const initialState = { 
    name: [ "Emoji Placeholder" ], 
    emoji: null
};

function mood(state = initialState, action) {
  switch(action.type) {
    case SET_MOOD:
      return action.mood;
      
    default:
      return state;      
  }
}

// Store
const App = combineReducers({ mood });
const store = createStore(App);

// Our Pure Components
function MoodView({ mood }) {
    return (
        <div className="Mood">
            <div className="Mood__emoji">{ mood.emoji }</div>
            <div className="Mood__name">{ mood.name }</div>
        </div>
    )
};
                    
function MoodButton({ onButtonClick, mood }) {
    return (
        <div className="MoodButton">
            <button className="Mood__button" onClick={ onButtonClick }>
                Random Mood - { mood.name }
            </button>
        </div>
    )
};

// Connect our state and actions to our components
function mapStateToProps(state, ownProps) {
    return {
        mood: state.mood
    }
} 

function mapDispatchToProps(dispatch) {
    return {
        onButtonClick: () => dispatch(setMood())
    }
}

const MoodViewConnected = connect(mapStateToProps, mapDispatchToProps)(MoodView)
const MoodButtonConnected = connect(mapStateToProps, mapDispatchToProps)(MoodButton)

// Render each connected component separatly. 
// Both components share the same state.
ReactDOM.render(
    <Provider store={ store }>
        <MoodViewConnected />
    </Provider>,
    document.getElementById('mood-view')
);

ReactDOM.render(
    <Provider store={ store }>
        <MoodButtonConnected />
    </Provider>,
    document.getElementById('mood-button')
);