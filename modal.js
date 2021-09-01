// const { url } = require("inspector");

let body2 = document.querySelector('body');
let aboutMe = document.querySelector('.about-me');
let cardContainer = document.createElement('section');
cardContainer.classList.add('card-works');
let buttonsArr = [];
let cardArr = [];
let modalArr = [];

// const languagesList = ['html', 'css', 'javascript'];
// let cardContainer = document.querySelector('.card-works');

let projects = [
    {
        name: 'Tonic',
        featuredImage: "url('./images/Snapshoot-Portfolio-1.png')",
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        languagesList: ['html', 'css', 'javascript'],
        liveLink: '',
        sourceLink: ''
    },
    {
        name: 'Multi-Post Stories',
        featuredImage: "url('./images/Snapshoot-Portfolio-2.png')",
        description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
        languagesList: ['html', 'Ruby on rails', 'css', 'javascript'],
        liveLink: '',
        sourceLink: ''
    },
    {
        name: 'Facebook 360',
        featuredImage: "url('./images/Snapshoot-Portfolio-3.png')",
        description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
        languagesList: ['html', 'Ruby on rails', 'css', 'javascript'],
        liveLink: '',
        sourceLink: ''
    },
    {
        name: 'Uber Navigation',
        featuredImage: "url('./images/Snapshoot-Portfolio-4.png')",
        description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
        languagesList: ['html', 'Ruby on rails', 'css', 'javascript'],
        liveLink: '',
        sourceLink: ''
    }
];

projects.forEach((project) => {

    body2.appendChild(cardContainer);
    document.body.insertBefore(cardContainer, aboutMe);

    let card = document.createElement('div');
    card.classList.add('card');
    cardContainer.appendChild(card);


    let cardImg = document.createElement('div');
    cardImg.classList.add('card-img');
    cardImg.style.backgroundImage = project.featuredImage;
    card.appendChild(cardImg);


    let cardText = document.createElement('div');
    cardText.classList.add('card-text');
    card.appendChild(cardText);

    let projectTitle = document.createElement('h2');
    // projectTitle.classList.add('project-title-1');
    projectTitle.textContent = project.name;
    cardText.appendChild(projectTitle);

    let titleRoleul = document.createElement('ul');
    titleRoleul.classList.add('title-role');
    const titleRoleli1 = document.createElement('li');
    titleRoleli1.textContent = 'CANOPY';
    titleRoleul.appendChild(titleRoleli1);
    const titleRoleli2 = document.createElement('li');
    titleRoleli2.classList.add('role');
    const titleRoleImg1 = document.createElement('i');
    titleRoleImg1.classList.add('fas', 'fa-circle');
    titleRoleli2.appendChild(titleRoleImg1);
    titleRoleul.appendChild(titleRoleli2);
    const titleRoleli3 = document.createElement('li');
    titleRoleli3.classList.add('role');
    titleRoleli3.textContent = 'Back End Dev';
    titleRoleul.appendChild(titleRoleli3);
    const titleRoleli4 = document.createElement('li');
    titleRoleli4.classList.add('role');
    const titleRoleImg2 = document.createElement('i');
    titleRoleImg2.classList.add('fas', 'fa-circle');
    titleRoleli4.appendChild(titleRoleImg2);
    titleRoleul.appendChild(titleRoleli4);
    const titleRoleli5 = document.createElement('li');
    titleRoleli5.classList.add('role');
    titleRoleli5.textContent = '2015';
    titleRoleul.appendChild(titleRoleli5);
    cardText.appendChild(titleRoleul);

    let description = document.createElement('p');
    description.textContent = project.description;
    cardText.appendChild(description);

    let languagesUl = document.createElement('ul');
    languagesUl.classList.add('languages');
    for (let i = 0; i < project.languagesList.length; i++) {
        const languagesli = document.createElement('li');
        const languagesLink = document.createElement('a');
        languagesli.appendChild(languagesLink);
        languagesLink.innerText = project.languagesList[i];
        languagesUl.appendChild(languagesli);
    }
    cardText.appendChild(languagesUl);

    let seeProjectbtn = document.createElement('button');
    // seeProjectbtn.classList.add('button');
    seeProjectbtn.setAttribute('type', 'button');
    seeProjectbtn.textContent = 'See Project';
    cardText.appendChild(seeProjectbtn);
    buttonsArr.push(seeProjectbtn);

    cardArr.push(card);

    let modalContainer = document.createElement('div');
    // modalContainer.classList.add('modal-container');
    card.appendChild(modalContainer);

    let modal = document.createElement('div');
    modal.classList.add('modal');
    modalContainer.appendChild(modal);

    let modalTitle = document.createElement('h2');
    modalTitle.textContent = project.name;
    modal.appendChild(modalTitle);

    let close = document.createElement('a');
    close.classList.add('close-modal');
    const closeButton = document.createElement('i');
    closeButton.classList.add('fas', 'fa-times');
    close.appendChild(closeButton);
    modal.appendChild(close);

    let modalTitleRoleul = document.createElement('ul');
    modalTitleRoleul.classList.add('title-role');
    const modalTitleRoleli1 = document.createElement('li');
    modalTitleRoleli1.textContent = 'CANOPY';
    modalTitleRoleul.appendChild(modalTitleRoleli1);
    const modalTitleRoleli2 = document.createElement('li');
    modalTitleRoleli2.classList.add('role');
    const modalTitleRoleImg1 = document.createElement('i');
    modalTitleRoleImg1.classList.add('fas', 'fa-circle');
    modalTitleRoleli2.appendChild(modalTitleRoleImg1);
    modalTitleRoleul.appendChild(modalTitleRoleli2);
    const modalTitleRoleli3 = document.createElement('li');
    modalTitleRoleli3.classList.add('role');
    modalTitleRoleli3.textContent = 'Back End Dev';
    modalTitleRoleul.appendChild(modalTitleRoleli3);
    const modalTitleRoleli4 = document.createElement('li');
    modalTitleRoleli4.classList.add('role');
    const modalTitleRoleImg2 = document.createElement('i');
    modalTitleRoleImg2.classList.add('fas', 'fa-circle');
    modalTitleRoleli4.appendChild(modalTitleRoleImg2);
    modalTitleRoleul.appendChild(modalTitleRoleli4);
    const modalTitleRoleli5 = document.createElement('li');
    modalTitleRoleli5.classList.add('role');
    modalTitleRoleli5.textContent = '2015';
    modalTitleRoleul.appendChild(modalTitleRoleli5);
    modal.appendChild(modalTitleRoleul);

    let modalCardImg = document.createElement('div');
    modalCardImg.classList.add('card-img-modal');
    modalCardImg.style.backgroundImage = project.featuredImage;
    modal.appendChild(modalCardImg);

    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('description-container');
    modal.appendChild(descriptionContainer);
    
    let modalDescription = document.createElement('p');
    modalDescription.classList.add('modal-description');
    modalDescription.textContent = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s';
    descriptionContainer.appendChild(modalDescription);

    let modalLanguagesUl = document.createElement('ul');
    modalLanguagesUl.classList.add('languages');
    for (let i = 0; i < project.languagesList.length; i++) {
        const modalLanguagesli = document.createElement('li');
        const modalLanguagesLink = document.createElement('a');
        modalLanguagesli.appendChild(modalLanguagesLink);
        modalLanguagesLink.innerText = project.languagesList[i];
        modalLanguagesUl.appendChild(modalLanguagesli);
    }
    descriptionContainer.appendChild(modalLanguagesUl);

    modalArr.push(modalContainer);

});


// const firstButton = document.querySelector('.button');
// firstButton.addEventListener('click', openModal.bind(null, projects[0]));
// const card = document.querySelector('.card');

// function openModal(value) {
//     const createModal = document.createElement('div');
//     createModal.innerHTML = `
//         <div>${value.name}</div>
//         <div>This is going to be the description
//             <div> Links </div>
//             <div> languages </div>
//         </div>
//     `
//     card.appendChild(createModal);
// }

cardArr[0].setAttribute('class', 'card card-1');
cardArr[1].setAttribute('class', 'card card-2');
cardArr[2].setAttribute('class', 'card card-3');
cardArr[3].setAttribute('class', 'card card-4');

const card1 = document.querySelector('card-1');
const card2 = document.querySelector('card-2');
const card3 = document.querySelector('card-3');
const card4 = document.querySelector('card-4');

modalArr[0].setAttribute('class', 'modal-container modal-1');
modalArr[1].setAttribute('class', 'modal-container modal-2');
modalArr[2].setAttribute('class', 'modal-container modal-3');
modalArr[3].setAttribute('class', 'modal-container modal-4');

const modal1 = document.querySelector('modal-1');
const modal2 = document.querySelector('modal-2');
const modal3 = document.querySelector('modal-3');
const modal4 = document.querySelector('modal-4');

buttonsArr[0].setAttribute('class', 'button button-1');
buttonsArr[1].setAttribute('class', 'button button-2');
buttonsArr[2].setAttribute('class', 'button button-3');
buttonsArr[3].setAttribute('class', 'button button-4');

const button1 = document.querySelector('.button-1');
const button2 = document.querySelector('.button-2');
const button3 = document.querySelector('.button-3');
const button4 = document.querySelector('.button-4');
// buttonsArr.forEach(btn=>console.log(btn));


button1.addEventListner('click', function(){
    modal1.style.display = 'flex';
});

// let modalContainer = document.createElement('div');
// modalContainer.classList.add('modal-container');
// cardContainer.appendChild(modalContainer);

// let modal = document.createElement('div');
// modal.classList.add('modal');
// modalContainer.appendChild(modal);

// let projectTitle1 = document.createElement('h2');
// projectTitle1.textContent = projects[0].name;
// modal.appendChild(projectTitle1);

// let cardImg1 = document.createElement('div');
// cardImg1.classList.add('card-img-modal');
// cardImg1.style.backgroundImage = projects[0].featuredImage;
// modal.appendChild(cardImg1);


// let titleRoleul = document.createElement('ul');
// titleRoleul.classList.add('title-role');
// const titleRoleli1 = document.createElement('li');
// titleRoleli1.textContent = 'CANOPY';
// titleRoleul.appendChild(titleRoleli1);
// const titleRoleli2 = document.createElement('li');
// titleRoleli2.classList.add('role');
// const titleRoleImg1 = document.createElement('i');
// titleRoleImg1.classList.add('fas','fa-circle');
// titleRoleli2.appendChild(titleRoleImg1);
// titleRoleul.appendChild(titleRoleli2);
// const titleRoleli3 = document.createElement('li');
// titleRoleli3.classList.add('role');
// titleRoleli3.textContent = 'Back End Dev';
// titleRoleul.appendChild(titleRoleli3);
// const titleRoleli4 = document.createElement('li');
// titleRoleli4.classList.add('role');
// const titleRoleImg2 = document.createElement('i');
// titleRoleImg2.classList.add('fas','fa-circle');
// titleRoleli4.appendChild(titleRoleImg2);
// titleRoleul.appendChild(titleRoleli4);
// const titleRoleli5 = document.createElement('li');
// titleRoleli5.classList.add('role');
// titleRoleli5.textContent = '2015';
// titleRoleul.appendChild(titleRoleli5);
// cardText.appendChild(titleRoleul);

// let description = document.createElement('p');
// description.textContent = projects[0].description;
// cardText.appendChild(description);

// let languagesUl = document.createElement('ul');
// languagesUl.classList.add('languages');
// for(let i=0; i<projects[0].languagesList.length; i++){
//     const languagesli = document.createElement('li');
//     const languagesLink = document.createElement('a');
//     languagesli.appendChild(languagesLink);
//     languagesLink.innerText = languagesList[i];
//     languagesUl.appendChild(languagesli);
// }
// cardText.appendChild(languagesUl);
