$( document ).ready(function() {
    const moods = [
        { name: "Happy", "emoji": "😀" }, 
        { name: "Angry", "emoji": "😠" },
        { name: "Really Angry", "emoji": "😡" },
        { name: "Sad", "emoji": "🙁" },
        { name: "Really Sad", "emoji": "☹️" },
        { name: "Poop", "emoji": "💩" }
      ];
      
      // Cache the containers for further usage
      const $mood_view_container = $('#mood-view-container');
      const $mood_button_container = $('#mood-button-container');
      
      const $mood_emoji = $('.Mood__emoji', $mood_view_container);
      const $mood_name = $('.Mood__name', $mood_view_container);
      
      const $mood_button = $('.Mood__button', $mood_button_container);
      const $mood_button_name = $('.Mood__button-name', $mood_button_container);
      
      $mood_button_container.on('click', (event) => {
        // Retrieve a random mood from moods array
        const mood = moods[Math.floor(Math.random()*moods.length)];
      
        // Update the DOM
        $mood_emoji.text(mood.emoji);
        $mood_name.text(mood.name);
        $mood_button_name.text(` - ${ mood.name }`);
      });
});