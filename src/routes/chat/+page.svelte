<script>
    import ElizaBot from "elizabot";
  
    const eliza = new ElizaBot();
  
    let messages = [];
  
    let userMessage = "";
  
    function sendMessage() {
      if (userMessage.trim() === "") return;
  
      messages = [...messages, { sender: "User", text: userMessage }];
  
      const elizaResponse = eliza.transform(userMessage);
  
      messages = [...messages, { sender: "Eliza", text: elizaResponse }];
  
      userMessage = "";
    }
  </script>
  
  <style>
    main{
        background-image: url("https://images5.alphacoders.com/694/694607.jpg");
    }
    .chat-container {
      max-width: 600px;
      margin: 0 auto;
      padding: 1rem;
      font-family: Arial, sans-serif;
      border: 1px solid #ccc;
      border-radius: 8px;
      background-color: black;
      display: flex;
      flex-direction: column;
      height: 100vh; 
    }
  
    .messages {
      flex: 1;
      display: flex;
      flex-direction: column-reverse; /* Start from the bottom */
      overflow-y: auto;
      margin-bottom: 1rem;
      border: 1px solid #ddd;
      padding: 0.5rem;
      border-radius: 4px;
      background: #fff;
    }
  
    .message {
      margin: 0.5rem 0;
    }
  
    .message.user {
      text-align: right;
      color: blue;
    }
  
    .message.eliza {
      text-align: left;
      color: green;
    }
  
    .input-container {
      display: flex;
      gap: 0.5rem;
    }
  
    input[type="text"] {
      flex: 1;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  
    button {
      padding: 0.5rem 1rem;
      background-color: blue;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  
    button:disabled {
      background-color: gray;
      cursor: not-allowed;
    }
  </style>
  <main>
    <div class="chat-container">
      <div class="messages">
        {#each messages as { sender, text }}
          <div class="message {sender.toLowerCase()}">
            <strong>{sender}:</strong> {text}
          </div>
        {/each}
      </div>
    
      <div class="input-container">
        <input
          type="text"
          bind:value={userMessage}
          placeholder="Type your message..."
          on:keypress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button on:click={sendMessage} disabled={userMessage.trim() === ""}>
          Send
        </button>
      </div>
    </div>
</main>

  