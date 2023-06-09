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
import { CreateRoleDto } from '../models';
// @ts-ignore
import { ErrorResponse } from '../models';
// @ts-ignore
import { Role } from '../models';
// @ts-ignore
import { UpdateRoleDto } from '../models';
/**
 * RolesApi - axios parameter creator
 * @export
 */
export const RolesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new role.
         * @summary 
         * @param {CreateRoleDto} createRoleDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rolesControllerCreate: async (createRoleDto: CreateRoleDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createRoleDto' is not null or undefined
            assertParamExists('rolesControllerCreate', 'createRoleDto', createRoleDto)
            const localVarPath = `/role`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(createRoleDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get all roles.
         * @summary 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rolesControllerFindAll: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/role`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
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
        /**
         * Get role by Key.
         * @summary 
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rolesControllerFindOne: async (key: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'key' is not null or undefined
            assertParamExists('rolesControllerFindOne', 'key', key)
            const localVarPath = `/role/{key}`
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
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
        /**
         * Delete role by Key.
         * @summary 
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rolesControllerRemove: async (key: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'key' is not null or undefined
            assertParamExists('rolesControllerRemove', 'key', key)
            const localVarPath = `/role/{key}`
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
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
        /**
         * Update an existing role.
         * @summary 
         * @param {string} key 
         * @param {UpdateRoleDto} updateRoleDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rolesControllerUpdate: async (key: string, updateRoleDto: UpdateRoleDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'key' is not null or undefined
            assertParamExists('rolesControllerUpdate', 'key', key)
            // verify required parameter 'updateRoleDto' is not null or undefined
            assertParamExists('rolesControllerUpdate', 'updateRoleDto', updateRoleDto)
            const localVarPath = `/role/{key}`
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateRoleDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RolesApi - functional programming interface
 * @export
 */
export const RolesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RolesApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a new role.
         * @summary 
         * @param {CreateRoleDto} createRoleDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async rolesControllerCreate(createRoleDto: CreateRoleDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Role>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.rolesControllerCreate(createRoleDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get all roles.
         * @summary 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async rolesControllerFindAll(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Role>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.rolesControllerFindAll(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get role by Key.
         * @summary 
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async rolesControllerFindOne(key: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Role>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.rolesControllerFindOne(key, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete role by Key.
         * @summary 
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async rolesControllerRemove(key: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.rolesControllerRemove(key, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update an existing role.
         * @summary 
         * @param {string} key 
         * @param {UpdateRoleDto} updateRoleDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async rolesControllerUpdate(key: string, updateRoleDto: UpdateRoleDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Role>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.rolesControllerUpdate(key, updateRoleDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * RolesApi - factory interface
 * @export
 */
export const RolesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RolesApiFp(configuration)
    return {
        /**
         * Create a new role.
         * @summary 
         * @param {CreateRoleDto} createRoleDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rolesControllerCreate(createRoleDto: CreateRoleDto, options?: any): AxiosPromise<Role> {
            return localVarFp.rolesControllerCreate(createRoleDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Get all roles.
         * @summary 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rolesControllerFindAll(options?: any): AxiosPromise<Array<Role>> {
            return localVarFp.rolesControllerFindAll(options).then((request) => request(axios, basePath));
        },
        /**
         * Get role by Key.
         * @summary 
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rolesControllerFindOne(key: string, options?: any): AxiosPromise<Role> {
            return localVarFp.rolesControllerFindOne(key, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete role by Key.
         * @summary 
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rolesControllerRemove(key: string, options?: any): AxiosPromise<void> {
            return localVarFp.rolesControllerRemove(key, options).then((request) => request(axios, basePath));
        },
        /**
         * Update an existing role.
         * @summary 
         * @param {string} key 
         * @param {UpdateRoleDto} updateRoleDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rolesControllerUpdate(key: string, updateRoleDto: UpdateRoleDto, options?: any): AxiosPromise<Role> {
            return localVarFp.rolesControllerUpdate(key, updateRoleDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RolesApi - object-oriented interface
 * @export
 * @class RolesApi
 * @extends {BaseAPI}
 */
export class RolesApi extends BaseAPI {
    /**
     * Create a new role.
     * @summary 
     * @param {CreateRoleDto} createRoleDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RolesApi
     */
    public rolesControllerCreate(createRoleDto: CreateRoleDto, options?: AxiosRequestConfig) {
        return RolesApiFp(this.configuration).rolesControllerCreate(createRoleDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get all roles.
     * @summary 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RolesApi
     */
    public rolesControllerFindAll(options?: AxiosRequestConfig) {
        return RolesApiFp(this.configuration).rolesControllerFindAll(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get role by Key.
     * @summary 
     * @param {string} key 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RolesApi
     */
    public rolesControllerFindOne(key: string, options?: AxiosRequestConfig) {
        return RolesApiFp(this.configuration).rolesControllerFindOne(key, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete role by Key.
     * @summary 
     * @param {string} key 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RolesApi
     */
    public rolesControllerRemove(key: string, options?: AxiosRequestConfig) {
        return RolesApiFp(this.configuration).rolesControllerRemove(key, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update an existing role.
     * @summary 
     * @param {string} key 
     * @param {UpdateRoleDto} updateRoleDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RolesApi
     */
    public rolesControllerUpdate(key: string, updateRoleDto: UpdateRoleDto, options?: AxiosRequestConfig) {
        return RolesApiFp(this.configuration).rolesControllerUpdate(key, updateRoleDto, options).then((request) => request(this.axios, this.basePath));
    }
}
