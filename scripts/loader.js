let customLoader = document.createElement('div');
customLoader.id = "loader";
let container = document.createElement('div');
container.id = "loaderCotainer";

let logo = document.createElement('img');
logo.id = "loaderLogo";
logo.src = "https://cdn.jsdelivr.net/gh/kevinuulong/catalyst-redesign/logos/uc_white.svg";

let bar = document.createElement('div');
bar.id = "loaderBar";

container.appendChild(logo);
container.appendChild(bar);
customLoader.appendChild(container);
document.body.appendChild(customLoader);
