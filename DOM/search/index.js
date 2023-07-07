import RenderPosts from "./RenderPost.js"

const posts = [
    {
        postName: 'POST 1',
        postImage: './images/post1.png',
        postLikes: 0
    }, 
    {
        postName: 'POST 2',
        postImage: './images/post2.png',
        postLikes: 10
    },
    {
        postName: 'POST 3',
        postImage: './images/post3.png',
        postLikes: 20
    },
    {
        postName: 'POST 4',
        postImage: './images/post2.png',
        postLikes: 12
    },
    {
        postName: 'POST 5',
        postImage: './images/post3.png',
        postLikes: 17
    }
]

const postContainer = document.querySelector('.post-container')
const search = document.querySelector('#search-input')

const filterNotFound = document.createElement('p')
filterNotFound.classList.add('error')
filterNotFound.textContent = 'Not found'

posts.sort((a, b) => b.postLikes - a.postLikes)

console.log(posts);

RenderPosts(posts, postContainer)

search.addEventListener('keyup', () => {
    const result = posts.filter(post => post.postName.toLowerCase().includes(search.value.toLowerCase().trim()))
    
    if(result.length === 0) {
        postContainer.textContent = ''
        postContainer.appendChild(filterNotFound)
        return
    }

    RenderPosts(result, postContainer)
})
