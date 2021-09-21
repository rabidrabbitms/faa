import {
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Resolve
} from '@angular/router';
import { byID } from '../api/model';
import Loan from 'src/MLC/Types/Loan';
import { Injectable } from '@angular/core';
import Model from '../../../MLC/Types/Model';

export default abstract class ByIdResolver<T extends Model>
    implements Resolve<T> {
    abstract get type(): string;
    async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const debitCard = await byID(
            this.type,
            Number(route.paramMap.get('id')),
            this.mapping
        );
        return debitCard;
    }
    mapping?: Partial<Record<keyof T, any>>;
}
