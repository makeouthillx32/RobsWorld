document.addEventListener('DOMContentLoaded', function() {
    const profileContainer = document.getElementById('hero1');
    if (profileContainer) {
        profileContainer.innerHTML = `
            <div class="profile-container">
                <img src="images/Eyeball.png.webp" alt="Profile Picture" class="profile-picture">
                <h1 class="username">kilrob*</h1>
                <p class="title">★3D☆GUY★</p>
                <div class="social-icons">
                    <a href="https://twitter.com" target="_blank"><img src="images/X.jpeg" alt="Twitter"></a>
                    <a href="https://instagram.com" target="_blank"><img src="images/Insta.jpeg" alt="Instagram"></a>
                    <a href="https://youtube.com" target="_blank"><img src="images/Youtube.jpeg" alt="YouTube"></a>
                    <a href="https://twitch.tv" target="_blank"><img src="images/Twich.jpeg" alt="Twitch"></a>
                    <a href="https://discord.com" target="_blank"><img src="images/Discord.jpeg" alt="Discord"></a>
                </div>
                <button class="commissions-button">★commissions★</button>
            </div>
        `;
        document.querySelector('.commissions-button').addEventListener('click', function() {
            window.location.href = 'https://your-commissions-link.com';
        });
    } else {
        console.error('Profile container not found');
    }
});