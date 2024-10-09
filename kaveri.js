
let friendsList = [];

// Lisääminen
function addFriend() {
const name = document.getElementById("friend-name").value;
if (name === "") {
    document.getElementById("result").innerText =
    "Please enter a friend's name.";
    return;
}

if (!friendsList.includes(name)) {
    friendsList.push(name);
    document.getElementById(
    "result"
    ).innerText = `${name} on lisätty kaveri listaasi.`;
} else {
    document.getElementById(
    "result"
    ).innerText = `${name} on jo kaveri listassa.`;
}
updateFriendsList();
}

// Poistaminen
function removeFriend() {
const name = document.getElementById("friend-name").value;
const index = friendsList.indexOf(name);

if (index !== -1) {
    friendsList.splice(index, 1);
    document.getElementById(
    "result"
    ).innerText = `${name} on poistettu kaveri listaltasi.`;
} else {
    document.getElementById(
    "result"
    ).innerText = `${name} ei löydy kaveri listaltasi.`;
}
updateFriendsList();
}
// Haku
function searchFriend() {
const name = document.getElementById("friend-name").value;

if (friendsList.includes(name)) {
    document.getElementById(
    "result"
    ).innerText = `${name} is in your friends list.`;
} else {
    document.getElementById(
    "result"
    ).innerText = `${name} is not in your friends list.`;
}
}

function updateFriendsList() {
const friendsDiv = document.getElementById("friends-list");

if (friendsList.length > 0) {
    friendsDiv.innerHTML = friendsList.join(", ");
} else {
    friendsDiv.innerHTML = "No friends added yet.";
}

document.getElementById("friend-name").value = "";
}
