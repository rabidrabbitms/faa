import { Injectable } from '@angular/core';
import Model from '../../MLC/Types/Model';
import PropertyMapping from '../../MLC/Types/PropertyMapping';
import TypeMapping from '../../MLC/Types/TypeMapping';
import TypesModel from '../../MLC/Types/TypesModel';
import DeeplyRequired from '../utilities/deeply-required';
import { Fetchable } from './api/requests';
import HttpService from './http.service';
import IssueService from './issue.service';

@Injectable({ providedIn: 'root' })
export default class ModelService {
  constructor(
    readonly issueService: IssueService,
    readonly http: HttpService
  ) { }

  async save<K extends keyof Fetchable>(type: K, model: Fetchable[K], mapping?: TypeMapping<Fetchable[K]>) {
    return <Fetchable[K]>(
      await this.http.post(
        type,
        { method: 'save', controller: 'Model' },
        { Input: { ...(<object>model) }, TypeMapping: mapping }
      )
    );
  }

  async delete<K extends keyof Fetchable>(type: K, id: number) {
    return await this.http.post(
      type,
      { method: 'delete', controller: 'Model' },
      { Input: { ID: id } }
    );
  }
  search<K extends keyof Fetchable>(
    type: K,
    filter?: {},
    mapping?: TypeMapping<Fetchable[K]>
  ): Promise<Fetchable[K][]> {
    return (
      this.http.post(
        type,
        { method: 'Search', controller: 'Model' },
        { Input: { ...filter }, TypeMapping: mapping }
      ) || []
    );
  }
  quickSearch(type: string, filter?: string | undefined) {
    return this.http.post(
      type,
      { method: 'QuickSearch', controller: 'Model' },
      { Input: filter }
    );
  }

  /**
   * @param type the optionally namespace qualified CLR type name of the requested value, e.g. `PersonBankAccount`
   * @param id the id
   * @param mapping optional type mapping
   */
  byID<K extends keyof Fetchable>(
    type: K,
    id: number | undefined,
    mapping?: TypeMapping<Fetchable[K]>
  ): Promise<Overwrite<Fetchable[K], 'ID', number>>;
  byID<K extends keyof Fetchable>(
    type: K,
    id: number | undefined,
    mapping?: TypeMapping<Fetchable[K]>
  ) {
    return this.http.post(
      type,
      { method: 'ByID', controller: 'Model' },
      { Input: id, TypeMapping: mapping }
    );
  }

  async select<K extends keyof Fetchable>(
    type: K,
    selectBy: string | number | object | undefined,
    mapping?: TypeMapping<Fetchable[K]> | object
  ): Promise<
    Fetchable[K] &
    DeeplyRequired<{ [P in keyof TypeMapping<Fetchable[K]>]: Fetchable[K] }>
  > {
    return <Fetchable[K] & DeeplyRequired<{ [P in keyof TypeMapping<Fetchable[K]>]: Fetchable[K] }>>(
      await this.http.post(
        type,
        { method: 'Select', controller: 'Model' },
        { Input: { ...(<{}>selectBy) }, TypeMapping: mapping }
      )
    );
  }

  async getProperty<R extends keyof Fetchable, K extends keyof Fetchable[R], M = Fetchable[R][K] extends Array<infer T> ? TypeMapping<T> : TypeMapping<Fetchable[R][K]>>(
    type: R,
    id: number,
    property: K,
    mapping?: PropertyMapping<Fetchable[R][K]>
  ): Promise<Fetchable[R][K]>;
  async getProperty(
    type: string,
    id: number,
    property: string,
    // tslint:disable-next-line:no-any
    mapping?: TypeMapping<any>
  ) {
    const http = this.http;
    return <{}>await createGetProperty(type)(id, property, <any>mapping);

    function createGetProperty<T extends Model = Model>(
      type: string
    ): <K extends keyof T>(
        id?: number,
        property?: string,
        mapping?: TypeMapping<T[K]>
      ) => Promise<T[K]>;
    function createGetProperty<A extends T[], T extends Model = A[number]>(
      type: string
    ): <K extends keyof T>(
        id?: number,
        property?: string,
        mapping?: TypeMapping<T[K]>
      ) => Promise<A>;

    function createGetProperty<T extends Model>(type: string) {
      return async function <K extends keyof T>(
        id?: number,
        property?: K,
        mapping?: TypeMapping<T[K]>
      ) {
        const propertyValue = await http.post(
          type,
          { method: 'GetProperty', controller: 'Model' },
          { Input: id, Property: property, TypeMapping: mapping }
        );
        return <T[K]>propertyValue;
      };
    }
  }

  /**
   *
   * @param name the name of the stored procedure
   * @param parameters parameters is an array of objects.  Object is "Name"/"Value" (See nav loan queue glance for example)
   */
  async procedure(name: string, parameters?: Array<{ Name: string, Value }>) {
    return await this.http.post(
      "",
      { method: 'Report', controller: 'Model' },
      { ProcedureName: name, Parameters: parameters }
    );
  }
  async fetchTypes() {
    return <TypesModel>(
      await this.http.post(
        { method: 'Types', controller: 'Model' },
        { Input: {} }
      )
    );
  }
}
