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
import { UserRole } from './user-role';
// May contain unused imports in some cases
// @ts-ignore
import { UserTypeEnum } from './user-type-enum';

/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {UserTypeEnum}
     * @memberof User
     */
    userType: UserTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    externalAuthId: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    middleName?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    lastName: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    emailAddress: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    imageUri?: string;
    /**
     * 
     * @type {Array<UserRole>}
     * @memberof User
     */
    roles: Array<UserRole>;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    created: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    updated: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    deletedAt?: string;
}



