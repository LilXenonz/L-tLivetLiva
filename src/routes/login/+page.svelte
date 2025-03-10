<script>
    import { onMount } from 'svelte';
    import { users_store } from "$lib/user";
    import { base } from "$app/paths";

    let users = [];
    let email = "";
    let password = "";

    onMount(() => {
        if ($users_store.length > 2) {
            users = JSON.parse($users_store);
        }
    });

    function handleLogin() {
        let found_user = users.filter(user => user.email === email);

        if (found_user.length === 0) {
            alert("Användaren finns inte. Säkerställ e-post eller registrera ett konto.");
            return;
        }

        if (found_user[0].password !== password) {
            alert("Fel lösenord. Försök igen.");
            return;
        }

        alert(`Välkommen tillbaks, ${found_user[0].username}! Du är nu inloggad.`);
    }
    </script>

    <main> 
        <h1>Inloggning</h1>
        <div class="container">
            <form on:submit|preventDefault={handleLogin}>
                <label for="mail" style="color: white;">Mail:</label>
                <input type="text" id="mail" bind:value={email} style="color: black;">

                <label for="pass" style="color: white;">Lösenord:</label>
                <input type="password" id="pass" bind:value={password} style="color: black;">

                <input type="submit" value="Logga in" style="margin-top: 10px;">
            </form>
            <p style="color: white;">Har du inte ett konto? <a href="{base}/register" style="color: lightblue;">Registrera dig</a>.</p>
        </div>
    </main>

    <style>
    h1{
        color: white;
    }
    main{
        background-image: url("https://upload.wikimedia.org/wikipedia/commons/9/92/UFC_Logo.svg");
        background-size: cover;
        width: 100%;
        height: 60%;
        padding: 5%;
        background-color: black;
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        border: solid 5px rgb(0, 0, 0);
        border-radius: 20px;
        width: 40%;
        height: auto;
        min-width: 300px;
        min-height: 300px;
        background-color: #000000;
        margin: auto;
    }
    </style>