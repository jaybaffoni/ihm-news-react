const samplePosts = [
    {
        id:1,
        avatar:'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
        timeStamp:'2021-10-10T14:48:00',
        displayName:'Jay',
        edited:false,
        text:'No school tomorrow!'
    },
    {
        id:2,
        timeStamp:'2021-12-10T16:30:00',
        displayName:'Nancy',
        edited:true,
        text:'Band cancelled'
    },
    {
        id:3,
        avatar:'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
        timeStamp:'2022-01-12T10:00:00',
        displayName:'Br. Anthony',
        edited:false,
        text:'Basketball team won!'
    },
]

export const getPosts = () => {
    
    return samplePosts;
}

export const getPostDetails = (postId) => {
    
    return samplePosts[postId];
}