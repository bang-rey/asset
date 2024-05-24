const gameData = [
    { name: "Battleground Royal", image: "https://raw.githubusercontent.com/bang-rey/assets/main/Battleground_Royale.png" },
    { name: "Mafia Mayhem", image: "https://raw.githubusercontent.com/bang-rey/assets/main/Mafia_Mayhem.png" },
    { name: "Mahjong Ways", image: "https://raw.githubusercontent.com/bang-rey/assets/main/mahjong-ways.png" },
    { name: "Mahjong Ways2", image: "https://raw.githubusercontent.com/bang-rey/assets/main/mahjong-ways2.png" },
    { name: "Queen Of Bounty", image: "https://raw.githubusercontent.com/bang-rey/assets/main/queen-of-bounty.png" },
    { name: "Bonanza Gold", image: "https://raw.githubusercontent.com/bang-rey/assets/main/vs20bonzgold.png" },
    { name: "Fruit Party2", image: "https://raw.githubusercontent.com/bang-rey/assets/main/vs20fparty2.png" },
    { name: "Sweet Bonanza", image: "https://raw.githubusercontent.com/bang-rey/assets/main/vs20fruitsw.png" },
    { name: "Gates Of Gatotkaca", image: "https://raw.githubusercontent.com/bang-rey/assets/main/vs20gatotgates.png" },
    { name: "Gates Of Gatotkaca 1000", image: "https://raw.githubusercontent.com/bang-rey/assets/main/vs20gatotx.png" },
    { name: "Gates Of Olmypus", image: "https://raw.githubusercontent.com/bang-rey/assets/main/vs20olympgate.png" },
    { name: "Gates Of Olmypus 1000", image: "https://raw.githubusercontent.com/bang-rey/assets/main/vs20olympx.png" },
    { name: "Sweet Bonanza Xmas", image: "https://raw.githubusercontent.com/bang-rey/assets/main/vs20sbxmas.png" },
    { name: "Starlight Princess", image: "https://raw.githubusercontent.com/bang-rey/assets/main/vs20starlight.png" },
    { name: "Starlight Princess 1000", image: "https://raw.githubusercontent.com/bang-rey/assets/main/vs20starlightx.png" },
    { name: "Sugar Rush", image: "https://raw.githubusercontent.com/bang-rey/assets/main/vs20sugarrush.png" },
    { name: "Sugar Rush 1000", image: "https://raw.githubusercontent.com/bang-rey/assets/main/vs20sugarrushx.png" },
    { name: "Hot Fiesta", image: "https://raw.githubusercontent.com/bang-rey/assets/main/vs25hotfiesta.png" },
    { name: "Mahjong Wins", image: "https://raw.githubusercontent.com/bang-rey/assets/main/vs1024mahjwins.png" },
    { name: "Wild Bandito", image: "https://raw.githubusercontent.com/bang-rey/assets/main/wild-bandito190.png" },
];

const userIds = [
    "Alice", "Bob", "Charlie", "Dave", "Eve",
    "Faythe", "Grace", "Heidi", "Ivan", "Judy",
    "Mallory", "Niaj", "Olivia", "Peggy", "Sybil",
    "Trent", "Victor", "Walter", "Xena", "Yvonne",
    "Zara", "Abby", "Ben", "Cara", "Dan",
    "Eli", "Fiona", "Gabe", "Hana", "Ian",
    "Jack", "Kara", "Liam", "Mia", "Nate",
    "Owen", "Pia", "Quinn", "Ria", "Sam",
    "Tina", "Uma", "Vera", "Will", "Xander",
    "Yara", "Zack", "Anna", "Brian", "Clara"
];

const amounts = [
    500000, 750000, 1000000, 1250000, 1500000, 1700000, 2000000, 5000000
];

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomAmount() {
    return `Rp. ${getRandomElement(amounts).toLocaleString('id-ID')}`;
}

function showNotification() {
    const notification = document.getElementById('notification');
    const game = getRandomElement(gameData);
    const userId = getRandomElement(userIds);
    const amount = getRandomAmount();

    document.getElementById('game-image').src = game.image;
    document.getElementById('game-name').textContent = game.name;
    document.getElementById('user-id').textContent = userId.replace(/.(?=.{2,}$)/g, '*');
    document.getElementById('withdraw-amount').textContent = amount;

    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 10);

    // Hide after 4 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 1000); // wait for the opacity transition to complete
    }, 4000);
}

function startRandomNotifications() {
    showNotification();
    setInterval(() => {
        showNotification();
    }, 14000); // Interval for next notification
}

window.onload = startRandomNotifications;
