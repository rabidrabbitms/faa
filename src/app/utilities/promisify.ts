export default function promisify<T>(f: (success: (value: T) => void, error: (err: any) => void) => void) { // tslint:disable-line: no-any
    return function g() {
        return new Promise<T>((
            resolve,
            reject
        ) => {
            f(resolve, reject);
        });
    };
}
