import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as React from "react";
import InfoCallout from "./InfoCallout";

export class PCFInfoCallout implements ComponentFramework.ReactControl<IInputs, IOutputs> {
    private notifyOutputChanged: () => void;
    private _isDisabled: boolean;
    private context: ComponentFramework.Context<IInputs>;

    constructor() {}

    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary
    ): void {
        this.notifyOutputChanged = notifyOutputChanged;
        this.context = context;
        this._isDisabled = context.mode.isControlDisabled;
    }

    public updateView(context: ComponentFramework.Context<IInputs>): React.ReactElement {
        this.context = context;
        this._isDisabled = context.mode.isControlDisabled;

        const props = {
            labelText: context.parameters.labelText.raw || "",
            labelColor: context.parameters.labelColor?.raw || "#000000",
            isBold: context.parameters.isBold?.raw || false,
            isItalic: context.parameters.isItalic?.raw || false,
        };

        return React.createElement(InfoCallout, props);
    }

    public getOutputs(): IOutputs {
        return {};
    }

    public destroy(): void {
        // Cleanup if necessary
    }
}
