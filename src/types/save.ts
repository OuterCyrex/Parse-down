import { functionalButton } from "./functional.ts"

export class SaveButton implements functionalButton {
    label: string;
    ShortCut?: ((event: KeyboardEvent) => void);
    Valid: boolean;
    CoreFunction: () => void;

    constructor( label: string, CoreFunction: () => void, ShortCut?: (event: KeyboardEvent) => void) {
        this.label = label;
        this.CoreFunction = CoreFunction;
        this.Valid = true;
        this.ShortCut = ShortCut || (_ => {})
    }
}
