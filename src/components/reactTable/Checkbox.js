import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { EditIcon } from "../../styles/components/reactTable/ReactTable.styled";


export const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
        const defaultRef = React.useRef()
        const resolvedRef = ref || defaultRef

        React.useEffect(() => {
            resolvedRef.current.indeterminate = indeterminate
        }, [resolvedRef, indeterminate])

        return (
            <EditIcon>
                {/* <input type="checkbox" ref={resolvedRef} {...rest} /> */}

                <FontAwesomeIcon icon={faPenToSquare} ref={resolvedRef} {...rest} />
            </EditIcon>
        )
    }
)