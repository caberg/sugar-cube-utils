(function storyAboutBtn() {
    'use strict';
    // requires menuButton.js
    //
    // Adds "About" button to UI Bar -- great for things like credits
    // * doesn't show up unless passage named StoryAbout exists
    // * opens dialog with the same title and contents filled from StoryAbout passage
    // * change l10nStrings.uiBarAbout to change both button and dialog title

    /* globals Story, scUtils, l10nStrings */

    if (!Story.has('StoryAbout')) {
        return;
    }

    scUtils.createPassageButton(l10nStrings.uiBarAbout || 'About', '\\e809\\00a0', 'StoryAbout');
}());
