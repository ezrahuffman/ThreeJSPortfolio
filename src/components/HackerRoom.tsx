/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: david.campuzano (https://sketchfab.com/david.campuzano)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/hacker-room-stylized-a0cfe6edf2dd494c8a95addf6bb13a10
Title: Hacker Room - Stylized
*/

import { useGLTF, useTexture } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber';
import { Mesh } from 'three';



const HackerRoom = (props : GroupProps) => {
  const { nodes, materials } = useGLTF('/models/hacker-room.glb');

  const monitortxt = useTexture('/textures/desk/monitor.png');
  const screenTxt = useTexture('/textures/desk/screen.png');

  return (
    <group {...props} dispose={null}>
      <mesh geometry={(nodes.screen_screens_0 as Mesh).geometry} material={materials.screens}>
        <meshMatcapMaterial map={screenTxt} />
      </mesh>
      <mesh geometry={(nodes.screen_glass_glass_0 as Mesh).geometry} material={materials.glass} />
      <mesh geometry={(nodes.table_table_mat_0_1 as Mesh).geometry} material={materials.table_mat} />
      <mesh geometry={(nodes.table_table_mat_0_2 as Mesh).geometry} material={materials.computer_mat}>
        <meshMatcapMaterial map={monitortxt} />
      </mesh>
      <mesh geometry={(nodes.table_table_mat_0_3 as Mesh).geometry} material={materials.server_mat} />
      <mesh geometry={(nodes.table_table_mat_0_4 as Mesh).geometry} material={materials.vhsPlayer_mat} />
      <mesh geometry={(nodes.table_table_mat_0_5 as Mesh).geometry} material={materials.stand_mat} />
      <mesh geometry={(nodes.table_table_mat_0_6 as Mesh).geometry} material={materials.mat_mat} />
      <mesh geometry={(nodes.table_table_mat_0_7 as Mesh).geometry} material={materials.arm_mat} />
      <mesh geometry={(nodes.table_table_mat_0_8 as Mesh).geometry} material={materials.tv_mat}>
        <meshMatcapMaterial map={monitortxt} />
      </mesh>
      <mesh geometry={(nodes.table_table_mat_0_9 as Mesh).geometry} material={materials.cables_mat} />
      <mesh geometry={(nodes.table_table_mat_0_10 as Mesh).geometry} material={materials.props_mat} />
      <mesh geometry={(nodes.table_table_mat_0_11 as Mesh).geometry} material={materials.ground_mat} />
      <mesh geometry={(nodes.table_table_mat_0_12 as Mesh).geometry} material={materials.key_mat} />
    </group>
  );
}

useGLTF.preload('/models/hacker-room.glb')

export default HackerRoom;
