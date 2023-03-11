import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

export function loadGLTFModel(
    scene,
    glbPath,
    options = { receiveShadow: true, castShadow: true }
) {
    const { receiveShadow, castShadow } = options
    return new Promise((resolve, reject) => {
        const dracoLoader = new DRACOLoader()
        const loader = new GLTFLoader()

        dracoLoader.setDecoderPath('/examples/jsm/libs/draco/')
        loader.setDRACOLoader(dracoLoader)

        loader.load(
            glbPath,
            gltf => {
                const obj = gltf.scene
                obj.name = 'frog'
                obj.position.y = 0
                obj.position.x = 0
                obj.receiveShadow = receiveShadow
                obj.castShadow = castShadow
                scene.add(obj)

                // obj.traverse(function (child) {
                //     if (child.isMesh) {
                //         child.castShadow = castShadow
                //         child.receiveShadow = receiveShadow
                //     }
                // })
                resolve(obj)
            },
            undefined,
            function (error) {
                reject(error)
            }
        )
    })
}