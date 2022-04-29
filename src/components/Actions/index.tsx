import { faCheckSquare, faFileSignature, faFilter, faTrashRestoreAlt, IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { Container, Icon, Icons } from "./styles"

type Menus = {
    id: number
    label: string
    icon: IconDefinition
    action: (id?: number) => void
    visible: boolean
}

type ActionsProps = {
    handleFilter: () => void
    isItFiltering: boolean
    setEnableToSelectToDelete: () => void
    enableToSelectToDelete: boolean
    deleteSelectedAppopintments: () => void
}

export default function Actions({ handleFilter, isItFiltering, setEnableToSelectToDelete, enableToSelectToDelete, deleteSelectedAppopintments }: ActionsProps) {

    const handleMenuToDelete = (id?: number) => {
        console.log(id!, ' This is ID', menu)
        setMenu((previous: Menus[]) => {
            return [...previous.map((item: Menus) => {
                return (item.id === 0 || item.id === 1) ? { ...item, visible: !item.visible } : item
            })]
        })
        setEnableToSelectToDelete()
        if (id === 1) deleteSelectedAppopintments()

    }

    const [menu, setMenu] = useState<Menus[]>([
        { id: 0, label: 'Select to delete', icon: faTrashRestoreAlt, action: handleMenuToDelete, visible: enableToSelectToDelete },
        { id: 1, label: 'Delete', icon: faCheckSquare, action: handleMenuToDelete, visible: !enableToSelectToDelete },
        { id: 2, label: 'Filter', icon: faFilter, action: handleFilter, visible: !isItFiltering },
        { id: 3, label: 'Create an Appointment', icon: faFileSignature, action: handleFilter, visible: isItFiltering },
    ])
    useEffect(() => {
        setMenu((previous: Menus[]) => {
            return [...previous.map((item: Menus) => {
                return (item.id === 2 || item.id === 3) ? { ...item, visible: !item.visible } : item

            })]
        })
    }, [isItFiltering])

    return <Container>
        {menu.map((item: Menus) => {
            return (
                <Icons visible={item.visible} key={item.id}>
                    <Icon onClick={() => item.id === 0 || item.id === 1 ? item.action(item.id) : item.action()} size='lg' icon={item.icon} title={item.label} />
                </Icons>
            )
        })}
    </Container>
}
