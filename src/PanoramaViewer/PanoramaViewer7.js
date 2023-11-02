import React, { useEffect, useRef } from 'react';
import * as PANOLENS from 'panolens';
import * as THREE from 'three';
import image from '../assets/image1.jpeg';

const PanoramaViewer7 = (prop) => {
  const viewerRef = useRef(null);

  useEffect(() => {
    const panoramaImage = new PANOLENS.ImagePanorama(image);
    const viewer = new PANOLENS.Viewer({
      container: viewerRef.current,
      autoRotate: true,
      autoRotateSpeed: 0.3,
      controlBar: false,
    });
    viewer.add(panoramaImage);
  }, []);

  return (
    <div className='flex h-[100vh] items-center bg-black'>
      <div ref={viewerRef} className="flex h-[100%] fixed w-[100%]"></div>
    </div>
    
  );
};

export default PanoramaViewer7;
