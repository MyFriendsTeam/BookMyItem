export class ScriptUtilities {
    /**
     * Checks object is null or undefined.
     * @param obj Object for which we need to check
     */
    public static IsNullOrUndefined(obj: Object): boolean {
        return obj == null || obj == undefined;
    }

    /**
     * Returns true if machine is a mac machine.
     */
    public static IsMacMachine(): boolean {
        return navigator.platform.indexOf("Mac") !== -1;
    }

    /**
     * Checks nested object is null or undefined.
     */
    public static IsNullOrUndefinedNested(objectNode: any, key: string): boolean {
        var isValid = key.split(".").every(function (x) {
            if (typeof objectNode != "object" || objectNode == null || !(x in objectNode) || objectNode[x] == null)
                return false;
            objectNode = objectNode[x];
            return true;
        });
        return isValid;
    }
    /**
    * Returns a  numeric value
    * @param value value of attribute
    */
    public static getNumericValue(value: string): number {
        if (!ScriptUtilities.IsNullOrUndefined(value)) {
            return parseInt(value);
        }
        return null;
    }
}