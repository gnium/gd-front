import React, { useRef, useState } from "react";
import Button from "../../buttons/Button/Button";
import Popover from "../../Popover/Popover";
import { themeColors } from "../../../config";

interface SelectFieldProps {
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
    /** Controls visibility of the caret icon */
    showCaret?: boolean;

    /** Customizes the caret icon */
    caretIcon?: string;

    /** Sets the caret icon color */
    caretColor?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
    value,
    onChange,
    containerStyle,
    popoverStyle,
    buttonStyle,
    buttonTitleStyle,
    optionStyle,
    activeOptionStyle,
    options = [],
    showCaret = true,
    caretIcon = "chevronDown", // Default to a down arrow
    caretColor = themeColors.text,
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
                    options.find((option) => option.value === selectedValue)?.label ||
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
                    paddingRight: showCaret ? 15 : 10,
                    backgroundColor: '#171518',
                    //justifyContent: 'space-between',
                    ...buttonStyle,
                }}
                endIcon={showCaret ? caretIcon : ""}
                endIconSize={12}
                endIconColor={caretColor}
                endIconStyle={{
                    transition: "transform 0.3s ease-in-out",
                    transform: isPopoverOpen ? "rotate(180deg)" : "rotate(0deg)",
                    //width: 90
                }}
                fullWidth
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
                        {options.map((option) => {
                            const isActive = selectedValue === option.value;

                            return (
                                <button
                                    key={option.value}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleClick(option.value);
                                    }}
                                    className={isActive ? "active" : ""}

                                    style={{
                                        display: "block",
                                        width: "100%",
                                        border: "none",
                                        paddingTop: 10,
                                        paddingBottom: 10,
                                        //padding: "10px 10px",
                                        fontWeight: isActive ? 500 : 300,
                                        textAlign: "center",
                                        //color: isActive ? "#111" : themeColors.medium,
                                        color: themeColors.textTint,
                                        fontSize: ".9em",
                                        margin: "3px",
                                        cursor: "pointer",
                                        lineHeight: 1,
                                        backgroundColor: isActive
                                            ? themeColors.medium
                                            : "transparent",
                                        ...optionStyle,
                                        ...(isActive && activeOptionStyle),

                                    }}

                                >
                                    <span>{option.label}</span>
                                </button>
                            );
                        })}
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

export default SelectField;
