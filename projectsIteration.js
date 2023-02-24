document.addEventListener("keydown", searchProject)

function searchProject(event) {  
  if (event.keyCode === 191 || event.key === '/') {
    setTimeout(() => {
      document.querySelector('input').focus()
    }, 0)
  }
  if (event.keyCode === 27){
    document.querySelector('input').blur()
  }
}

function getProjectsGitHub() {
  const projects = fetch('https://api.github.com/users/filiperv7/repos')
  .then(response => response.json())
  .then(data => {
    return data
  });

  return projects
}
var projectFilter = ['site-portifolio', 'DevLinks', 'controleDeUsuarios', 'habits', 'FindEgg', 'video-platform-react']

function filterProjects() {
  var projects = getProjectsGitHub()
  projects.then(response => {

    response.forEach(project => {
      projectFilter.forEach(projectfiltered => {
        
        if (projectfiltered === project.name) {
          var cards = document.querySelector('#cards')
          
          createCard(cards, project)
        }
      })
    });
  })
}

function createCard(cards, project) {
  
  var card = document.createElement('div')
  card.classList.add(`${project.name}Card`)
  card.classList.add('card')
  
  cards.appendChild(card)

  createElementsName_Description(card, project.name, project.description)
  
  createElementProjectInfo(card, project.name)
}

// =================================================================

function createElementsName_Description(card, projectName, projectDescription) {
  var name = document.createElement('h3')
  name.textContent = projectName
  
  var description = document.createElement('p')
  description.className = 'description'
  description.textContent = projectDescription
  
  card.appendChild(name)
  card.appendChild(description)
} 

function createElementProjectInfo(card, projectName) {
  var projectInfo = document.createElement('div')
  projectInfo.className = 'infosProject'
  
  card.appendChild(projectInfo)

  createElementTag(projectInfo, projectName)
  
  createElementBranche(projectInfo, projectName)
}

function createElementTag(projectInfo, projectName) {
  var tagsDiv = document.createElement('div')
  tagsDiv.className = 'tags'
  var tagIcon = document.createElement('i')
  tagIcon.className = 'ph-tag-bold'
  
  var tagsCount = document.createElement('p')
  var tags = getTagsAmount(projectName)
  tags.then(response => {
    tagsCount.textContent = `${response.length} tags`
  })

  tagsDiv.appendChild(tagIcon)
  tagsDiv.appendChild(tagsCount)
  projectInfo.appendChild(tagsDiv)
}
function getTagsAmount(projectName) {
  const tags = fetch(`https://api.github.com/repos/filiperv7/${projectName}/tags`)
  .then(response => response.json())
  .then(data => {
    return data
  })

  return tags
}

function createElementBranche(projectInfo, projectName) {
  var branchesDiv = document.createElement('div')
  branchesDiv.className = 'branches'
  var brancheIcon = document.createElement('i')
  brancheIcon.className = 'ph-git-branch-bold'

  var branchesCount = document.createElement('p')
  var branches = getBranchesAmount(projectName)
  branches.then(response => {
    branchesCount.textContent = `${response.length} branches`
  })

  branchesDiv.appendChild(brancheIcon)
  branchesDiv.appendChild(branchesCount)
  projectInfo.appendChild(branchesDiv)
}
function getBranchesAmount(projectName) {
  const tags = fetch(`https://api.github.com/repos/filiperv7/${projectName}/branches`)
  .then(response => response.json())
  .then(data => {
    return data
  })

  return tags
}

filterProjects()
