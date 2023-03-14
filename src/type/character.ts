interface Character {
  id: number
  name: string
  img: string
}

type CharacterList = Character[]

export type {
  Character,
  CharacterList
}
