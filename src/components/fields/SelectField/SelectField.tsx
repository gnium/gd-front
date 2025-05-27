import React, { useRef, useState } from "react";
import Button from "../../buttons/Button/Button";
import Popover from "../../Popover/Popover";
import { themeColors } from "../../../config";

interface SelectFieldProps {
    value: string;
    onChange: (value: string) => void;
    options: { value: string; label: string }[];
    disabled?: boolean;
    caretColor?: string;
    style?: React.CSSProperties;
}

const SelectField: React.FC<SelectFieldProps> = ({
    value,
    onChange,
    options,
    disabled = false,
    caretColor,
    style
}) => {
    const buttonRef = useRef<HTMLDivElement | null>(null);
    const [isPopoverOpen, setPopoverOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(value);

    const togglePopover = () => setPopoverOpen((prev) => !prev);
    const closePopover = () => setPopoverOpen(false);

    const handleClick = (selectedOption: string) => {
        setSelectedValue(selectedOption);
        onChange(selectedOption);
        closePopover();
    };

    return (
        <div style={{ position: "relative", ...style }}>
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
                }}
                onClick={togglePopover}
                style={{
                    paddingRight: 10,
                    backgroundColor: '#171518',
                }}
                endIcon="chevronDown"
                endIconSize={12}
                endIconColor={caretColor}
                fullWidth
                disabled={disabled}
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
                                        fontWeight: isActive ? 500 : 300,
                                        textAlign: "center",
                                        color: themeColors.textTint,
                                        fontSize: ".9em",
                                        margin: "3px",
                                        cursor: "pointer",
                                        lineHeight: 1,
                                        backgroundColor: isActive
                                            ? themeColors.medium
                                            : "transparent",
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
            />
        </div>
    );
};

export default SelectField;
