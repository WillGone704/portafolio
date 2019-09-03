const bubleTagBox = {
  homeTag: document.querySelector('#homeBubleTag'),
  frontTag: document.querySelector('#frontBubleTag'),
  backTag: document.querySelector('#backBubleTag'),
  projectTag: document.querySelector('#projectBubleTag'),
  contactTag: document.querySelector('#contactBubleTag'),
}

const bubleMenu = {
  home: document.querySelector('#homeBuble'),
  front: document.querySelector('#frontBuble'),
  back: document.querySelector('#backBuble'),
  project: document.querySelector('#projectBuble'),
  contact: document.querySelector('#contactBuble'),
}
const {home,front,back,project,contact} = bubleMenu;
const {homeTag, frontTag, backTag, projectTag, contactTag} = bubleTagBox;

function tagVisible(param){
  if(param === "homeBuble"){
    homeTag.style.visibility = "visible";
  }
  else if(param === "frontBuble"){
    frontTag.style.visibility = "visible";
  }
  else if(param === "backBuble"){
    backTag.style.visibility = "visible";
  }
  else if(param === "projectBuble"){
    projectTag.style.visibility = "visible";
  }
  else if(param === "contactBuble"){
    contactTag.style.visibility = "visible";
  }

}

function tagHidden(param){
  let visible = param.style.visibility;
  if(visible === "visible"){
     param.style.visibility = "hidden";
  }

}
//--------------------Main Programm-------------------------
home.addEventListener('mouseover',() => tagVisible(home.id));
home.addEventListener('mouseout',() => tagHidden(homeTag));

front.addEventListener('mouseover',() => tagVisible(front.id));
front.addEventListener('mouseout',() => tagHidden(frontTag));

back.addEventListener('mouseover',() => tagVisible(back.id));
back.addEventListener('mouseout',() => tagHidden(backTag));

project.addEventListener('mouseover',() => tagVisible(project.id));
project.addEventListener('mouseout',() => tagHidden(projectTag));

contact.addEventListener('mouseover',() => tagVisible(contact.id));
contact.addEventListener('mouseout',() => tagHidden(contactTag));
//--------------------Main Programm-------------------------