import { browser } from "$app/environment";
import { writable } from "svelte/store";


/* initialize the users to "" if the users has not already been stored */
const users = browser ? window?.localStorage.getItem('users') ?? "" : ""

export const users_store = writable(users)

if (browser) {
        users_store.subscribe((value) => {
                window?.localStorage.setItem('users', value);
        })
}