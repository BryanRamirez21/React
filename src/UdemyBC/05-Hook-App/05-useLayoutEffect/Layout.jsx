import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

export const Layout = () => {

    const [size, setSize] = useState({ width: 0, height: 0 });
    const elementRef = useRef(null);

    useLayoutEffect(() => {
    if (elementRef.current) {
        const { offsetWidth, offsetHeight } = elementRef.current;
        setSize({ width: offsetWidth, height: offsetHeight });
    }
    }, []);

    return (
        <div ref={elementRef} style={{ width: '100px', height: '100px', backgroundColor: 'lightblue' }}>
            Width: {size.width}px, Height: {size.height}px
        </div>
    );
}
