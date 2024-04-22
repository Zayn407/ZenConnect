document.addEventListener('DOMContentLoaded', function() {
    const contactsList = document.getElementById('contacts-list');
    const chatMessages = document.getElementById('chat-messages');
    let currentContact = '';

    // Predefined contacts for demonstration
    const contacts = ['SHENFAN', 'OLI', 'UTSAV', 'LUCAS'];
    // Render predefined contacts
    contacts.forEach(contact => {
        addContactToList(contact);
    });

    // Add Friend button functionality
    document.getElementById('add-friend-btn').addEventListener('click', function() {
        const friendName = prompt('Enter the name of the friend:');
        if (friendName && friendName.trim() && !contacts.includes(friendName.trim())) {
            contacts.push(friendName.trim());
            addContactToList(friendName.trim());
        } else if (contacts.includes(friendName.trim())) {
            alert('This friend is already in your contact list.');
        }
    });

    // Send button functionality
    document.getElementById('send-btn').addEventListener('click', function() {
        const messageInput = document.getElementById('message-input');
        const message = messageInput.value.trim();
        if (message && currentContact) {
            saveMessage(currentContact, message);
            addMessageToChat(message);
            messageInput.value = '';
        }
    });

    function addContactToList(contact) {
        let li = document.createElement('li');
        li.textContent = contact;
        li.onclick = function() { selectContact(contact); };
        contactsList.appendChild(li);
    }

    function selectContact(contact) {
        currentContact = contact;
        document.getElementById('chat-title').textContent = `Conversation with ${contact}`;
        loadMessages(contact);
    }

    function loadMessages(contact) {
        const messages = JSON.parse(localStorage.getItem('chatMessages')) || {};
        chatMessages.innerHTML = '';
        if (messages[contact]) {
            messages[contact].forEach(message => {
                addMessageToChat(message);
            });
        }
    }

    function addMessageToChat(message) {
        let messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
    }

    function saveMessage(contact, message) {
        const messages = JSON.parse(localStorage.getItem('chatMessages')) || {};
        if (!messages[contact]) {
            messages[contact] = [];
        }
        messages[contact].push(message);
        localStorage.setItem('chatMessages', JSON.stringify(messages));
    }
});
