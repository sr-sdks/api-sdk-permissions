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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { CreateUserRoleDto } from '../models';
// @ts-ignore
import { ErrorResponse } from '../models';
// @ts-ignore
import { UserRole } from '../models';
/**
 * UserRolesApi - axios parameter creator
 * @export
 */
export const UserRolesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new user-role relationship.
         * @summary 
         * @param {CreateUserRoleDto} createUserRoleDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userRolesControllerCreate: async (createUserRoleDto: CreateUserRoleDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createUserRoleDto' is not null or undefined
            assertParamExists('userRolesControllerCreate', 'createUserRoleDto', createUserRoleDto)
            const localVarPath = `/user-role`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createUserRoleDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get all user-role relationships by userId or workspaceId.  (Either userId or workspaceId required.)
         * @summary 
         * @param {string} [userId] 
         * @param {string} [externalUserId] 
         * @param {string} [workspaceId] 
         * @param {string} [permissionKey] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userRolesControllerFindAll: async (userId?: string, externalUserId?: string, workspaceId?: string, permissionKey?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/user-role`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (externalUserId !== undefined) {
                localVarQueryParameter['externalUserId'] = externalUserId;
            }

            if (workspaceId !== undefined) {
                localVarQueryParameter['workspaceId'] = workspaceId;
            }

            if (permissionKey !== undefined) {
                localVarQueryParameter['permissionKey'] = permissionKey;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a user-role relationship by Id.
         * @summary 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userRolesControllerRemove: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('userRolesControllerRemove', 'id', id)
            const localVarPath = `/user-role/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserRolesApi - functional programming interface
 * @export
 */
export const UserRolesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserRolesApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a new user-role relationship.
         * @summary 
         * @param {CreateUserRoleDto} createUserRoleDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userRolesControllerCreate(createUserRoleDto: CreateUserRoleDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserRole>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.userRolesControllerCreate(createUserRoleDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get all user-role relationships by userId or workspaceId.  (Either userId or workspaceId required.)
         * @summary 
         * @param {string} [userId] 
         * @param {string} [externalUserId] 
         * @param {string} [workspaceId] 
         * @param {string} [permissionKey] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userRolesControllerFindAll(userId?: string, externalUserId?: string, workspaceId?: string, permissionKey?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<UserRole>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.userRolesControllerFindAll(userId, externalUserId, workspaceId, permissionKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete a user-role relationship by Id.
         * @summary 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userRolesControllerRemove(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.userRolesControllerRemove(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UserRolesApi - factory interface
 * @export
 */
export const UserRolesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserRolesApiFp(configuration)
    return {
        /**
         * Create a new user-role relationship.
         * @summary 
         * @param {CreateUserRoleDto} createUserRoleDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userRolesControllerCreate(createUserRoleDto: CreateUserRoleDto, options?: any): AxiosPromise<UserRole> {
            return localVarFp.userRolesControllerCreate(createUserRoleDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Get all user-role relationships by userId or workspaceId.  (Either userId or workspaceId required.)
         * @summary 
         * @param {string} [userId] 
         * @param {string} [externalUserId] 
         * @param {string} [workspaceId] 
         * @param {string} [permissionKey] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userRolesControllerFindAll(userId?: string, externalUserId?: string, workspaceId?: string, permissionKey?: string, options?: any): AxiosPromise<Array<UserRole>> {
            return localVarFp.userRolesControllerFindAll(userId, externalUserId, workspaceId, permissionKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a user-role relationship by Id.
         * @summary 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userRolesControllerRemove(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.userRolesControllerRemove(id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserRolesApi - object-oriented interface
 * @export
 * @class UserRolesApi
 * @extends {BaseAPI}
 */
export class UserRolesApi extends BaseAPI {
    /**
     * Create a new user-role relationship.
     * @summary 
     * @param {CreateUserRoleDto} createUserRoleDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserRolesApi
     */
    public userRolesControllerCreate(createUserRoleDto: CreateUserRoleDto, options?: AxiosRequestConfig) {
        return UserRolesApiFp(this.configuration).userRolesControllerCreate(createUserRoleDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get all user-role relationships by userId or workspaceId.  (Either userId or workspaceId required.)
     * @summary 
     * @param {string} [userId] 
     * @param {string} [externalUserId] 
     * @param {string} [workspaceId] 
     * @param {string} [permissionKey] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserRolesApi
     */
    public userRolesControllerFindAll(userId?: string, externalUserId?: string, workspaceId?: string, permissionKey?: string, options?: AxiosRequestConfig) {
        return UserRolesApiFp(this.configuration).userRolesControllerFindAll(userId, externalUserId, workspaceId, permissionKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete a user-role relationship by Id.
     * @summary 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserRolesApi
     */
    public userRolesControllerRemove(id: string, options?: AxiosRequestConfig) {
        return UserRolesApiFp(this.configuration).userRolesControllerRemove(id, options).then((request) => request(this.axios, this.basePath));
    }
}