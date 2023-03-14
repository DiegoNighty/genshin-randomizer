import { useEffect, useState } from 'react'
import { CharacterList } from '../type/character'
import { getRandomCharacters } from '../service/character.service'

export default function useTeam (): [CharacterList, () => void] {
  const [team, setTeam] = useState<CharacterList>([])

  const refreshTeam = (): void => {
    void getRandomCharacters({ count: 4 }).then(setTeam)
  }

  useEffect(refreshTeam, [])

  return [team, refreshTeam]
}
