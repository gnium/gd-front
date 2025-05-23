import React from 'react';
import DotLoader from './DotLoader';
import GridLoader from './GridLoader';
import SpinnerLoader from './SpinnerLoader';


interface LoaderProps {
    type?: 'grid' | 'dot' | 'spinner';
    size?: number;
    color?: string;
    containerStyle?: React.CSSProperties;
}

const Loader: React.FC<LoaderProps> = ({ type = 'spinner', size = 40, color = 'text', containerStyle, }) => {
    const renderLoader = () => {
        switch (type) {
            case 'dot':
                return <DotLoader size={size} color={color} />;
            case 'grid':
                return <GridLoader size={size} color={color} />;
            case 'spinner':
            default:
                return <SpinnerLoader size={size} color={color} />;
        }
    }
    return (
        <div

            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

                ...containerStyle
            }}
        >
            {renderLoader()}
        </div>
    );
};

export default Loader;
