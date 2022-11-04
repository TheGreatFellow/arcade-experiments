import * as THREE from 'three'
import { useTexture } from '@react-three/drei'
import grass from './assets/grass.jpg'
const Ground = (props) => {
    const texture = useTexture(grass)
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping
    return (
        <mesh receiveShadow {...props} rotation-x={-Math.PI / 2}>
            <planeGeometry args={[1000, 1000]} />
            <meshStandardMaterial
                map={texture}
                map-repeat={[40, 40]}
                color='green'
            />
        </mesh>
    )
}

export default Ground
