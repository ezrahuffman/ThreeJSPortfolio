import { useGLTF } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import { useRef } from "react";
import { BufferGeometry, Material, Mesh, NormalBufferAttributes, Object3DEventMap, Vector3 } from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Target = (props : MeshProps) => {
    const targetRef = useRef<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>>();
    const {scene} = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf')
    
    useGSAP(() => {
        gsap.to(targetRef?.current?.position as Vector3, 
            {
                y: (targetRef?.current?.position as Vector3).y + 0.5,
                duration: 1.5,
                repeat: -1,
                yoyo: true
            })
    })

    return(
        <mesh {...props} ref = {targetRef as React.Ref<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>>}
        rotation={[0, Math.PI/5, 0]}
        >
            <primitive object={scene}/>
        </mesh>
    );
}

export default Target;