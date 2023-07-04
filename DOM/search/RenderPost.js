const RenderPosts = (posts, postContainer) => {
    postContainer.textContent = ""
    posts.forEach(post => {
        const postSection = document.createElement('section')
        postSection.classList.add('post')

        const postImage = document.createElement('img')
        postImage.classList.add('post-image')
        postImage.src = post.postImage
        postImage.alt = post.postName.toLowerCase()

        const likesContainer = document.createElement('div')
        likesContainer.classList.add('post-likes')

        const likesCounter = document.createElement('p')
        likesCounter.classList.add('post-likes-display')
        likesCounter.textContent = post.postLikes

        const likesButton = document.createElement('button')
        likesButton.classList.add('post-likes-button')
        likesButton.textContent = 'LIKE'

        likesButton.addEventListener('click', () => {
            post.postLikes++
            posts.sort((a, b) => b.postLikes - a.postLikes)
            RenderPosts(posts, postContainer)
        })

        likesContainer.append(likesCounter, likesButton)

        const postName = document.createElement('p')
        postName.classList.add('post-name')
        postName.textContent = post.postName

        postSection.append(postImage, likesContainer, postName)
        postContainer.appendChild(postSection)
    })
}

export default RenderPosts