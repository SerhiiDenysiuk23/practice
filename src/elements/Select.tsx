import React, {FC, useEffect, useState} from 'react';

export interface Option {
    label: string,
    value: any
}

type SelectPropsType = {
    selectHandler(option: any): void,
    options: Option[]
    title?: string
}

const Select: FC<SelectPropsType> = ({options, selectHandler, title}) => {
    const [isOptionsOpen, setIsOptionsOpen] = useState(false)
    const [selectedOptionId, setSelectedOptionId] = useState(0)

    const setSelectedThenCloseDropdown = (index: number) => {
        setSelectedOptionId(index)
        selectHandler(options[index].value)
        setIsOptionsOpen(false)
    }

    const mouseListener = (event: MouseEvent) => {
        const element = event.target as Element
        if (!element.classList.contains('options') && !element.classList.contains('select-button')) {
            setIsOptionsOpen(false)
        }
    }

    useEffect(() => {
        window.addEventListener('click', mouseListener)
    }, [window.onload])


    return (
        <div className={"select-wrapper"}>
            <button
                aria-haspopup={"listbox"}
                aria-expanded={isOptionsOpen}
                className={"select-button " + (isOptionsOpen ? "expanded" : "")}
                onClick={() => setIsOptionsOpen(!isOptionsOpen)}>
                {options[selectedOptionId].label}
            </button>

            <ul
                className={`options ${isOptionsOpen ? "show" : ""}`}
                role={"listbox"}
                aria-activedescendant={options[selectedOptionId].label}
                tabIndex={-1}>
                {
                    options.map((option, index) => (
                        option != options[selectedOptionId] && title != option.label
                            ? <li
                                key={index}
                                id={option.label}
                                role={"option"}
                                aria-selected={selectedOptionId == index}
                                tabIndex={0}
                                onClick={() => setSelectedThenCloseDropdown(index)}>
                                {option.label}
                            </li>
                            : null
                    ))
                }
            </ul>
        </div>
    )
}

export default Select