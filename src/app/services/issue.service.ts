import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Issue from 'src/MLC/Types/issue';
import { BehaviorSubject } from 'rxjs';
import { IssueStatus } from '../../MLC/Types/IssueStatus';
import { IssueType } from '../../MLC/Types/IssueType';
import { issues } from './api/customer';
import { Global } from './Global';

const issues$ = new BehaviorSubject<IssueModel[]>([]);
let syncing = false;

@Injectable({ providedIn: 'root' })
export default class IssueService {
    constructor(readonly global: Global, readonly router: Router) {
        this.issues$.subscribe(issues => {
            if (issues && issues[0] && issues[0].Module) {
                this.currentIssue = issues[0];
            }
        });
    }
    currentIssue;
    async sync() {
        syncing = true; try {
            const results = await issues(this.global.personID);
            issues$.next(results.map(issue => this.issueAction(issue)).sort((a, b) => a.Priority > b.Priority ? 1 : -1));
        } finally {
            syncing = false;
        }
    }

    async getCurrentIssue() {
        const result = await issues(this.global.personID);
        if (!result[0])
            return undefined;

        return this.issueAction(result[0]);
    }

    get issues$() {
        return issues$.asObservable();
    }
    get syncing() {
        return syncing;
    }
    issueAction(issue: Issue): IssueModel {
        const issueModel = { ...issue, Priority: 1, Module: 'denial' };
        if (issue.Type === IssueType.Error) {
            if (issue.Status === IssueStatus.Open) {
                switch (issue.Name) {
                    case "Date of Birth Missing":
                    case "Date of Birth":
                    case "Invalid Date of Birth":
                    case "Address Required":
                    case "Invalid Address":
                        issueModel.Module = "detail";
                        break;
                    case "Phone Number Required":
                    case "Mobile Phone Missing":
                    case "Mobile Phone Not Verified":
                    case "Confirm Phone":
                        issueModel.Module = "phone";
                        break;
                    case "Income Required":
                    case "Invalid Income":
                    case "Confirm Income":
                        issueModel.Module = "income";
                        break;
                    case "Debit Card Required":
                    case "Debit Card Revoked":
                    case "Confirm Debit Card":
                        issueModel.Module = "debit";
                        break;
                    case "Bank Account Required":
                    case "Bank Account Revoked":
                    case "Confirm Bank Account":
                        issueModel.Module = "bank";
                        break;
                }
            }
        }
        //If the issue has an Item and the Item has an ID, update the Module to be specific:
        if (issueModel.Module !== "denial") {
            if (issue.Item?.ID)
                issueModel.Item = issue.Item;
        }
        issueModel.Module = issueModel.Module;
        return issueModel;
    }
}

export interface IssueModel extends Issue {
    Priority: number;
    Module: string;
}
