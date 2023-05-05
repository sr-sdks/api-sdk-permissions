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
import { Invitation } from './invitation';
// May contain unused imports in some cases
// @ts-ignore
import { PaginationMeta } from './pagination-meta';

/**
 * 
 * @export
 * @interface PaginatedInvitationsDto
 */
export interface PaginatedInvitationsDto {
    /**
     * 
     * @type {Array<Invitation>}
     * @memberof PaginatedInvitationsDto
     */
    items: Array<Invitation>;
    /**
     * 
     * @type {PaginationMeta}
     * @memberof PaginatedInvitationsDto
     */
    meta: PaginationMeta;
}

