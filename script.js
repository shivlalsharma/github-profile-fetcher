const API = 'https://api.github.com/users/';
const main = document.querySelector('.main-content');
const card = document.getElementById('card');
const loading = document.getElementById('loading');
const form = document.getElementById('search-form');

// preventing from page refresh and fetching github progile when submitting the form
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    await fetchProfile();
});

const fetchProfile = async () => {
    const usernameInput = document.getElementById('username');
    const username = usernameInput.value.trim();

    // If username is empty or containing spaces it will return false and will display this message
    if (!username) {
        displayError('GitHub username must be required.');
        return false;
    }

    if(/\s/.test(username)){
        displayError('Invalid username. Please enter a valid GitHub username.');
        return false;
    }

    // Showing loading spinner and clearing the card
    loading.style.display = 'block';
    card.innerHTML = '';

    try {
        const response = await fetch(API+username);

        if (!response.ok) {
            if (response.status === 403) {
                // Handles 403 Forbidden error
                displayError('Profile is not accessible right now due to privacy or rate limiting. Please try again later.');
            } else {
                // Handles other non-200 responses
                displayDefaultProfile();
            }
            return;
        }

        const data = await response.json();
        displayProfile(data);
    } catch (error) {
        displayDefaultProfile();
        return;
    } finally {
        loading.style.display = 'none';
        card.style.display = 'block';
    }

    usernameInput.value = '';
};

const displayProfile = (data) => {
    main.style.display = 'block';
    card.style.display = 'block';
    card.innerHTML = `
        <div>
            <img src="${data.avatar_url || './Default_Profile.png'}" alt="${data.name || 'User'}">
        </div>
        <div class="user-info">
            <h1>${data.name || 'Anonymous'}</h1>
            <p>${data.bio || 'No bio available'}</p>
            <ul class="info">
                <li>${data.followers || 0}<strong>Followers</strong></li>
                <li>${data.following || 0}<strong>Following</strong></li>
                <li>${data.public_repos || 0}<strong>Repos</strong></li>
            </ul>
            <div id="repos"></div>
        </div>`;
    fetchRepos(data.login); // Fetching and displaying repos
};

const fetchRepos = async (username) => {
    const reposContainer = document.getElementById('repos');
    reposContainer.innerHTML = '';
    try {
        const response = await fetch(API + username + '/repos');

        // If no repositories are found, showing this message
        if (!response.ok) {
            throw new Error('Repositories not found');
        }

        const repos = await response.json();
        repos.slice(0, 10).forEach(repo => {
            const link = document.createElement('a');
            link.href = repo.html_url;
            link.target = '_blank';
            link.className = 'repo';
            link.innerText = repo.name;
            reposContainer.appendChild(link);
        });
    } catch (error) {
        reposContainer.innerHTML = '<p>No repositories found.</p>';
    }
};

const displayDefaultProfile = () => {
    main.style.display = 'block';
    card.innerHTML = `
        <div>
            <img src="./Default_Profile.png" alt="Default Profile">
        </div>
        <div class="user-info">
            <h1>Anonymous</h1>
            <p>No bio available</p>
            <ul class="info">
                <li>0<strong>Followers</strong></li>
                <li>0<strong>Following</strong></li>
                <li>0<strong>Repos</strong></li>
            </ul>
        </div>`;
};

const displayError = (message) => {
    main.style.display = 'block';
    card.style.display = 'block';
    card.innerHTML = `<p class="error-message">${message}</p>`;
    loading.style.display = 'none';
};