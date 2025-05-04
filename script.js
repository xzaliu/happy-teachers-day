function submitMessage() {
    let input = document.getElementById("messageInput").value;
    if (input.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = input;
        document.getElementById("messageList").appendChild(li);
        document.getElementById("messageInput").value = "";
    } else {
        alert("Please enter a message!");
    }
}
