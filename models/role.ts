/* tslint:disable */
/* eslint-disable */
/**
 * Screenrights Permissions API
 * The Screenrights Permissions API documentation.
 *
 * The version of the OpenAPI document: 0.0.0-dev.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { Permission } from './permission';
// May contain unused imports in some cases
// @ts-ignore
import { UserRole } from './user-role';
// May contain unused imports in some cases
// @ts-ignore
import { UserTypeEnum } from './user-type-enum';

/**
 * 
 * @export
 * @interface Role
 */
export interface Role {
    /**
     * 
     * @type {UserTypeEnum}
     * @memberof Role
     */
    roleType: UserTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Role
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof Role
     */
    displayName: string;
    /**
     * 
     * @type {string}
     * @memberof Role
     */
    description: string;
    /**
     * 
     * @type {Array<Permission>}
     * @memberof Role
     */
    permissions: Array<Permission>;
    /**
     * 
     * @type {Array<UserRole>}
     * @memberof Role
     */
    users: Array<UserRole>;
    /**
     * 
     * @type {string}
     * @memberof Role
     */
    created: string;
    /**
     * 
     * @type {string}
     * @memberof Role
     */
    updated: string;
    /**
     * 
     * @type {string}
     * @memberof Role
     */
    deletedAt?: string;
}



