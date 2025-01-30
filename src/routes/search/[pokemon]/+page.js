import { error } from '@sveltejs/kit';
export const ssr = false;

export async function load({ params }) {
  const url = `https://pokeapi.co/api/v2/pokemon/${params.pokemon}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw error(response.status, response.statusText);
    }
    const data = await response.json();
    return { pokemon: data };
  } catch (err) {
    throw error(500, 'Could not fetch the Pokémon data');
  }
}
