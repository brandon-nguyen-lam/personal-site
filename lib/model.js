export async function loadGLTFModel(
    scene,
    glbPath,
    options = { receiveShadow: true, castShadow: true }
) {
    const { receiveShadow, castShadow } = options
    return new Promise(async (resolve, reject) => {
        try {
            // Lazily import the GLTFLoader module
            const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader')
            const loader = new GLTFLoader()

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

                    obj.traverse(function (child) {
                        if (child.isMesh) {
                            child.castShadow = castShadow
                            child.receiveShadow = receiveShadow
                        }
                    })
                    resolve(obj)
                },
                undefined,
                function (error) {
                    reject(error)
                }
            )
        } catch (error) {
            reject(error)
        }
    })
}
