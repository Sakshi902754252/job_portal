
function handleSignInClick(event) {
  event.preventDefault();
  
  alert('Sign In clicked!');
}


document.addEventListener('DOMContentLoaded', function () {
  
  const signInButton = document.querySelector('.btn');

 
  signInButton.addEventListener('click', handleSignInClick);
});
document.addEventListener('DOMContentLoaded', function () {
  
  const softwareEngineerCategory = document.getElementById('software-engineer');

  // Attach an event listener to the "Software Engineer" category
  softwareEngineerCategory.addEventListener('click', handleSoftwareEngineerCategoryClick);
});


function handleSoftwareEngineerCategoryClick(event) {
  event.preventDefault();

 
  const softwareEngineerPostsContainer = document.getElementById('software-engineer-posts');
  const samplePosts = [
    { title: 'Software Engineer Job 1', description: 'Description for Job 1' },
    { title: 'Software Engineer Job 2', description: 'Description for Job 2' },
   
  ];
 
  softwareEngineerPostsContainer.innerHTML = '';

  samplePosts.forEach((post) => {
    const postElement = createPostElement(post);
    softwareEngineerPostsContainer.appendChild(postElement);
  });
}

function createPostElement(post) {
  const postElement = document.createElement('div');
  postElement.classList.add('post');

  const titleElement = document.createElement('h3');
  titleElement.textContent = post.title;

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = post.description;

  postElement.appendChild(titleElement);
  postElement.appendChild(descriptionElement);

  return postElement;
}





