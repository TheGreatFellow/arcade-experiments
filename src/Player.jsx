<<<<<<< HEAD
import dirt from "./assets/dirt.jpg";
import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei";
import { useInput } from "./hooks/useInput";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import grass from "./assets/grass_c.jpg";
import jeans from "./assets/jeans.jpg";
import redJ from "./assets/redJ.jpg";
import velvet from "./assets/velvet.jpg";
import { useUpdateMyPresence } from "./liveblocks.config";
import { useNavigate } from "react-router-dom";

=======
import dirt from './assets/dirt.jpg'
import React, { useRef, useEffect, useState } from 'react'
import { useGLTF, useAnimations, OrbitControls } from '@react-three/drei'
import { useInput } from './hooks/useInput'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useTexture } from '@react-three/drei'
import grass from './assets/grass_c.jpg'
import jeans from './assets/jeans.jpg'
import redJ from './assets/redJ.jpg'
import velvet from './assets/velvet.jpg'
import { useUpdateMyPresence } from './liveblocks.config'
import { ethers } from 'ethers'
import { CONTRACT_ADDRESS, transformCharacterData } from './constants'
import myEpicGame from './utils/MyEpicGame.json'
// import LoadingIndicator from '../LoadingIndicator'
>>>>>>> 817a34b2f0bb91383fc590a23667a0532c73edb7
export function Model(props) {
    const [characters, setCharacters] = useState([])
    const [gameContract, setGameContract] = useState(null)
    const [mintingCharacter, setMintingCharacter] = useState(false)
    const [dirty, setDirty] = useState(false)
    const [textu, setTextu] = useState(grass)
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/player-transformed.glb')
    const { actions } = useAnimations(animations, group)
    const textur = useTexture(textu)

    const mintCharacterNFTAction = (characterId) => async () => {
        console.log('in')
        try {
            if (gameContract) {
                setMintingCharacter(true)

<<<<<<< HEAD
  const navigate = useNavigate();

  const updatePresence = useUpdateMyPresence();

  const directionOffset = ({ KeyW, KeyS, KeyA, KeyD }) => {
    let directionOffset = 0;
    if (KeyW) {
      if (KeyA) {
        directionOffset = Math.PI / 4;
      } else if (KeyD) {
        directionOffset = -Math.PI / 4;
      }
    } else if (KeyS) {
      if (KeyA) {
        directionOffset = (Math.PI / 4) * 3;
      } else if (KeyD) {
        directionOffset = (-Math.PI / 4) * 3;
      } else {
        directionOffset = Math.PI;
      }
    } else if (KeyA) {
      directionOffset = Math.PI / 2;
    } else if (KeyD) {
      directionOffset = -Math.PI / 2;
=======
                console.log('Minting Hero in progress...')
                const mintTxn = await gameContract.mintCharacterNFT(0)
                await mintTxn.wait()
                console.log('mintTxn:', mintTxn)
                setMintingCharacter(false)
                setTextu(jeans)
            }
        } catch (error) {
            console.warn('MintCharacterAction Error:', error)
            setMintingCharacter(false)
        }
>>>>>>> 817a34b2f0bb91383fc590a23667a0532c73edb7
    }
    const { KeyW, KeyS, KeyA, KeyD } = useInput()
    const currentAction = useRef()
    const controlsRef = useRef()
    const camera = useThree((state) => state.camera)
    const texture_shirt_green = useTexture(dirty ? dirt : grass)
    texture_shirt_green.wrapS = texture_shirt_green.wrapT = THREE.RepeatWrapping
    let walkDirection = new THREE.Vector3()
    let rotateAngle = new THREE.Vector3(0, 1, 0)
    let rotateQuaterion = new THREE.Quaternion()
    let cameraTarget = new THREE.Vector3()

    const updatePresence = useUpdateMyPresence()

    const directionOffset = ({ KeyW, KeyS, KeyA, KeyD }) => {
        let directionOffset = 0
        if (KeyW) {
            if (KeyA) {
                directionOffset = Math.PI / 4
            } else if (KeyD) {
                directionOffset = -Math.PI / 4
            }
        } else if (KeyS) {
            if (KeyA) {
                directionOffset = (Math.PI / 4) * 3
            } else if (KeyD) {
                directionOffset = (-Math.PI / 4) * 3
            } else {
                directionOffset = Math.PI
            }
        } else if (KeyA) {
            directionOffset = Math.PI / 2
        } else if (KeyD) {
            directionOffset = -Math.PI / 2
        }
        return directionOffset
    }

    const updateCameraTarget = (moveX, moveZ) => {
        camera.position.x += moveX
        camera.position.z += moveZ

        cameraTarget.x = group.current.position.x
        cameraTarget.y = group.current.position.y + 5
        cameraTarget.z = group.current.position.z + 2
        if (controlsRef.current) {
            controlsRef.current.target = cameraTarget
        }
    }

    useEffect(() => {
        let action = ''
        if (KeyW || KeyS || KeyA || KeyD) {
            action = 'walking'
            console.log('walking')
        } else {
            action = 'idle'
            console.log('idle')
        }
        if (currentAction.current !== action) {
            actions[action].reset().fadeIn(0.2).play()
            if (currentAction.current) {
                actions[currentAction.current].fadeOut(0.2)
            }
            currentAction.current = action
        }
    }, [actions, KeyW, KeyS, KeyA, KeyD])

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
            console.log(gameContract)
        } else {
            console.log('Ethereum object not found')
        }
    }, [])
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
        const getCharacters = async () => {
            try {
                console.log('Getting contract characters to mint')

                const charactersTxn =
                    await gameContract.getAllDefaultCharacters()
                console.log('charactersTxn:', charactersTxn)

<<<<<<< HEAD
  return (
    <group>
      <group
        ref={group}
        {...props}
        dispose={null}
        onUpdate={(self) => {
          // console.log(self.position);
          if (
            self.position.x < -227 &&
            self.position.z < -4 &&
            self.position.z > -16
          ) {
            console.log("Portal 1");
            navigate("/merchandise");
          }
          return updatePresence({
            position: {
              x: self.position.x,
              y: self.position.y,
              z: self.position.z,
            },
          });
        }}
      >
        <group name="Scene">
          <group name="Armature" rotation={[Math.PI, 0, Math.PI]}>
            <OrbitControls ref={controlsRef} />
            <primitive object={nodes.mixamorig2Hips} />
            <primitive object={nodes.Ctrl_Master} />
            <primitive object={nodes.Ctrl_ArmPole_IK_Left} />
            <primitive object={nodes.Ctrl_Hand_IK_Left} />
            <primitive object={nodes.Ctrl_ArmPole_IK_Right} />
            <primitive object={nodes.Ctrl_Hand_IK_Right} />
            <primitive object={nodes.Ctrl_Foot_IK_Left} />
            <primitive object={nodes.Ctrl_LegPole_IK_Left} />
            <primitive object={nodes.Ctrl_Foot_IK_Right} />
            <primitive object={nodes.Ctrl_LegPole_IK_Right} />
            <skinnedMesh
              name="Ch22_Body"
              geometry={nodes.Ch22_Body.geometry}
              material={materials.Ch22_body}
              skeleton={nodes.Ch22_Body.skeleton}
            />
            <skinnedMesh
              name="Ch22_Eyelashes"
              geometry={nodes.Ch22_Eyelashes.geometry}
              material={materials.Ch22_hair}
              skeleton={nodes.Ch22_Eyelashes.skeleton}
              material-roughness={1}
            />
            <skinnedMesh
              name="Ch22_Hair"
              geometry={nodes.Ch22_Hair.geometry}
              material={materials.Ch22_hair}
              skeleton={nodes.Ch22_Hair.skeleton}
            />
            <skinnedMesh
              name="Ch22_Pants"
              geometry={nodes.Ch22_Pants.geometry}
              material={materials.Ch22_body}
              skeleton={nodes.Ch22_Pants.skeleton}
              material-color="white"
            />
            <skinnedMesh
              name="Ch22_Shirt"
              geometry={nodes.Ch22_Shirt.geometry}
              skeleton={nodes.Ch22_Shirt.skeleton}
              material-roughness={0}
=======
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
    useFrame((state, delta) => {
        let angleYCameraDirection = Math.atan2(
            camera.position.x - group.current.position.x,
            camera.position.z - group.current.position.z
        )
        let newDirectionOffset = directionOffset({ KeyW, KeyS, KeyA, KeyD })

        rotateQuaterion.setFromAxisAngle(
            rotateAngle,
            angleYCameraDirection + newDirectionOffset
        )
        group.current.quaternion.rotateTowards(rotateQuaterion, 0.2)

        camera.getWorldDirection(walkDirection)
        walkDirection.y = 0
        walkDirection.normalize()
        walkDirection.applyAxisAngle(rotateAngle, newDirectionOffset)
        var velocity = 15
        if (currentAction.current !== 'walking') {
            velocity = 0
        }
        const moveX = walkDirection.x * velocity * delta
        const moveZ = walkDirection.z * velocity * delta
        group.current.position.x += moveX
        group.current.position.z += moveZ

        updateCameraTarget(moveX, moveZ)
    })
    return (
        <group>
            <group
                ref={group}
                {...props}
                dispose={null}
                onUpdate={(self) => {
                    return updatePresence({
                        position: {
                            x: self.position.x,
                            y: self.position.y,
                            z: self.position.z,
                        },
                    })
                }}
>>>>>>> 817a34b2f0bb91383fc590a23667a0532c73edb7
            >
                <group name='Scene'>
                    <group name='Armature' rotation={[Math.PI, 0, Math.PI]}>
                        <OrbitControls ref={controlsRef} />
                        <primitive object={nodes.mixamorig2Hips} />
                        <primitive object={nodes.Ctrl_Master} />
                        <primitive object={nodes.Ctrl_ArmPole_IK_Left} />
                        <primitive object={nodes.Ctrl_Hand_IK_Left} />
                        <primitive object={nodes.Ctrl_ArmPole_IK_Right} />
                        <primitive object={nodes.Ctrl_Hand_IK_Right} />
                        <primitive object={nodes.Ctrl_Foot_IK_Left} />
                        <primitive object={nodes.Ctrl_LegPole_IK_Left} />
                        <primitive object={nodes.Ctrl_Foot_IK_Right} />
                        <primitive object={nodes.Ctrl_LegPole_IK_Right} />
                        <skinnedMesh
                            name='Ch22_Body'
                            geometry={nodes.Ch22_Body.geometry}
                            material={materials.Ch22_body}
                            skeleton={nodes.Ch22_Body.skeleton}
                        />
                        <skinnedMesh
                            name='Ch22_Eyelashes'
                            geometry={nodes.Ch22_Eyelashes.geometry}
                            material={materials.Ch22_hair}
                            skeleton={nodes.Ch22_Eyelashes.skeleton}
                            material-roughness={1}
                        />
                        <skinnedMesh
                            name='Ch22_Hair'
                            geometry={nodes.Ch22_Hair.geometry}
                            material={materials.Ch22_hair}
                            skeleton={nodes.Ch22_Hair.skeleton}
                        />
                        <skinnedMesh
                            name='Ch22_Pants'
                            geometry={nodes.Ch22_Pants.geometry}
                            material={materials.Ch22_body}
                            skeleton={nodes.Ch22_Pants.skeleton}
                            material-color='white'
                        />
                        <skinnedMesh
                            name='Ch22_Shirt'
                            geometry={nodes.Ch22_Shirt.geometry}
                            skeleton={nodes.Ch22_Shirt.skeleton}
                            material-roughness={0}
                        >
                            <meshStandardMaterial
                                map={textur}
                                map-repeat={[4, 4]}
                            />
                        </skinnedMesh>
                        <skinnedMesh
                            name='Ch22_Sneakers'
                            geometry={nodes.Ch22_Sneakers.geometry}
                            material={materials.Ch22_body}
                            skeleton={nodes.Ch22_Sneakers.skeleton}
                        />
                    </group>
                </group>
            </group>
            <mesh>
                <boxGeometry />
                <meshStandardMaterial
                    map={textur}
                    // color={hover === index ? 'hotpink' : 'white'}
                />
            </mesh>
            <mesh
                geometry={nodes.Ch22_Shirt.geometry}
                material-roughness={0}
                position={[-60, 0, -50]}
                rotation={[0, Math.PI, 0]}
                scale={6}
                onClick={mintCharacterNFTAction(0)}
            >
                <meshStandardMaterial
                    map={useTexture(jeans)}
                    map-repeat={[4, 4]}
                />
            </mesh>
            <mesh
                geometry={nodes.Ch22_Shirt.geometry}
                material-roughness={0}
                position={[-50, 0, -50]}
                rotation={[0, Math.PI, 0]}
                scale={6}
                onClick={() => setTextu(redJ)}
            >
                <meshStandardMaterial
                    map={useTexture(redJ)}
                    map-repeat={[4, 4]}
                />
            </mesh>
            <mesh
                geometry={nodes.Ch22_Shirt.geometry}
                material-roughness={0}
                position={[-40, 0, -50]}
                rotation={[0, Math.PI, 0]}
                scale={6}
                onClick={() => setTextu(velvet)}
            >
                <meshStandardMaterial
                    map={useTexture(velvet)}
                    map-repeat={[4, 4]}
                />
            </mesh>
            <mesh
                geometry={nodes.Ch22_Shirt.geometry}
                material-roughness={0}
                position={[-30, 0, -50]}
                rotation={[0, Math.PI, 0]}
                scale={6}
                onClick={() => setTextu(grass)}
            >
                <meshStandardMaterial
                    map={useTexture(grass)}
                    map-repeat={[4, 4]}
                />
            </mesh>
        </group>
    )
}

useGLTF.preload('/player-transformed.glb')
