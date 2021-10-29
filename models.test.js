describe('Help Sending Story Data to the Backend API', function() {

    // declare testing vars
    let userParams;
    let testUser;
    let storyParams;
    let testStory;

    beforeEach(function() {
        // create test user and test story, 
        userParams = {
            'username': 'kmoney', 
            'name': 'karl',
            'createdAt': 'florida',
            'favorites': [],
            'ownstories': []
        };

        testUser = new User(userParams, '123');

        storyParams = {
            'storyId': 123,
            'title': 'Crime rate drops but Jax Still Murder Capital', 
            'author': 'News4Jax',
            'username': 'kmoney',
            'createdAt': 'florida'
        }
        testStory = new Story(storyParams);
    });

    it('adding a new story should return a story instance', function() {
        newStory = {
            'title': 'Jacksonville Still Murder Capital of FL',
            'author': 'News4Jax',
            'url': 'https://www.news4jax.com/news/local/2021/06/21/despite-overall-crime-rate-drop-in-florida-murders-and-assaults-went-up/'
        }
        console.log(testUser);
        console.log(storyParams);
        
        const sl = new StoryList([]);
        expect(sl.addStory(testUser, newStory)).toBeInstanceOf(Story);
    });
})