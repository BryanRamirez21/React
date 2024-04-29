import React from 'react'

export default function GifShowImg({img}) {
    return (
        <div>
            <img height={img.height} width={img.width} src={img.url}></img>
        </div>
    )
}
