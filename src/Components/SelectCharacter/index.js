import React, { useEffect, useState } from 'react'
import './SelectCharacter.css'
import { ethers } from 'ethers'
import { CONTRACT_ADDRESS, transformCharacterData } from '../../constants'
import myEpicGame from '../../utils/MyEpicGame.json'
import LoadingIndicator from '../LoadingIndicator'

/*
 * Don't worry about setCharacterNFT just yet, we will talk about it soon!
 */
const SelectCharacter = ({ setCharacterNFT }) => {
    const [characters, setCharacters] = useState([])
    const [gameContract, setGameContract] = useState(null)
    const [mintingCharacter, setMintingCharacter] = useState(false)

    const mintCharacterNFTAction = (characterId) => async () => {
        try {
            if (gameContract) {
                setMintingCharacter(true)

                console.log('Minting Hero in progress...')
                const mintTxn = await gameContract.mintCharacterNFT(characterId)
                await mintTxn.wait()
                console.log('mintTxn:', mintTxn)
                setMintingCharacter(false)
            }
        } catch (error) {
            console.warn('MintCharacterAction Error:', error)
            setMintingCharacter(false)
        }
    }

    const renderCharacters = () =>
        characters.map((character, index) => (
            <div className='character-item' key={index}>
                <div className='name-container'>
                    <p>{character.characterName}</p>
                </div>
                <img src={character.imageURL} alt={character.characterName} />
                <button
                    type='button'
                    className='character-mint-button'
                    onClick={mintCharacterNFTAction(index)}
                >{`Mint ${character.characterName}`}</button>
            </div>
        ))

    useEffect(() => {
        const { ethereum } = window

        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum)
            const signer = provider.getSigner()
            const gameContract = new ethers.Contract(
                CONTRACT_ADDRESS,
                myEpicGame.abi,
                signer
            )

            setGameContract(gameContract)
        } else {
            console.log('Ethereum object not found')
        }
    }, [])

    useEffect(() => {
        const getCharacters = async () => {
            try {
                console.log('Getting contract characters to mint')

                const charactersTxn =
                    await gameContract.getAllDefaultCharacters()
                console.log('charactersTxn:', charactersTxn)

                const characters = charactersTxn.map((characterData) =>
                    transformCharacterData(characterData)
                )

                setCharacters(characters)
            } catch (error) {
                console.error(
                    'Something went wrong fetching characters:',
                    error
                )
            }
        }

        const onCharacterMint = async (sender, tokenId, characterIndex) => {
            console.log(
                `CharacterNFTMinted - sender: ${sender} tokenId: ${tokenId.toNumber()} characterIndex: ${characterIndex.toNumber()}`
            )

            if (gameContract) {
                const characterNFT = await gameContract.checkIfUserHasNFT()
                console.log('CharacterNFT: ', characterNFT)
                setCharacterNFT(transformCharacterData(characterNFT))
                alert(
                    `Your NFT is all done -- see it here: https://testnets.opensea.io/assets/${CONTRACT_ADDRESS}/${tokenId.toNumber()}`
                )
                gameContract.on('CharacterNFTMinted', onCharacterMint)
            }
        }

        if (gameContract) {
            getCharacters()
            gameContract.on('CharacterNFTMinted', onCharacterMint) //mint listener
        }
        return () => {
            if (gameContract) {
                gameContract.off('CharacterNFTMinted', onCharacterMint)
            }
        }
    }, [gameContract])

    return (
        <div className='select-character-container'>
            <h2>Mint Your Hero. Choose wisely.</h2>
            {characters.length > 0 && (
                <div className='character-grid'>{renderCharacters()}</div>
            )}
            {mintingCharacter && (
                <div className='loading'>
                    <div className='indicator'>
                        <LoadingIndicator />
                        <p>Awakening the Hero...</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SelectCharacter
