<script>
    import { onMount } from 'svelte';
    import { users_store } from "$lib/user";

    let users = [];
    let name = "";
    let email = "";
    let password = "";
    let age = "";
    let color = "grey";

    let colors = [
        { namn: "Blå", value: "blue" },
        { namn: "Röd", value: "red" },
        { namn: "Grå", value: "grey" }
    ];

    onMount(() => {
        if ($users_store.length > 2) {
            users = JSON.parse($users_store);
        }
    });

    function handleSubmit() {
        let new_user = { username: name, email: email, password: password, color: color };

        let existing_users = users.filter(user => user.username === name);
        if (existing_users.length > 0) {
            alert("Användarnamnet finns redan! Vänligen välj ett annat.");
            return;
        }

        users = [...users, new_user];
        $users_store = JSON.stringify(users);

        alert(`Välkommen ${name}! \nE-post: ${email} \nLösenord: ${password}`);
    }
    </script>

    <main> 
        <h1>Register</h1>
        <div class="container">
            <form on:submit|preventDefault={handleSubmit}>
                <div style="width: 100px; height: 100px; border-radius: 50%; overflow: hidden; background-color: {color};"></div>

                <label for="name" style="color: white;">Namn:</label>
                <input type="text" id="name" bind:value={name} style="color: black;">

                <label for="mail" style="color: white;">Mail:</label>
                <input type="email" id="mail" bind:value={email} style="color: black;">

                <label for="pass" style="color: white;">Lösenord:</label>
                <input type="password" id="pass" bind:value={password} style="color: black;">

                <label for="age" style="color: white;">Födelsedatum:</label>
                <input type="date" id="age" bind:value={age} style="color: black;">

                <label for="Favoritfärg" style="color: white;">Färg:</label>
                <select id="Favoritfärg" bind:value={color} style="color: black;">
                    {#each colors as c}
                        <option value={c.value}>{c.namn}</option>
                    {/each}
                </select>

                <input type="submit" value="Registrera" style="margin-top: 10px;">
            </form>
            <p style="color: white;">Har du redan ett konto? <a href="/login" style="color: lightblue;">Logga in</a>.</p>
        </div>
    </main>

    <style>
    main {
        background-image: url("https://i.pinimg.com/control2/736x/77/b2/b9/77b2b92174c85e3bd6a3f5fe63780e07.jpg");
        background-size: cover;
        width: 100%;
        height: 100%;
        min-height: 500px;
        padding: 5%;
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        border: solid 5px rgb(0, 0, 0);
        border-radius: 30px;
        width: 35%;
        height: 80%;
        min-width: 300px;
        min-height: 500px;
        background-color: #000000;
        margin: auto;
    }
    </style>