/**
 * let transaction of Transactions | sort: [{ key: 'city', direction: 'asc' }, { key: 'price', direction: 'desc' }];
 * */
export default function sort<T>(value: Array<T>, compareBy: (x: T) => unknown, direction?: 'desc'): T[];
export default function sort<T>(value: Array<T>, args?: Array<{ key: string, direction: 'asc' | 'desc' }>): T[];
export default function sort<T>(value: Array<T>, args: Array<{ key: string, direction: 'asc' | 'desc' }> | ((x: T) => unknown) = [], direction?: 'desc') {
    const compareFn = typeof args === 'function'
        ? function (a: T, b: T) {
            const aKey = args(a);
            const bKey = args(b);
            const result = compareTextuallyOrNumerically(aKey, bKey);
            return direction === 'desc' ? -result : result;
        }
        : function (a: T, b: T) {
            for (const arg of args) {
                const keys = arg.key.split('.');
                const aVal = getValue(a, keys);
                const bVal = getValue(b, keys);
                let result = compareTextuallyOrNumerically(aVal, bVal);
                if (arg.direction === 'desc')
                    result = result * -1;
                if (result !== 0)
                    return result;
            }
            return 0;
        };
    return value.slice().sort(compareFn);
}

function getValue(obj, keys: Array<string>) {
    const key = keys[0];
    const value = keys.length > 1 && obj && getValue(obj[key], keys.slice(1)) || obj[key];
    return value;
}

function compareTextuallyOrNumerically(a: unknown, b: unknown) {
    const aValue = Number.isNaN(Number(a)) ? String(a) : Number(a);
    const bValue = Number.isNaN(Number(b)) ? String(b) : Number(b);
    return typeof aValue === 'string' && typeof bValue === 'string' ? aValue.localeCompare(bValue) : Number(aValue) - Number(bValue);
}