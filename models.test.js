describe('Help Sending Story Data to the Backend API', function() {

    // declare testing vars
    let userParams;
    let testUser;

    userParams = {
        'username': 'kmoney', 
        'name': 'karl',
        'createdAt': 'florida',
        'favorites': [],
        'ownstories': []
    };

    testUser = new User(userParams, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imttb25leSIsImlhdCI6MTYzNTQ3OTY2OX0.BwGKoNo2e9nESV9ZK295ENppDAr28so7TVBEM6fU_VE');

    it('adding a new story should return a story instance', async function() {
        newStory = {
            'title': 'Jacksonville Still Murder Capital of FL',
            'author': 'News4Jax',
            'url': 'https://www.news4jax.com/news/local/2021/06/21/despite-overall-crime-rate-drop-in-florida-murders-and-assaults-went-up/'
        }
        
        const sl = new StoryList([]);
        expect(await sl.addStory(testUser, newStory)).toBeInstanceOf(Story);
    });
})