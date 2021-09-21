import {
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Resolve
} from '@angular/router';
import { Injectable } from '@angular/core';
import Model from '../../../MLC/Types/Model';
import IssueService from '../issue.service';

@Injectable({providedIn: 'root'})
export default class {
    constructor(readonly issueService: IssueService) { }
    async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        await this.issueService.sync();
    }
}