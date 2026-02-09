import React from 'react';

// Define the interface for your custom image component
interface IMImage extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    w?: number;
    h?: number;
    blurUrl?: string; // For your loading placeholder
}

export const MImage = ({
    src,
    alt,
    w,
    h,
    blurUrl,
    className,
    ...rest
}: IMImage) => {
    return (
        <img
            src={src}
            alt={alt}
            width={w}
            height={h}
            loading="lazy" // Native browser lazy loading
            fetchPriority={rest.id === 'priority' ? 'high' : 'auto'} 
            style={{
                backgroundImage: blurUrl ? `url(${blurUrl || '/icons/load.gif'})` : 'none',
                backgroundSize: 'cover',
                ...rest.style
            }}
            className={className}
            {...rest}
        />
    );
};