import { PerspectiveCamera } from "@react-three/drei";
import { Canvas, Vector3 } from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../components/Target";
import Cube from "../components/Cube";
import Ring from "../components/Ring";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";

const Hero = ({}) => {
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});
    const isSmall = useMediaQuery({maxWidth:440});

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return(
        <section className="min-h-screen w-full flex-col relative" id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    High my name is Ezra.
                </p>
                <p className="hero_tag text-gray_gradient  z-10">
                    Building applications and tools.
                </p>
            </div>
            <div className="w-full h-full absolute inset-0 z-0">
                <Canvas className="w-full h-full z-0">
                    <Suspense fallback={<CanvasLoader/>}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]}/>
                        <HeroCamera isMobile={isMobile}>
                        <HackerRoom scale={sizes.deskScale}
                         position = {sizes.deskPosition as Vector3}
                         rotation={[0.24, Math.PI, 0]}/>

                         <group>
                            <Target position={sizes.targetPosition as Vector3}/>
                            <Ring position={sizes.ringPosition as Vector3}/>
                            <Cube position={sizes.cubePosition as Vector3}/>
                         </group>


                        <ambientLight intensity={1}/>
                        </HeroCamera>
                        <directionalLight position={[10, 10, 10]} intensity={0.5}/>
                    </Suspense>
                </Canvas>
            </div>

            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#contact" className="w-fit">
                    <Button name="Let's work together" isBeam containerClass = "sm:w-fit w-full sm:min-w-96"/>
                </a>
            </div>
        </section>
    )
};

export default Hero;