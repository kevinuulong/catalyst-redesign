let everything = document.getElementById("PT_WRAPPER");
let side = document.createElement('div');

side.id = "sidebar";

let home = document.createElement('div');
home.appendChild(document.createTextNode('Home'));
home.classList.add('sidebarOption');
home.id = "home";

side.appendChild(home);

let notifications = document.createElement('div');
notifications.appendChild(document.createTextNode('Notifications'));
notifications.classList.add('sidebarOption');
notifications.id = "notifications";

side.appendChild(notifications);

let settings = document.createElement('div');
settings.appendChild(document.createTextNode('Settings'));
settings.classList.add('sidebarOption');
settings.id = "settings";

side.appendChild(settings);


everything.parentNode.insertBefore(side, everything);

let header = document.getElementById("PT_HEADER_PANEL");
let logo = document.createElement('div');
logo.id = "logo";

let avatar = document.createElement('div');
avatar.id = "avatar";

header.parentNode.insertBefore(logo, header);
header.parentNode.insertBefore(avatar, header);