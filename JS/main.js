// API - GET - POST
let apiUrl='https://project-1-api.herokuapp.com/';
// GET - POST
let apiComments='comments';
// PUT
let apiLikes='comments/:commentId/likes';
// DELETE
let apiDelete="comments/";
// API KEY
let apiKey = '?api_key=<5db77cc0-ab18-429a-b9e7-b46ecd10c2dc>';

// DYNAMIC TIME STAMP
let time = (now) => {
    if ((Date.now()-now) < 1000){
        return 'just now'
    } else if ((Date.now()-now) === 1000){
        return '1 second ago'
    } else if ((Date.now()-now) < 60000) {
        return 'seconds ago';
    } else if ((Date.now()-now) === 60000){
        return 'a minute ago';
    } else if ((Date.now()-now) < 900000){
        return 'minutes ago';
    } else if ((Date.now()-now) < 1800000){
        return '15 minutes ago';
    } else if ((Date.now()-now) < 2700000){
        return '30 minutes ago';
    } else if ((Date.now()-now) < 3600000){
        return '45 minutes ago';
    } else if ((Date.now()-now) < 7200000){
        return '1 hour ago';
    } else if ((Date.now()-now) < 10800000){
        return '2 hours ago';
    } else if ((Date.now()-now) < 86400000){
        return 'hours ago';
    } else if ((Date.now()-now) < (1.728e+8)){
        return '1 day ago';
    } else if ((Date.now()-now) < (2.592e+8)){
        return '2 day ago';
    } else if ((Date.now()-now) < (6.048e+8)){
        return 'days ago';
    } else if ((Date.now()-now) < (1.21e+9)){
        return '1 week ago';
    } else if ((Date.now()-now) < (1.814e+9)){
        return '2 weeks ago';
    } else if ((Date.now()-now) < (2.628e+9)){
        return 'weeks ago';
    } else if ((Date.now()-now) < (5.256e+9)){
        return '1 month ago';
    } else if ((Date.now()-now) < (7.884e+9)){
        return '2 months ago';
    } else if ((Date.now()-now) < (3.154e+10)){
        return 'months ago';
    } else if ((Date.now()-now) < (6.307e+10)){
        return '1 year ago';
    } else if ((Date.now()-now) < (9.461e+10)){
        return '2 years ago';
    } else {
        return 'years ago';
    };
};

// GET - WEB API
let commentSection = document.querySelector('.comment__section');

const conversation = () => {
    axios.get(apiUrl + apiComments + apiKey)
    .then(response => {
        console.log(response)
        commentDefault.innerText=" ",
        response.data.forEach(array => {
        displayComment(array);
        console.log(array)
        });
    })
    .catch(err =>{
        console.log(err)
    })
}
conversation();

// DIV FOR COMMENTS
let commentDefault = document.createElement('div');
commentDefault.classList.add('comment__default');
commentSection.appendChild(commentDefault);

let name = document.getElementById('fullname');
let comment = document.getElementById('comment');
let button = document.querySelector('#button');
let form = document.querySelector('.comment__form')

// FUNCTION TO DISPLAY COMMENTS
let displayComment = (array) => {
    let commentContainer = document.createElement('div');
    commentContainer.classList.add('comment__container');
    commentDefault.prepend(commentContainer);

    let commentImg = document.createElement('div');
    commentImg.classList.add('comment__img');
    commentContainer.appendChild(commentImg);

    let commentCommenter = document.createElement('img');
    commentCommenter.classList.add('comment__commenter');
    commentCommenter.setAttribute('alt','User Image')
    commentCommenter.src = 'assets/Images/B&W Profile 12.png';
    commentImg.appendChild(commentCommenter);

    let commentDelete = document.createElement('button');
    commentDelete.classList.add('comment__delete');
    commentDelete.setAttribute('id','delete-button')
    
    commentDelete.innerText='x ';
    commentImg.appendChild(commentDelete);

    let commentSpan = document.createElement('span');
    commentSpan.classList.add('comment__span');
    commentSpan.innerText='delete';
    commentDelete.appendChild(commentSpan);

    let commentArea= document.createElement('div');
    commentArea.classList.add('comment__area');
    commentContainer.appendChild(commentArea);

    let commentBoxing=document.createElement('div');
    commentBoxing.classList.add('comment__boxing');
    commentArea.appendChild(commentBoxing);

    let commentName = document.createElement('p');
    commentName.classList.add('comment__area-name');
    let cm = document.createTextNode(array.name);
    commentName.appendChild(cm);
    commentBoxing.appendChild(commentName);

    let commentDate = document.createElement('p');
    commentDate.classList.add('comment__area-date');
    let cd = document.createTextNode(time(array.timestamp));
    commentDate.appendChild(cd);
    commentBoxing.appendChild(commentDate);

    let commentParagraph = document.createElement('p');
    commentParagraph.classList.add('comment__area-paragraph');
    let cp = document.createTextNode(array.comment);
    commentParagraph.appendChild(cp);
    commentArea.appendChild(commentParagraph);
    
    commentDelete.addEventListener('click', (event) => {
        event.preventDefault();
        axios.delete(apiUrl + apiDelete + array.id + apiKey)
        .then(() => {
            conversation()
        })
    })
}

// BUTTON - NEW COMMENTS
button.addEventListener ('click', (event) => {
    event.preventDefault();
    if (name.value === "" || comment.value === "") {
        return alert('Please input in all fields')
    }
    let newComment = {
        name: name.value,
        comment: comment.value,
    }
    axios.post(apiUrl + apiComments + apiKey, newComment)
    .then(() => {
        conversation()
    })
    .catch((err) => {
        console.log(err)
    })
    form.reset();
});