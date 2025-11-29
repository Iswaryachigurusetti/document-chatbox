function addMessage(text, sender) {
    let chatbox = document.getElementById("chatbox");
    let div = document.createElement("div");
    div.className = "message " + sender;
    div.innerHTML = text;
    chatbox.appendChild(div);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function sendMessage() {
    let input = document.getElementById("userInput");
    let text = input.value.trim();
    if (text === "") return;

    addMessage(text, "user");

    let reply = botReply(text);
    
    setTimeout(() => addMessage(reply, "bot"), 300);

    input.value = "";
}

function botReply(question) {
    question = question.toLowerCase();

    if (question.includes("passport")) {
        return `
        <b>Passport Application</b><br>
        <b>Documents Required:</b><br>
        - Aadhaar<br>
        - Birth Certificate<br>
        - Address Proof<br>
        - Passport Photos<br><br>
        <b>Steps:</b><br>
        1. Visit Passport Seva<br>
        2. Register<br>
        3. Fill Form<br>
        4. Upload Docs<br>
        5. Book Appointment<br>
        `;
    }

    if (question.includes("voter")) {
        return `
        <b>Voter ID Application</b><br>
        <b>Documents Required:</b><br>
        - Aadhaar<br>
        - Age Proof<br>
        - Address Proof<br><br>
        <b>Steps:</b><br>
        1. Visit NVSP<br>
        2. Login<br>
        3. Fill Form 6<br>
        4. Upload Documents<br>
        `;
    }

    if (question.includes("pan")) {
        return `
        <b>PAN Card Application</b><br>
        <b>Documents:</b><br>
        - Aadhaar<br>
        - Photo<br>
        - Signature<br><br>
        <b>Steps:</b><br>
        1. Visit NSDL Website<br>
        2. Fill PAN Form<br>
        3. Upload Documents<br>
        4. Pay Fee<br>
        `;
    }

    return "Sorry, I don't understand. Try asking about Passport, Voter ID, PAN.";
}
