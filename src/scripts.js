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
        imgUrl: 'https://randomuser.me/api/portraits/women/17.jpg',
        followers: 10,
        following: 50,
        description:  "ABC"
    },
    {
        name: 'João',
        imgUrl: 'https://images.generated.photos/z_w45-PQ28jY08f8O4BMykbnCVpwXsaoDvzoBgPYCg0/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzA4MzYxMDIuanBn.jpg',
        followers: 10,
        following: 50,
        description:  "ABC"  
    },
    {
        name: 'Bruna',
        imgUrl: 'https://images.generated.photos/fTMh3vQ9TgIyQx3jrloovat8213qROuZSWz4jj1yOkg/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzA5/NDAzNjMuanBn.jpg',
        followers: 10,
        following: 50,
        description:  "ABC"
    },
    { 
        name: 'Alana',
        imgUrl: 'https://i.imgur.com/SSWYAW4.jpg',
        followers: 10,
        following: 50,
        description:  "ABC"
    },
    {
        name: 'Maria',
        imgUrl: 'https://images.generated.photos/B7CJLWXHEhr73EmhhiWyTK-WT39VwobNNqwknL-vwUg/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzA5/NzY1NDcuanBn.jpg',
        followers: 10,
        following: 50,
        description:  "ABC"  
    },
    { 
        name: 'Lucas',
        imgUrl: 'https://uifaces.co/our-content/donated/FJkauyEa.jpg',
        followers: 10,
        following: 50,
        description:  "ABC"  
    },
    { 
        name: 'Julia',
        imgUrl: 'https://images.generated.photos/7s6pbOWWL7BXR5niwIILZ52rsEv5rupl5Jcq-eczjOI/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzAxODM3MzUuanBn.jpg',
        followers: 10,
        following: 50,
        description:  "ABC"  
    },
    { 
        name: 'Pedro',
        imgUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
        followers: 10,
        following: 50,
        description:  "ABC"  
    },
]

const profilesCall = 
[
    { 
        name: 'Julia',
        imgUrl: 'https://images.generated.photos/7s6pbOWWL7BXR5niwIILZ52rsEv5rupl5Jcq-eczjOI/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzAxODM3MzUuanBn.jpg',
        followers: 10,
        following: 50,
        description:  "ABC",
        border: 'border-green-400'  
    },
    { 
        name: 'Pedro',
        imgUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
        followers: 10,
        following: 50,
        description:  "ABC",
        border: 'border-transparent'  
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
    },
}

// INNER HTML
const DOM = 
{
    profileContainer: document.querySelector(".all"),
    profileContainerSearch: document.querySelector(".search"),
    profileContainerCall: document.querySelector(".call"),
    
    createProfile(profile)
    {
        const div = document.createElement('div');
        div.innerHTML = DOM.innerHTMLProfile(profile)

        DOM.profileContainer.appendChild(div)
    },
    innerHTMLProfile(profiles)
    {
        const profile =     `<div>
                                <div class="">
                                    <img class="avatar h-16 my-1" src="${profiles.imgUrl}">
                                </div>
                                <p class="my-1 flex justify-center">${profiles.name}</p>
                            </div>`

       return profile             
    },
    innerHTMLProfileCall(profiles)
    {
        const profile =     `<div>
                                <div class="">
                                <button class="focus:outline-none" onclick="modal.openBio()"</button>
                                    <img class="border-4 ${profiles.border} avatar h-16 my-1" src="${profiles.imgUrl}">
                                </div>
                                <p class="my-1 flex justify-center">${profiles.name}</p>
                             </div>`

       return profile             
    },
    createProfileSearch(profile)
    {
        const div = document.createElement('div');
        div.innerHTML = DOM.innerHTMLProfile(profile)

        DOM.profileContainerSearch.appendChild(div)
    },
    createProfileCall(profile)
    {
        const div = document.createElement('div');
        div.innerHTML = DOM.innerHTMLProfileCall(profile)

        DOM.profileContainerCall.appendChild(div)
    },
}

profiles.forEach(profile => DOM.createProfile(profile))

for(let i = 0; i < 4; i++)
{
    DOM.createProfileSearch(profiles[i])
}

profilesCall.forEach(profile => DOM.createProfileCall(profile))

