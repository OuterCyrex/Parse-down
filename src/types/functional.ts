export interface functionalButton {
    label: string
    Valid: boolean
    CoreFunction: () => void
}

export interface dropdownMenu {
    label: string
    buttons: Array<functionalButton>
}

export class DefaultFuncButton implements functionalButton {
    label: string
    Valid: boolean
    CoreFunction: () => void

    constructor(label: string, CoreFunction: () => void, Valid?: boolean) {
        this.label = label
        this.Valid = Valid === undefined ? true : Valid
        this.CoreFunction = CoreFunction
    }
}
