import React from 'react';

// Props interface for the Thumbnail component
interface ThumbnailProps {
    src: string; // URL of the image to display
    alt?: string; // Alternative text for accessibility
    size?: 'sm' | 'md' | 'lg'; // Size of the thumbnail
    shape?: 'circle' | 'square' | 'rounded'; // Shape of the thumbnail
    onClick?: () => void; // Click handler for the thumbnail
    border?: 'none' | 'thin' | 'thick'; // Border style
    className?: string; // Custom class name for additional styling
    style?: React.CSSProperties; // Inline styles for the component
}

// Default size mapping
const sizeMap = {
    sm: '44px',
    md: '60px',
    lg: '80px',
};

const Thumbnail: React.FC<ThumbnailProps> = ({
    src,
    alt = '',
    size = 'md',
    shape = 'circle',
    onClick,
    border = 'none',
    className,
    style,
}) => {
    return (
        <div
            className={`thumbnail-container ${className || ''}`}
            style={{
                width: sizeMap[size],
                height: sizeMap[size],
                borderRadius: shape === 'circle' ? '50%' : shape === 'rounded' ? '8px' : '0',
                border: border !== 'none' ? (border === 'thin' ? '1px solid #ccc' : '2px solid #000') : 'none',
                position: 'relative',
                overflow: 'hidden',
                ...style,
            }}
            onClick={onClick}
        >
            {/* Image element */}
            <img
                src={src}
                alt={alt}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
            />
        </div>
    );
};

export default Thumbnail;
