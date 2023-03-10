import React, { useState, useEffect } from 'react'

export const useWidth = () => {
  const [width, setWidth]   = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return width;
}
