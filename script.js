fetch('https://api.github.com/users/filiperv7')
    .then(response => response.json())
    .then(gitHubData => {

        const profile = document.querySelector('#nickName')
        const bio = document.querySelector('.textBio')

        console.log(gitHubData)
        bio.textContent = gitHubData.bio
        profile.textContent += gitHubData.login
        
    });


fetch('https://api.github.com/users/filiperv7/repos')
    .then(response => response.json())
    .then(repos => {
        console.log(repos)
    });