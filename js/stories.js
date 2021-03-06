"use strict";

// This is the global list of the stories, an instance of StoryList
let storyList;

/** Get and show stories when site first loads. */

async function getAndShowStoriesOnStart() {
  storyList = await StoryList.getStories();
  $storiesLoadingMsg.remove();

  putStoriesOnPage();
}

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */

function generateStoryMarkup(story) {
  // console.debug("generateStoryMarkup", story);

  const hostName = story.getHostName();
  return $(`
      <li id="${story.storyId}">
        <span><i class="far fa-star"></i></span>
        <a href="${story.url}" target="a_blank" class="story-link">
          ${story.title}
        </a>
        <small class="story-hostname">(${hostName})</small>
        <small class="story-author">by ${story.author}</small>
        <small class="story-user">posted by ${story.username}</small>
      </li>
    `);
}

/** Gets list of stories from server, generates their HTML, and puts on page. */

function putStoriesOnPage() {
  console.debug("putStoriesOnPage");

  $allStoriesList.empty();

  // loop through all of our stories and generate HTML for them
  for (let story of storyList.stories) {
    const $story = generateStoryMarkup(story);
    $allStoriesList.append($story);
  }

  $allStoriesList.show();
}

/**
 * Handle the submission of a story to the API
 */

async function submitUserStory(evt) {
  console.debug('submitUserStory');
  evt.preventDefault();

  // * make a request to API submitting the story
  // * add story to user.ownStories
  // * hide the form
  // * update the page again - getAndShowStoriesOnStart

  const response = await StoryList.addStory(currentUser, 
    {
      title: $('#story-title').val(),
      author: $('#story-author').val(),
      url: $('#story-url').val()
    });
    currentUser.ownStories.push(response)
    $storyForm.hide();
    getAndShowStoriesOnStart();
}

$('#submit-story-btn').on('click', submitUserStory);