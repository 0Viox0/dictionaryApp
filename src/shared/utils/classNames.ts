export type ClassNamesArgs =
    | string
    | null
    | undefined
    | number
    | boolean
    | Record<string, boolean | null | undefined>
    | ClassNamesArgs[];

export const classNames = (...args: ClassNamesArgs[]) => {
    const result: string[] = [];

    args.forEach((arg) => {
        if (Array.isArray(arg)) {
            result.push(...arg.map((element) => classNames(element)));
        } else if (typeof arg === 'object' && arg !== null) {
            result.push(...Object.keys(arg).filter((key) => arg[key]));
        } else {
            result.push(...(arg ? [arg.toString()] : []));
        }
    });

    return result.join(' ');
};
