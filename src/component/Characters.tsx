import { CharacterList } from '../type/character'

export const Characters = ({ characterList }: { characterList: CharacterList }): JSX.Element => {
  return (
    <ul className='character-list'>
      {
        characterList.map(character => (
          <li key={character.name} className='character-list-item'>
            <img src={character.img} alt={character.name} />
            <p>{character.name}</p>
          </li>
        ))
      }
    </ul>
  )
}
