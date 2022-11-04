import dirt from './assets/dirt.jpg'
import React, { useRef, useEffect, useState } from 'react'
import { useGLTF, useAnimations, OrbitControls } from '@react-three/drei'
import { useInput } from './hooks/useInput'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useTexture } from '@react-three/drei'
import grass from './assets/grass_c.jpg'

export function Model(props) {
    const [dirty, setDirty] = useState(false)
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/player-transformed.glb')
    const { actions } = useAnimations(animations, group)
    const textur = useTexture(dirt)

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
            <group ref={group} {...props} dispose={null}>
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
                            material-roughness={0}
                        />
                        <skinnedMesh
                            name='Ch22_Pants'
                            geometry={nodes.Ch22_Pants.geometry}
                            material={materials.Ch22_body}
                            skeleton={nodes.Ch22_Pants.skeleton}
                            material-roughness={0}
                            material-color='white'
                        />
                        <skinnedMesh
                            name='Ch22_Shirt'
                            geometry={nodes.Ch22_Shirt.geometry}
                            skeleton={nodes.Ch22_Shirt.skeleton}
                            material-color='red'
                            material-roughness={0}
                        >
                            <meshStandardMaterial
                                map={texture_shirt_green}
                                map-repeat={[4, 4]}
                            />
                        </skinnedMesh>
                        <skinnedMesh
                            name='Ch22_Sneakers'
                            geometry={nodes.Ch22_Sneakers.geometry}
                            material={materials.Ch22_body}
                            skeleton={nodes.Ch22_Sneakers.skeleton}
                            material-roughness={1}
                        />
                    </group>
                </group>
            </group>
            <mesh onClick={() => setDirty(!dirty)}>
                <boxGeometry />
                <meshStandardMaterial
                    map={textur}
                    // color={hover === index ? 'hotpink' : 'white'}
                />
            </mesh>
        </group>
    )
}

useGLTF.preload('/player-transformed.glb')
