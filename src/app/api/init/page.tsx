// ExampleComponent.tsx
"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ExampleComponent = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxRef.current) {
      gsap.to(boxRef.current, {
        x: 300,
        duration: 2,
        backgroundColor: 'blue',
      });
    }
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: 'red',
      }}
    ></div>
  );
};

export default ExampleComponent;
