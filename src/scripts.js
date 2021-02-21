// DATABASE
const profiles = 
[
    { 
        name: 'Bianca',
        imgUrl: 'https://i.imgur.com/kJCWUAo.jpg',
        followers: 10,
        following: 50,
        description:  "ABC"
    },
    { 
        name: 'Ana',
        imgUrl: 'https://i.imgur.com/kJCWUAo.jpg',
        followers: 10,
        following: 50,
        description:  "ABC"
    },
    {
        name: 'Bruna',
        imgUrl: 'https://i.imgur.com/kJCWUAo.jpg',
        followers: 10,
        following: 50,
        description:  "ABC"
    },
    { 
        name: 'Alana',
        imgUrl: 'https://i.imgur.com/kJCWUAo.jpg',
        followers: 10,
        following: 50,
        description:  "ABC"
    },
    {
        name: 'Maria',
        imgUrl: 'https://i.imgur.com/kJCWUAo.jpg',
        followers: 10,
        following: 50,
        description:  "ABC"  
    },
    { 
        name: 'Julia',
        imgUrl: 'https://i.imgur.com/kJCWUAo.jpg',
        followers: 10,
        following: 50,
        description:  "ABC"  
    },
]

// OPEN MODAL
let modal = 
{
    openModalOverlay()
    {
        document.querySelector('.modal-overlay').classList.toggle('invisible')
    },
    openPlus()
    {
        modal.openModalOverlay()
        document.querySelector('.modal-plus').classList.toggle('hidden')
        document.querySelector('.btn-plus').classList.toggle('z-50')
    },
    openHand()
    {
        modal.openModalOverlay()
        document.querySelector('.modal-hand').classList.toggle('hidden')
        
    },
    openBio()
    {
        modal.openModalOverlay()
        document.querySelector('.modal-bio').classList.toggle('hidden')
        document.querySelector('.modal-bio').classList.toggle('flex')
    },
}

// INNER HTML
const DOM = 
{
    profileContainer: document.querySelector(".modal-p-search"),

    createProfile(profile)
    {
        const div = document.createElement('div');
        div.innerHTML = DOM.innerHTMLProfile(profile)

        DOM.profileContainer.appendChild(div)
    },
    innerHTMLProfile(profiles)
    {
        const profile =  
                    `<div class="">
                        <div class="">
                            <img class="h-16 my-1 mx-2" src="${profiles.imgUrl}">
                            <img class="" src="">
                        </div>
                            <p>${profiles.name}</p>
                     </div>`

       return profile             
    },
}

profiles.forEach(profile => DOM.createProfile(profile))