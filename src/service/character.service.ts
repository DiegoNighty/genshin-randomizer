import { CharacterList } from '../type/character'

const CHARACTER_ENDPOINT = 'https://genshinlist.com/api/characters'

async function getAllCharacters (): Promise<CharacterList> {
  const response = await fetch(CHARACTER_ENDPOINT)
  const json = await response.json()

  return json?.map((character: any) => ({
    id: character.id,
    name: character.name,
    img: getCharacterImage({ slug: character.slug })
  }))
}

async function getRandomCharacters ({ count }: { count: number }): Promise<CharacterList> {
  const characters = await getAllCharacters()
  return characters.sort(() => Math.random() - 0.5).slice(0, count)
}

function getCharacterImage ({ slug }: { slug: string }): string {
  return `https://genshinlist.com/assets/img/characters/${slug}.png`
}

export {
  getAllCharacters,
  getRandomCharacters
}
