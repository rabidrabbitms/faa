import {
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Resolve
} from '@angular/router';
import Loan from '../../../MLC/Types/Loan';
import { Injectable } from '@angular/core';
import resolveLoan from './resolve-loan';

@Injectable({ providedIn: 'root' })
export default class implements Resolve<Loan> {
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const loanId = Number(route.params.id);
        return resolveLoan(loanId);
    }
}
