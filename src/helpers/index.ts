export interface IObjectValidationsProperties {
    key: string;
    type: string;
    required?: boolean;
}

interface IObjectValidationsReturn {
    hasRequiredInputs: boolean;
    passTypeValidations: boolean;
    inputs: Array<{ key: string; has: boolean; typeValid?: boolean; }>;
}

/**
 * Validate properties of an object
 * @param o object;
 * @param properties array; Must contain key and type for validate
 * @returns object;
 *
 * First validate if the key exists, then validate type of the values
 * Some types in javascript refers an object, in this function only take the "Array" case. If you want to use another like "null"
 * add the validation.
 * The final object returns two keys with a boolean value thats say if all validations are passed or not and finally the object
 */
 export function objectValidations(o: object, properties: Array<IObjectValidationsProperties>): IObjectValidationsReturn | undefined {
    let validations: Array<{ key: string; has: boolean; typeValid?: boolean; }> = [];
    if (typeof o === "undefined") return;
    properties.forEach(property => {
        if (o.hasOwnProperty(property.key) && property.required) {
            const ifRequired = () => {
                if (property.type != "array") {
                    return typeof (o as any)[property.key] === property.type && (o as any)[property.key] !== "" && (o as any)[property.key] !== null;
                } else {
                    return Array.isArray((o as any)[property.key]);
                }
            };
            validations.push({
                key: property.key,
                has: true,
                typeValid: ifRequired(),
            });
        } else if (o.hasOwnProperty(property.key)) {
            validations.push({
                key: property.key,
                has: true,
                typeValid: property.type != "array" ? typeof (o as any)[property.key] === property.type : Array.isArray((o as any)[property.key]),
            });
        } else {
            validations.push({
                key: property.key,
                has: property.required ? false : true,
                typeValid: property.required ? false : true,
            });
        }
    });

    return {
        hasRequiredInputs: validations.every(x => x.has),
        passTypeValidations: validations.every(x => x.typeValid),
        inputs: validations,
    };
}