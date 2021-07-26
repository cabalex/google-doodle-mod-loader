# google-doodle-mod-loader
__*NEVER* PASTE ANYTHING IN THE DEVELOPER CONSOLE IF YOU DON'T KNOW WHAT IT DOES!__ This mod loader only reads the selected files and modifies in-game elements, but it never hurts to double check what you're running before running it. The unminified JavaScript is located [here](https://github.com/cabalex/google-doodle-mod-loader/blob/main/google-doodle-mod-loader.js).

A mod loader for Google's 2021 Doodle Champion Island Games. Currently only supports replacing the Artistic Swimming minigame with custom Friday Night Funkin' beatmaps/audio.

## Artistic Swimming song replacements
Make sure you have a valid vanilla FNF song and its MP3/OGG on hand. Note that songs with separated instrumental and vocal tracks aren't supported, so you'll need to condense the two tracks into one before modding.

Go to [here](https://raw.githubusercontent.com/cabalex/google-doodle-mod-loader/main/minified.js), select everything (CTRL + A) and copy. Then, go to google.com, or [the Google Doodle webpage if the event is over](https://www.google.com/doodles/doodle-champion-island-games-begin). *Alternatively, you can play in full screen [here](https://www.google.com/logos/2020/kitsune/rc2/kitsune20.html?hl=en).*

Then, go into the developer console by hitting **CTRL + SHIFT + J**, and paste the code you copied into the terminal. Then, hit enter, select your beatmap and song, and you should be all good to go!

Once the program finishes running, your song should be in the first Artistic Swimming minigame (the one you can teleport to). Enter the minigame and play your song!

![image](https://user-images.githubusercontent.com/31020729/126930529-3fa9b98d-722a-40a5-94e2-1d9e15a30a0a.png)


## Notes
* If you want to go back to playing the game vanilla, just refresh your webpage.
* Currently, only replacing the first Artistic Swimming minigame is supported. More features [maybe] coming soon!
* All notes for the second player are ignored in the conversion, which may result in boring segments where not much is happening.
* The mod loader disables score uploading to Google's servers, for obvious reasons. Any new scores won't be uploaded unless you refresh your page. This does not affect your local high scores.

The 2021 Doodle Champion Island Games is owned by Google. [See who developed it here](https://www.google.com/doodles/doodle-champion-island-games-begin).
