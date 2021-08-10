let pageName = JSON.parse(sessionStorage.getItem('pt_history_last_nui')).pageName;

// <!-- Cloudflare Web Analytics --><script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "b71f213f5fe64bc2a37ed73ba5eed81c"}'></script><!-- End Cloudflare Web Analytics -->

let analytics = document.createElement('script');
analytics.defer = true;
analytics.src = 'https://static.cloudflareinsights.com/beacon.min.js';
analytics.dataset.cfBeacon = '{"token": "b71f213f5fe64bc2a37ed73ba5eed81c"}';

document.head.appendChild(analytics);

// Homepage
if (pageName === "PT_LANDINGPAGE") {
    let everything = document.getElementById("PT_WRAPPER");
    let side = document.createElement('div');
    
    side.id = "sidebar";
    
    let home = document.createElement('a');
    home.appendChild(document.createTextNode('Home'));
    home.classList.add('sidebarOption', 'selected');
    home.id = "home";
    
    side.appendChild(home);
    
    let notifications = document.createElement('a');
    notifications.appendChild(document.createTextNode('Notifications'));
    notifications.classList.add('sidebarOption');
    notifications.id = "notifications";
    notifications.setAttribute('href', document.querySelector("#PT_NOTIFY").getAttribute('href')); 
    notifications.onclick = document.querySelector("#PT_NOTIFY").onclick;
    
    side.appendChild(notifications);
    
    let settings = document.createElement('a');
    settings.appendChild(document.createTextNode('Settings'));
    settings.classList.add('sidebarOption');
    settings.id = "settings";
    
    settings.setAttribute('href', document.querySelector("#PT_MY_PREFERENCES").getAttribute('href')); 
    settings.onclick = document.querySelector("#PT_MY_PREFERENCES").onclick;
    
    side.appendChild(settings);
    
    
    everything.parentNode.insertBefore(side, everything);
    
    let header = document.getElementById("PT_HEADER_PANEL");
    let logo = document.createElement('div');
    logo.id = "logo";
    
    let avatar = document.createElement('div');
    avatar.id = "avatar";
    avatar.onclick = document.querySelector("#win0groupletPTNUI_LAND_REC_GROUPLET\\$5 > div").onclick;
    
    header.parentNode.insertBefore(logo, header);
    header.parentNode.insertBefore(avatar, header);
    
    if (!localStorage.getItem('UCID')) {
        let UCID = document.querySelector("#win0hdrdivUC_PORTAL_BRAND_HTMLAREA > div > div > div > span > span").textContent
        UCID = UCID.replace(/My\sUCID:\s/, '');
        console.log(UCID);
        localStorage.setItem('UCID', UCID);
    }

    if (!localStorage.getItem('avatar')) {
        let profile = document.getElementById("avatar");
        profile.click();
    } else {
        document.getElementById("avatar").style.backgroundImage = `url(${localStorage.getItem('avatar')})`;
    }

    if (document.querySelector("[id*=PTGP_APP_WRK_PTGP_TILE_LIVDAT]")) {
        document.querySelector("[id*=PTGP_APP_WRK_PTGP_TILE_LIVDAT]").textContent = document.querySelector("[id*=PTGP_APP_WRK_PTGP_TILE_LIVDAT]").textContent.replace(/\sNow/, '');
    } else {
        document.querySelector("#win0divPTNUI_LAND_REC_GROUPLET\\$1 > .ps_groupleth").classList.add('noAlert');
    }
}

// Profile
if (pageName === "SCC_MD_TGT_PAGE_FL") {
    if (!localStorage.getItem('avatar')) {
        if (document.readyState !== "loading") {
            setTimeout(getProfilePicture, 3000);
        } else {
            document.addEventListener("DOMContentLoaded", getProfilePicture);
        }
    }
}

function getProfilePicture() {
    let avatar = document.querySelector("#EMPL_PHOTO_EMPLOYEE_PHOTO").src;
        localStorage.setItem('avatar', avatar);
        window.history.back();
}

