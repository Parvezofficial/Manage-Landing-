//1. Add button event handler
document.getElementById('Submit Comment').addEventListener('click', function(){

    // 2. get user comment 
    const commentBox = document.getElementById('Comment-area');
    const userComment = commentBox.value;

    // 3. create comment paragraph
    const newComment = document.createElement('p');
    newComment.innerText = userComment;

    // 4. append the comment 
    const commentContainer = document.getElementById('comment-container');
    commentContainer.appendChild(newComment);
    
    // 5. clean the commentBox
    commentBox.value = '';

    
})