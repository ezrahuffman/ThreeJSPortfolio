import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import React, { useRef } from "react";
import { Group, Object3DEventMap } from "three";

type HeroCamProps = {
    children: React.ReactNode,
    isMobile: boolean
}


const HeroCamera = ({children, isMobile}: HeroCamProps) => {

    const groupRef = useRef<Group<Object3DEventMap>>(null);

    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [0, 0, 20], .25, delta);
    
        if (!isMobile && groupRef.current){
            easing.dampE(groupRef.current.rotation, [-state.pointer.y/3, -state.pointer.x/5, 0], .25, delta);
        }
    })

    return (
    <group ref={groupRef}>
        {children}
    </group>
    );
};

export default HeroCamera;