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
import { InvitationRoleEnum } from './invitation-role-enum';
// May contain unused imports in some cases
// @ts-ignore
import { InvitationStatusEnum } from './invitation-status-enum';
// May contain unused imports in some cases
// @ts-ignore
import { InvitationTemplateEnum } from './invitation-template-enum';

/**
 * 
 * @export
 * @interface Invitation
 */
export interface Invitation {
    /**
     * 
     * @type {InvitationStatusEnum}
     * @memberof Invitation
     */
    invitationStatus: InvitationStatusEnum;
    /**
     * 
     * @type {InvitationTemplateEnum}
     * @memberof Invitation
     */
    invitationTemplate: InvitationTemplateEnum;
    /**
     * 
     * @type {Array<InvitationRoleEnum>}
     * @memberof Invitation
     */
    userRoles: Array<InvitationRoleEnum>;
    /**
     * 
     * @type {string}
     * @memberof Invitation
     */
    _id: string;
    /**
     * 
     * @type {string}
     * @memberof Invitation
     */
    workspaceId: string;
    /**
     * 
     * @type {string}
     * @memberof Invitation
     */
    inviteeName: string;
    /**
     * 
     * @type {string}
     * @memberof Invitation
     */
    emailAddress: string;
    /**
     * 
     * @type {string}
     * @memberof Invitation
     */
    inviter?: string;
    /**
     * 
     * @type {string}
     * @memberof Invitation
     */
    workspaceName?: string;
    /**
     * 
     * @type {string}
     * @memberof Invitation
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof Invitation
     */
    expires: string;
    /**
     * 
     * @type {string}
     * @memberof Invitation
     */
    created: string;
    /**
     * 
     * @type {string}
     * @memberof Invitation
     */
    updated: string;
    /**
     * 
     * @type {string}
     * @memberof Invitation
     */
    deletedAt?: string;
}



