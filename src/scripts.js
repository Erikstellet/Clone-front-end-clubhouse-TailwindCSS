//===============================  DATABASE  ===============================
const profiles = 
[
    { 
        id: '1',
        name: 'Bianca',
        imgUrl: 'https://images.unsplash.com/photo-1546539782-6fc531453083?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
        followers: 10,
        following: 50,
        description:  "ABC",
        andress: "@",
        status: "moderator",
        border: 'border-transparent',
    },
    { 
        id: '2',
        name: 'Ana',
        imgUrl: 'https://randomuser.me/api/portraits/women/17.jpg',
        followers: 10,
        following: 50,
        description:  "ABC",
        andress: "@",
        status: "moderator",
        border: 'border-transparent',
    },
    {
        id: '3',
        name: 'João',
        imgUrl: 'https://images.generated.photos/z_w45-PQ28jY08f8O4BMykbnCVpwXsaoDvzoBgPYCg0/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzA4MzYxMDIuanBn.jpg',
        followers: 10,
        following: 50,
        description:  "ABC",
        andress: "@",
        status: "moderator",
        border: 'border-transparent',
    },
    {
        id: '4',
        name: 'Bruna',
        imgUrl: 'https://images.generated.photos/fTMh3vQ9TgIyQx3jrloovat8213qROuZSWz4jj1yOkg/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzA5/NDAzNjMuanBn.jpg',
        followers: 10,
        following: 50,
        description:  "ABC",
        andress: "@",
        status: "moderator",
        border: 'border-transparent',
    },
    { 
        id: '4',
        name: 'Alana',
        imgUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
        followers: 10,
        following: 50,
        description:  "ABC",
        andress: "@",
        status: "moderator",
        border: 'border-transparent',
    },
    {
        id: '5',
        name: 'Maria',
        imgUrl: 'https://images.generated.photos/B7CJLWXHEhr73EmhhiWyTK-WT39VwobNNqwknL-vwUg/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzA5/NzY1NDcuanBn.jpg',
        followers: 10,
        following: 50,
        description:  "ABC",
        andress: "@",
        status: "moderator",
        border: 'border-transparent',
    },
    { 
        id: '6',
        name: 'Lucas',
        imgUrl: 'https://uifaces.co/our-content/donated/FJkauyEa.jpg',
        followers: 10,
        following: 50,
        description:  "ABC",
        andress: "@",
        status: "moderator",
        border: 'border-transparent',
    },
    {
        id: '7', 
        name: 'Julia',
        imgUrl: 'https://images.generated.photos/7s6pbOWWL7BXR5niwIILZ52rsEv5rupl5Jcq-eczjOI/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzAxODM3MzUuanBn.jpg',
        followers: 10,
        following: 50,
        description:  "ABC",
        andress: "@",
        status: "moderator",
        border: 'border-green-400',
    },
    {
        id: '8', 
        name: 'Pedro',
        imgUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
        followers: 10,
        following: 50,
        description:  "ABC",
        andress: "@",
        status: "moderator",
        border: 'border-transparent',
    },
]

const profilesCall = 
[
    {
        id: '7', 
        name: 'Julia',
        imgUrl: 'https://images.generated.photos/7s6pbOWWL7BXR5niwIILZ52rsEv5rupl5Jcq-eczjOI/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzAxODM3MzUuanBn.jpg',
        followers: 10,
        following: 50,
        description:  "ABC",
        andress: "@",
        status: "moderator",
        border: 'border-green-400',  
    },
    {
        id: '8', 
        name: 'Pedro',
        imgUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
        followers: 10,
        following: 50,
        description:  "ABC",
        andress: "@",
        status: "moderator",
        border: 'border-transparent',  
    },
]

//===============================  OPEN MODAL  ===============================  
let modal = 
{
    openModal(modalPlus)
    {
        document.querySelector('.modal-overlay').classList.toggle('invisible')
        document.querySelector(`.${modalPlus}`).classList.toggle('hidden')
        
        if(modalPlus == 'modal-plus')
        {
            document.querySelector('.btn-plus').classList.toggle('z-50')
        }
    },
    openBio(i)
    {
        document.querySelector('.modal-overlay').classList.toggle('invisible')
        document.querySelector('.modal-bio').classList.toggle('hidden')
        DOM.createProfileBio(profiles[i])
    },
}

//===============================  INNER HTML  ===============================
const DOM = 
{
    profileContainer: document.querySelector(".all"),
    profileContainerSearch: document.querySelector(".search"),
    profileContainerCall: document.querySelector(".call"),
    profileContainerBio: document.querySelector(".bio"),
    
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
                                <p class="flex justify-center text-xs">${profiles.name}</p>
                            </div>`

       return profile             
    },
    innerHTMLProfileCall(profiles)
    {
        const profile =     `<div>
                                <div class="">
                                <button class="focus:outline-none" onclick="modal.openBio('${profiles.id}')"</button>
                                    <img class="border-4 ${profiles.border} avatar h-16 my-1" src="${profiles.imgUrl}">
                                </div>
                                <p class="flex justify-center text-xs">${profiles.name}</p>
                             </div>`

       return profile             
    },
    innerHTMLBio(profiles)
    {
        const profile =     `<div class="w-full bg-yellow-50">
                                
                                <div class="flex justify-between w-full">                            
                                    <div>
                                        <button class="focus:outline-none " onclick="modal.openBio('${profiles.id}')"</button>
                                        <img class="border-4 ${profiles.border} avatar h-16 my-1" src="${profiles.imgUrl}">
                                    </div>


                                    <div class="grid grid-flow-col grid-rows-2 ">
                                        
                                        <span><button class="focus:outline-none ml-14" 
                                                      onclick="">:
                                        </button></span>
                                        <span><button class="px-4 py-2 bg-gray-200 rounded-full focus:outline-none text-sm" 
                                                      onclick="">Follow
                                        </button></span>
                                        <span><button class="focus:outline-none bg-gray-200 rounded-full mx-4" 
                                                      onclick="">C
                                        </button></span>

                                        <span><button class= px-4 py-2 bg-gray-200 rounded-full focus:outline-none"
                                                      onclick="">+
                                        </button></span>
                                        
                                    </div>
                                </div>

                                <div class="w-full m-4">
                                    <p class="flex justify-center">${profiles.name}</p>

                                    <span>${ profiles.andress }</span>
                                    <span>${ profiles.status }</span>
                                </div>

                                <div class="w-full m-4">
                                    <span>${profiles.followers}</span>
                                    <span>${profiles.following}</span>
                                </div>

                                <p>${profiles.description}</p><br>
                                
                                <button class="focus:outline-none justify-start" onclick="">View full profile</button>
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
    createProfileBio(profile)
    {
        const div = document.createElement('div');
        div.innerHTML = DOM.innerHTMLBio(profile)
        DOM.profileContainerBio.appendChild(div)
    }
}

profiles.forEach(profile => DOM.createProfile(profile))

for(let i = 0; i < 4; i++)
{
    DOM.createProfileSearch(profiles[i])
}

profilesCall.forEach(profile => DOM.createProfileCall(profile))


