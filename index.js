function getUserGitHub() {
    const userGitHub = fetch('https://api.github.com/users/filiperv7')
    .then(response => response.json())
    .then(data => {
        return data
    });
    
    return userGitHub
}

function writeUserData() {
    const user = getUserGitHub()
    user.then(res => {
        const profile = document.querySelector('#nickName')
        const bio = document.querySelector('.textBio')

        profile.textContent = `@${res.login}`
        bio.textContent = res.bio
    })  
}

writeUserData()