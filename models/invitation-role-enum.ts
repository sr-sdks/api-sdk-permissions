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



/**
 * 
 * @export
 * @enum {string}
 */

export const InvitationRoleEnum = {
    User: 'workspace-user',
    Admin: 'workspace-admin',
    Owner: 'workspace-owner'
} as const;

export type InvitationRoleEnum = typeof InvitationRoleEnum[keyof typeof InvitationRoleEnum];



