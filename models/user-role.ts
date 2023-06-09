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
import { Role } from './role';
// May contain unused imports in some cases
// @ts-ignore
import { User } from './user';

/**
 * 
 * @export
 * @interface UserRole
 */
export interface UserRole {
    /**
     * 
     * @type {string}
     * @memberof UserRole
     */
    id: string;
    /**
     * 
     * @type {User}
     * @memberof UserRole
     */
    user: User;
    /**
     * 
     * @type {Role}
     * @memberof UserRole
     */
    role: Role;
    /**
     * 
     * @type {string}
     * @memberof UserRole
     */
    workspaceId: string;
    /**
     * 
     * @type {string}
     * @memberof UserRole
     */
    created: string;
    /**
     * 
     * @type {string}
     * @memberof UserRole
     */
    updated: string;
    /**
     * 
     * @type {string}
     * @memberof UserRole
     */
    deletedAt?: string;
}

