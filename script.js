document.addEventListener('DOMContentLoaded', function() {
    const profileContainer = document.getElementById('hero1');
    if (profileContainer) {
        profileContainer.innerHTML = `
            <div class="profile-container">
                <img src="images/Eyeball.png.webp" alt="Profile Picture" class="profile-picture">
                <h1 class="username">kilrob*</h1>
                <p class="title">★3D☆GUY★</p>
                <div class="social-icons">
                    <a href="https://x.com/kilrob_" target="_blank"><img src="images/X.jpeg" alt="Twitter"></a>
                    <a href="https://instagram.com/kilrob_" target="_blank"><img src="images/Insta.jpeg" alt="Instagram"></a>
                    <a href="https://www.youtube.com/@kilrob" target="_blank"><img src="images/Youtube.jpeg" alt="YouTube"></a>
                    <a href="https://twitch.tv/kilrob_" target="_blank"><img src="images/Twich.jpeg" alt="Twitch"></a>
                    <a href="https://discord.gg/MuPGksq8aT" target="_blank"><img src="images/Discord.jpeg" alt="Discord"></a>
                </div>
                <button class="commissions-button">★commissions★</button>
            </div>
        `;
        const commissionsButton = document.querySelector('.commissions-button');
        if (commissionsButton) {
            commissionsButton.addEventListener('click', function() {
                window.location.href = 'https://ko-fi.com/kilrob/commissions';
            });
        } else {
            console.error('Commissions button not found');
        }
    } else {
        console.error('Profile container not found');
    }
});
