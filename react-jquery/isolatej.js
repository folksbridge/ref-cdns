$( document ).ready(function() {
    const moods = [
        { name: "Happy", "emoji": "😀" }, 
        { name: "Angry", "emoji": "😠" },
        { name: "Really Angry", "emoji": "😡" },
        { name: "Sad", "emoji": "🙁" },
        { name: "Really Sad", "emoji": "☹️" },
        { name: "Poop", "emoji": "💩" }
    ];
    
    // Cache the wrapper for further usage
    const $mood_container = $('#mood-container');
    
    const $mood_emoji = $('.Mood__emoji', $mood_container);
    const $mood_name = $('.Mood__name', $mood_container);
    const $mood_button = $('.Mood__button', $mood_container)
    
    $mood_button.on('click', (event) => {
        // Retrieve a random mood from moods array
        const mood = moods[Math.floor(Math.random()*moods.length)];
    
        // Update the DOM
        $mood_emoji.text(mood.emoji);
        $mood_name.text(mood.name);
    });
});