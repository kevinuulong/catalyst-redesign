let customLoader = document.createElement('div');
customLoader.id = "loader";
let container = document.createElement('div');
container.id = "loaderCotainer";

let logo = document.createElement('img');
logo.id = "loaderLogo";
logo.src = "http://127.0.0.1:5500/logos/uc_white.svg";

let bar = document.createElement('div');
bar.id = "loaderBar";

container.appendChild(logo);
container.appendChild(bar);
customLoader.appendChild(container);
document.body.appendChild(customLoader);
