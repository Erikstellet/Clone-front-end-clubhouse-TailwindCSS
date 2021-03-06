//===============================  DATABASE  ===============================
const followersB = 
[
    {
        id: '7', 
        name: 'Julia',
        imgUrl: 'https://images.generated.photos/7s6pbOWWL7BXR5niwIILZ52rsEv5rupl5Jcq-eczjOI/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzAxODM3MzUuanBn.jpg',
        followers: 10,
        following: 50,
        description:  "Olá! Gosto bastante de conversar!",
        andress: "@Julia1996",
        status: "moderador",
        border: 'border-green-400',
    },
    {
        id: '8', 
        name: 'Pedro',
        imgUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
        followers: 10,
        following: 50,
        description:  "ABC",
        andress: "@PedroGM",
        status: "moderator",
        border: 'border-transparent',
    },
]

const followingB = 
[
    {
        id: '7', 
        name: 'Julia',
        imgUrl: 'https://images.generated.photos/7s6pbOWWL7BXR5niwIILZ52rsEv5rupl5Jcq-eczjOI/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzAxODM3MzUuanBn.jpg',
        followers: 10,
        following: 50,
        description:  "Olá! Gosto bastante de conversar!",
        andress: "@Julia1996",
        status: "moderador",
        border: 'border-green-400',
    },
    {
        id: '8', 
        name: 'Pedro',
        imgUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
        followers: 10,
        following: 50,
        description:  "ABC",
        andress: "@PedroGM",
        status: "moderator",
        border: 'border-transparent',
    },
]

const profiles = 
[
    { 
        id: '0',
        name: 'Bianca',
        imgUrl: 'https://images.unsplash.com/photo-1546539782-6fc531453083?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
        followers: followersB.length,
        following: followingB.length,
        description:  "Olá pessoal!",
        andress: "@Bianca1997",
        status: "🟢Moderador",
        border: 'border-green-400',
    },
    { 
        id: '1',
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
        id: '2',
        name: 'João',
        imgUrl: 'https://images.generated.photos/z_w45-PQ28jY08f8O4BMykbnCVpwXsaoDvzoBgPYCg0/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzA4MzYxMDIuanBn.jpg',
        followers: 10,
        following: 50,
        description:  "ABC",
        andress: "@João123",
        status: "moderator",
        border: 'border-transparent',
    },
    {
        id: '3',
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
        description:  "Olá! Gosto bastante de conversar!",
        andress: "@Julia1996",
        status: "moderador",
        border: 'border-green-400',
    },
    {
        id: '8', 
        name: 'Pedro',
        imgUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
        followers: 10,
        following: 50,
        description:  "ABC",
        andress: "@PedroGM",
        status: "moderator",
        border: 'border-transparent',
    },
    {
        id: '9', 
        name: 'Maria',
        imgUrl: 'https://i.imgur.com/kJCWUAo.jpg',
        followers: 1,
        following: 5,
        description:  "ABC",
        andress: "@Maria2000",
        status: "moderator",
        border: 'border-transparent',
    },
]

//===============================  OPEN MODAL  ===============================  
let modal = 
{
    openModal(modals)
    {
        document.querySelector('.modal-overlay').classList.toggle('invisible')
        document.querySelector(`.${modals}`).classList.toggle('hidden')
        document.querySelector(`.${modals}`).classList.toggle('.modal-bio')
        
        if(modals == 'modal-plus')
        {
            document.querySelector('.btn-plus').classList.toggle('z-50')
        }
    },
    openBio(i)
    {
        document.querySelector('.modal-overlay').classList.toggle('invisible')
        document.querySelector('.modal-bio').classList.toggle('hidden')

        if(!document.querySelector(`.bio-profile${ i }`))
        {
            const list = document.querySelector('.bio');
            
            if (list.hasChildNodes())
            {
                for (l of list.children)
                {
                    l.remove();
                }
            }

            DOM.createProfileBio(profiles[i])
        }
    },
    modalClose(modals)
    {
        if(modals == 'modal-hand')
        {
            document.querySelector('.modal-overlay').classList.toggle('invisible')
            document.querySelector('.modal-hand').classList.toggle('hidden')  
        }
        else
        {
            document.querySelector('.modal-overlay').classList.toggle('invisible')
            document.querySelector('.modal-bio').classList.toggle('hidden')  
        }
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
        const profile =     `<div class="">
                                <div>
                                <button class="focus:outline-none" onclick="modal.openBio('${profiles.id}')"</button>
                                    <img class="border-4 ${profiles.border} avatar h-16 my-1" src="${profiles.imgUrl}">
                                </div>
                                <p class="flex justify-center text-xs">${profiles.name}</p>
                             </div>`

       return profile             
    },
    innerHTMLBio(profiles)
    {
        console.log(profiles.id)
        const profile =     `<div class="bio-profile${profiles.id}">
                                
                                <div class="flex justify-between w-full">                            
                                    <div>
                                        <button class="focus:outline-none " onclick=""</button>
                                        <img class="border-4 ${profiles.border} avatar h-16" src="${profiles.imgUrl}">
                                    </div>

                                    <div class="grid grid-flow-col grid-rows-2 ">
                                   
                                        <span class="my-0.5 mx-2">
                                            <button class="focus:outline-none ml-12 mr-4" onclick="">
                                                <img class="w-4 h-4" src="./assets/more.png">
                                            </button>
                                        </span>
                                        <span>
                                            <button class="px-3 border-2 border-gray-400 rounded-full
                                                    focus:outline-none text-sm ml-4" onclick="follows.followersB()">Follow
                                            </button>
                                        </span>
                                        <span class="my-0.5 ml-2.5">
                                            <button class="focus:outline-none" onclick="modal.modalClose('.bio-profile','${profiles.id}')">
                                                <img class="w-4 h-4" src="./assets/cancel.png">
                                            </button>
                                        </span>

                                        <span class="my-0.5 mx-2">
                                            <button class="opacity-25 focus:outline-none" onclick="">
                                                <img class="w-6 h-6" src="./assets/dry-clean.png">
                                            </button>
                                        </span>
                                        
                                    </div>
                                </div>

                                <div class="w-full">
                                    <p class="text-xl">${profiles.name}</p>

                                    <div class="flex">
                                        <p class="text-gray-400 mr-6">${ profiles.andress }</p>
                                        <p class="text-gray-400 ">${ profiles.status }</p>
                                    </div>
                                </div>

                                <div class="w-full mt-6">
                                    <span class="font-semibold">${profiles.followers}</span>
                                    <span class="text-gray-400 mr-12">followers</span>
                                    
                                    <span class="font-semibold">${profiles.following}</span>
                                    <span class="text-gray-400">following</span>
                                </div>

                                <p class="text-gray-400 mt-4 mb-2">${profiles.description}</p>
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

const follows = 
{
    followersB()
    {
        const f = followersB.find(f => f.andress == "@Maria2000")
        if(!f)
        {
            followersB.push(profiles[9])
        }
    }
}

for(let i = 3; i < profiles.length; i++)
{
    DOM.createProfile(profiles[i])
}


for(let i = 0; i < 4; i++)
{
    DOM.createProfileSearch(profiles[i])
}

for(let i = 0; i < 3; i++)
{
    DOM.createProfileCall(profiles[i])
}




