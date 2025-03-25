import React, { useRef, useState } from "react";
import Button from "../../buttons/Button/Button";
import Popover from "../../Popover/Popover";
import { themeColors } from "../../../config";

interface DateFieldProps {
    label?: string;
    description?: string;
    value: string;
    onChange: (optionName: string) => void;
    containerStyle?: React.CSSProperties;
    labelStyle?: React.CSSProperties;
    buttonStyle?: React.CSSProperties;
    buttonTitleStyle?: React.CSSProperties;
    popoverStyle?: React.CSSProperties;
    descriptionStyle?: React.CSSProperties;
    className?: string;
    id?: string;
    options?: { label: string; value: string }[];
    optionStyle?: React.CSSProperties;
    activeOptionStyle?: React.CSSProperties;

    startIcon?: string;
    startIconPaths?: string[];
    startIconSize?: number;
    startIconStyle?: React.CSSProperties;
    startIconColor?: string;

    endIcon?: string;
    endIconPaths?: string[];
    endIconSize?: number;
    endIconStyle?: React.CSSProperties;
    endIconColor?: string;
}

const DateField: React.FC<DateFieldProps> = ({
    label,
    description,
    value,
    onChange,
    containerStyle,
    labelStyle,
    popoverStyle,
    buttonStyle,
    buttonTitleStyle,
    descriptionStyle,
    className,
    id,
    startIcon = 'calendar',
    startIconPaths,
    startIconSize,
    startIconStyle,
    startIconColor = themeColors.secondary,
    endIcon,
    endIconPaths,
    endIconSize,
    endIconStyle,
    endIconColor,


}) => {
    const buttonRef = useRef<HTMLDivElement | null>(null);
    const [isPopoverOpen, setPopoverOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(value);

    const togglePopover = () => setPopoverOpen((prev) => !prev);
    const closePopover = () => setPopoverOpen(false);

    const handleClick = (selectedOption: string) => {
        setSelectedValue(selectedOption);
        onChange(selectedOption);

        setTimeout(() => {
            closePopover();
        }, 500);
    };

    return (
        <div style={{ position: "relative", ...containerStyle }}>
            {/* Button */}
            <Button
                ref={buttonRef}
                title={

                    selectedValue
                }
                type="outline"
                color={themeColors.medium}
                titleStyle={{
                    color: themeColors.textTint,
                    ...buttonTitleStyle
                }}
                onClick={togglePopover}
                style={{
                    //paddingRight: showCaret ? 15 : 10,
                    backgroundColor: '#171518',
                    //justifyContent: 'space-between',
                    ...buttonStyle,
                }}
                //fullWidth
                startIcon={startIcon}
                startIconPaths={startIconPaths}
                startIconSize={startIconSize}
                startIconStyle={startIconStyle}
                startIconColor={startIconColor}
                endIcon={endIcon}
                endIconPaths={endIconPaths}
                endIconSize={endIconSize}
                endIconStyle={endIconStyle}
                endIconColor={endIconColor}
            />




            {/* Popover Dropdown */}
            <Popover
                content={
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: 0,
                            width: "100%",
                        }}
                    >

                    </div>
                }
                anchorRef={buttonRef as React.RefObject<HTMLElement>}
                isOpen={isPopoverOpen}
                onClose={closePopover}
                hasShadow
                containerStyle={{ ...popoverStyle }}
            />
        </div>
    );
};

export default DateField;
