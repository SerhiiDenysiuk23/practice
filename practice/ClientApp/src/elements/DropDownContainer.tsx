import React, {FC, useState} from 'react';

const DropDownContainer: FC<{children: JSX.Element[]}> = ({children}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <ul onClick={()=>setIsOpen(!isOpen)} className={isOpen ? "open" : ""}>
            {children}
        </ul>
    );
};

export default DropDownContainer;