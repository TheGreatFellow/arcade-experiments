import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { CONTRACT_ADDRESS, transformCharacterData } from '../../constants'
import myEpicGame from '../../utils/MyEpicGame.json'
import './Arena.css'
import LoadingIndicator from '../LoadingIndicator'

const Arena = ({ characterNFT, setCharacterNFT }) => {
    const [gameContract, setGameContract] = useState(null)
    const [boss, setBoss] = useState(null)
    const [attackState, setAttackState] = useState('')
    const [showToast, setShowToast] = useState(false)

    const runAttackAction = async () => {
        try {
            if (gameContract) {
                setAttackState('attacking')
                console.log('Attacking boss...')
                const txn = await gameContract.attackBoss()
                await txn.wait()
                console.log(txn)
                setAttackState('hit')

                /*
                 * Set your toast state to true and then false 5 seconds later
                 */
                setShowToast(true)
                setTimeout(() => {
                    setShowToast(false)
                }, 5000)
            }
        } catch (error) {
            console.error('Error attacking boss:', error)
            setAttackState('')
        }
    }

    useEffect(() => {
        const fetchBoss = async () => {
            const bossTxn = await gameContract.getBigBoss()
            console.log('Boss:', bossTxn)
            setBoss(transformCharacterData(bossTxn))
        }

        const onAttackComplete = (newBossHp, newPlayerHp) => {
            const bossHp = newBossHp.toNumber()
            const playerHp = newPlayerHp.toNumber()

            console.log(
                `AttackComplete: Boss Hp: ${bossHp} Player Hp: ${playerHp}`
            )

            setBoss((prevState) => {
                return { ...prevState, hp: bossHp }
            })

            setCharacterNFT((prevState) => {
                return { ...prevState, hp: playerHp }
            })
        }

        if (gameContract) {
            fetchBoss()
            gameContract.on('AttackComplete', onAttackComplete)
        }

        return () => {
            if (gameContract) {
                gameContract.off('AttackComplete', onAttackComplete)
            }
        }
    }, [gameContract])

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

    return (
        <div className='arena-container'>
            {boss && characterNFT && (
                <div id='toast' className={showToast ? 'show' : ''}>
                    <div id='desc'>{`💥 ${boss.characterName} was hit for ${characterNFT.attackDamage}!`}</div>
                </div>
            )}

            {boss && (
                <div className='boss-container'>
                    <div className={`boss-content ${attackState}`}>
                        <h2>🔥 {boss.characterName} 🔥</h2>
                        <div className='image-content'>
                            <img
                                src={boss.imageURL}
                                alt={`Boss ${boss.characterName}`}
                            />
                            <div className='health-bar'>
                                <progress value={boss.hp} max={boss.maxHp} />
                                <p>{`${boss.hp} / ${boss.maxHp} HP`}</p>
                            </div>
                        </div>
                    </div>
                    <div className='attack-container'>
                        <button
                            className='cta-button'
                            onClick={runAttackAction}
                        >
                            {`💥 Attack ${boss.characterName}`}
                        </button>
                    </div>
                    {attackState === 'attacking' && (
                        <div className='loading-indicator'>
                            <LoadingIndicator />
                            <p>Attacking ⚔️</p>
                        </div>
                    )}
                </div>
            )}

            {characterNFT && (
                <div className='players-container'>
                    <div className='player-container'>
                        <h2>Your Character</h2>
                        <div className='player'>
                            <div className='image-content'>
                                <h2>{characterNFT.characterName}</h2>
                                <img
                                    src={characterNFT.imageURL}
                                    alt={`Character ${characterNFT.characterName}`}
                                />
                                <div className='health-bar'>
                                    <progress
                                        value={characterNFT.hp}
                                        max={characterNFT.maxHp}
                                    />
                                    <p>{`${characterNFT.hp} / ${characterNFT.maxHp} HP`}</p>
                                </div>
                            </div>
                            <div className='stats'>
                                <h4>{`⚔️ Attack Damage: ${characterNFT.attackDamage}`}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Arena
