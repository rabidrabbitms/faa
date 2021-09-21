import { post } from '../../http/post';
import Person from 'src/MLC/Types/Person';
import PersonBankAccount from 'src/MLC/Types/PersonBankAccount';
import Loan from 'src/MLC/Types/Loan';
import Model from 'src/MLC/Types/Model';

//export async function decrypt(type: string, id?: number, property?: string) {
//    return await post(
//        type,
//        { method: 'DecryptProperty', controller: 'Model' },
//        { Input: id, Property: property }
//    );
//}
export async function getProperty<T extends Model = Model>(
    type: string,
    id?: number,
    property?: string,
    mapping?: Mapping<T>
) {
    return await (<any>createGetProperty(type)(id, property, mapping));
}
export function createGetProperty<T extends Model = Model>(
    type: string
): <K extends keyof T>(
    id?: number,
    property?: string,
    mapping?: Mapping<T>
) => Promise<T[K]>;
export function createGetProperty<
    A extends T[] = T[],
    T extends Model = A[number]
>(
    type: string
): <K extends keyof T>(
    id?: number,
    property?: string,
    mapping?: Mapping<T>
) => Promise<A>;

export function createGetProperty<T extends Model = Model>(type: string) {
    return async function<K extends keyof T>(
        id?: number,
        property?: K,
        mapping?: Partial<Record<keyof T, any>>
    ) {
        const propertyValue = await post(
            type,
            { method: 'GetProperty', controller: 'Model' },
            { Input: id, Property: property, TypeMapping: mapping }
        );
        return <T[K]>propertyValue;
    };
}

export async function select(type: string, model: any, mapping?: any) {
    return await post(
        type,
        { method: 'Select', controller: 'Model' },
        { Input: { ...model }, TypeMapping: mapping }
    );
}

/**
 * @param type the CLR type name of the requested `MLC.Data.Models.Model`.
 * @param id the id
 * @param mapping optional type mapping
 */
export async function byID(
    type: 'MLC.Data.Models.Person',
    id?: number,
    mapping?: Mapping<Person>
): Promise<Person>;
export async function byID(
    type: 'MLC.Data.Models.PersonBankAccount',
    id?: number,
    mapping?: Mapping<PersonBankAccount>
): Promise<PersonBankAccount>;
export async function byID(
    type: 'MLC.Data.Models.Loan',
    id?: number,
    mapping?: Mapping<Loan>
): Promise<Loan>;

export async function byID<T extends Model = Model>(
    type: string,
    id?: number,
    mapping?: Mapping<T>
): Promise<T>;
export async function byID<T extends Model = Model>(
    type: string,
    id?: number,
    mapping?: any
);
export async function byID<T extends Model = Model>(
    type: string,
    id?: number,
    mapping?: Mapping<T>
) {
    return <T>(
        await post(
            type,
            { method: 'ByID', controller: 'Model' },
            { Input: id, TypeMapping: mapping }
        )
    );
}
export async function search(type: string, filter: any, mapping?: object) {
    return <any[]>(
        await post(
            type,
            { method: 'Search', controller: 'Model' },
            { Input: { ...filter }, TypeMapping: mapping }
        )
    );
}

export async function save<T extends object>(
    type: string,
    model: T,
    mapping?: object
) {
    return <T>(
        await post(
            type,
            { method: 'save', controller: 'Model' },
            { Input: { ...(<object>model) }, TypeMapping: mapping }
        )
    );
}

export async function deleteModel(type: string, id: number) {
    return await post(
        type,
        { method: 'delete', controller: 'Model' },
        { Input: { ID: id } }
    );
}

export async function types() {
    return await post(
        '',
        { method: 'Types', controller: 'Model' },
        { Input: {} }
    );
}

export type Mapping<T extends Model> = Partial<Record<keyof Loan, any>>;
