import {
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Resolve
} from '@angular/router';
import { byID } from '../api/model';
import DebitCard from 'src/MLC/Types/DebitCard';
import { Injectable } from '@angular/core';
import ByIdResolver from './by-id-resolver';
import { PersonDebitCard } from '../../../MLC/Types/_import';

@Injectable({ providedIn: 'root' })
export default class extends ByIdResolver<PersonDebitCard> {
    type = 'MLC.Data.Models.PersonDebitCard';
    mapping: Partial<Record<keyof PersonDebitCard, any>> = {
        DebitCard: {
            Address: {
                Zip: { City: { State: true } }
            },
            Number: true,
            maskNumber: true,
            DebitCardTransactions: true,
            PersonDebitCards: true,
            RecentTransactions: true
        }
    };
}
