/**
 * Miro API
 * Miro API
 *
 * The version of the OpenAPI document: 0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import fetch, {Response} from 'node-fetch';
import * as http from 'http';

/* tslint:disable:no-unused-locals */
import { CardCreateRequest } from '../model/cardCreateRequest';
import { CardItem } from '../model/cardItem';
import { CardUpdateRequest } from '../model/cardUpdateRequest';
import { GetBoards400Response } from '../model/getBoards400Response';

import { ObjectSerializer } from '../model/models';

import { HttpError } from './apis';

let defaultBasePath = 'https://api.miro.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================


export interface CardsApiMethods {
    /**
     * Adds a card item to a board<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">boards:write</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 2</a><br/>
     * @summary Create card item
     * @param boardId [Unique identifier (ID) of the board](https://developers.miro.com/reference/board-model) where you want to create the item.
     * @param cardCreateRequest 
     */
    createCardItem(boardId: string, cardCreateRequest: CardCreateRequest, ): Promise<{ response: Response; body: CardItem;  }>
    /**
     * Deletes a card item from the board.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">boards:write</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 3</a><br/>
     * @summary Delete card item
     * @param boardId [Unique identifier (ID) of the board](https://developers.miro.com/reference/board-model) from which you want to delete the item.
     * @param itemId [Unique identifier (ID) of the item](https://developers.miro.com/reference/rest-api-item-model) that you want to delete.
     */
    deleteCardItem(boardId: string, itemId: string, ): Promise<{ response: Response; body: object;  }>
    /**
     * Retrieves information for a specific card item on a board<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">boards:read</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 1</a><br/>
     * @summary Get card item
     * @param boardId [Unique identifier (ID) of the board](https://developers.miro.com/reference/board-model) from which you want to retrieve a specific item.
     * @param itemId [Unique identifier (ID) of the item](https://developers.miro.com/reference/rest-api-item-model) that you want to retrieve.
     */
    getCardItem(boardId: string, itemId: string, ): Promise<{ response: Response; body: CardItem;  }>
    /**
     * Updates a card item on a board based on the data and style properties provided in the request body.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">boards:write</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 2</a><br/>
     * @summary Update card item
     * @param boardId [Unique identifier (ID) of the board](https://developers.miro.com/reference/board-model) where you want to update the item.
     * @param itemId [Unique identifier (ID) of the item](https://developers.miro.com/reference/rest-api-item-model) that you want to update.
     * @param cardUpdateRequest 
     */
    updateCardItem(boardId: string, itemId: string, cardUpdateRequest: CardUpdateRequest, ): Promise<{ response: Response; body: CardItem;  }>
}

export function CardsApi (accessToken: string|(() => Promise<string>), basePath: string = defaultBasePath, logger?: (...thing: any) => void): CardsApiMethods {
    return {
        createCardItem: async function (boardId: string, cardCreateRequest: CardCreateRequest, ) : Promise<{ response: Response; body: CardItem;  }> {
            const localVarPath = '/v2/boards/{board_id}/cards'
                .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)));
            let localVarQueryParameters = new URLSearchParams();
            let localVarHeaderParams: Record<string, string> = {}
            const produces = ['application/json'];
            // give precedence to 'application/json'
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            } else {
                localVarHeaderParams.Accept = produces.join(',');
            }

            // verify required parameter 'boardId' is not null or undefined
            if (boardId === null || boardId === undefined) {
                throw new Error('Required parameter boardId was null or undefined when calling createCardItem.');
            }

            // verify required parameter 'cardCreateRequest' is not null or undefined
            if (cardCreateRequest === null || cardCreateRequest === undefined) {
                throw new Error('Required parameter cardCreateRequest was null or undefined when calling createCardItem.');
            }


            const resource = new URL(localVarPath, basePath)
            resource.search = localVarQueryParameters.toString()


const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${typeof accessToken === 'function' ? await accessToken() : accessToken}`
                },
                body: JSON.stringify(ObjectSerializer.serialize(cardCreateRequest, "CardCreateRequest"))
            }

            if (typeof logger === 'function') logger('FETCH', resource.toString(), options)

            const response = await fetch(resource, options)

            if (typeof logger === 'function') logger('RESPONSE', response)

            let bodyAsJson: unknown
            try {
                bodyAsJson = await response.json()
            } catch (err) {
                // Body doesn't have valid json
            }

            if (!response.ok) {
                throw new HttpError(response, bodyAsJson, response.status)
            }

            const body = ObjectSerializer.deserialize(bodyAsJson, "CardItem");

            return({response, body})
        },
        deleteCardItem: async function (boardId: string, itemId: string, ) : Promise<{ response: Response; body: object;  }> {
            const localVarPath = '/v2/boards/{board_id}/cards/{item_id}'
                .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
                .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)));
            let localVarQueryParameters = new URLSearchParams();
            let localVarHeaderParams: Record<string, string> = {}
            const produces = ['*/*', 'application/json'];
            // give precedence to 'application/json'
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            } else {
                localVarHeaderParams.Accept = produces.join(',');
            }

            // verify required parameter 'boardId' is not null or undefined
            if (boardId === null || boardId === undefined) {
                throw new Error('Required parameter boardId was null or undefined when calling deleteCardItem.');
            }

            // verify required parameter 'itemId' is not null or undefined
            if (itemId === null || itemId === undefined) {
                throw new Error('Required parameter itemId was null or undefined when calling deleteCardItem.');
            }


            const resource = new URL(localVarPath, basePath)
            resource.search = localVarQueryParameters.toString()


const options = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${typeof accessToken === 'function' ? await accessToken() : accessToken}`
                },
            }

            if (typeof logger === 'function') logger('FETCH', resource.toString(), options)

            const response = await fetch(resource, options)

            if (typeof logger === 'function') logger('RESPONSE', response)

            let bodyAsJson: unknown
            try {
                bodyAsJson = await response.json()
            } catch (err) {
                // Body doesn't have valid json
            }

            if (!response.ok) {
                throw new HttpError(response, bodyAsJson, response.status)
            }

            const body = ObjectSerializer.deserialize(bodyAsJson, "object");

            return({response, body})
        },
        getCardItem: async function (boardId: string, itemId: string, ) : Promise<{ response: Response; body: CardItem;  }> {
            const localVarPath = '/v2/boards/{board_id}/cards/{item_id}'
                .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
                .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)));
            let localVarQueryParameters = new URLSearchParams();
            let localVarHeaderParams: Record<string, string> = {}
            const produces = ['application/json'];
            // give precedence to 'application/json'
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            } else {
                localVarHeaderParams.Accept = produces.join(',');
            }

            // verify required parameter 'boardId' is not null or undefined
            if (boardId === null || boardId === undefined) {
                throw new Error('Required parameter boardId was null or undefined when calling getCardItem.');
            }

            // verify required parameter 'itemId' is not null or undefined
            if (itemId === null || itemId === undefined) {
                throw new Error('Required parameter itemId was null or undefined when calling getCardItem.');
            }


            const resource = new URL(localVarPath, basePath)
            resource.search = localVarQueryParameters.toString()


const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${typeof accessToken === 'function' ? await accessToken() : accessToken}`
                },
            }

            if (typeof logger === 'function') logger('FETCH', resource.toString(), options)

            const response = await fetch(resource, options)

            if (typeof logger === 'function') logger('RESPONSE', response)

            let bodyAsJson: unknown
            try {
                bodyAsJson = await response.json()
            } catch (err) {
                // Body doesn't have valid json
            }

            if (!response.ok) {
                throw new HttpError(response, bodyAsJson, response.status)
            }

            const body = ObjectSerializer.deserialize(bodyAsJson, "CardItem");

            return({response, body})
        },
        updateCardItem: async function (boardId: string, itemId: string, cardUpdateRequest: CardUpdateRequest, ) : Promise<{ response: Response; body: CardItem;  }> {
            const localVarPath = '/v2/boards/{board_id}/cards/{item_id}'
                .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
                .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)));
            let localVarQueryParameters = new URLSearchParams();
            let localVarHeaderParams: Record<string, string> = {}
            const produces = ['application/json'];
            // give precedence to 'application/json'
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            } else {
                localVarHeaderParams.Accept = produces.join(',');
            }

            // verify required parameter 'boardId' is not null or undefined
            if (boardId === null || boardId === undefined) {
                throw new Error('Required parameter boardId was null or undefined when calling updateCardItem.');
            }

            // verify required parameter 'itemId' is not null or undefined
            if (itemId === null || itemId === undefined) {
                throw new Error('Required parameter itemId was null or undefined when calling updateCardItem.');
            }

            // verify required parameter 'cardUpdateRequest' is not null or undefined
            if (cardUpdateRequest === null || cardUpdateRequest === undefined) {
                throw new Error('Required parameter cardUpdateRequest was null or undefined when calling updateCardItem.');
            }


            const resource = new URL(localVarPath, basePath)
            resource.search = localVarQueryParameters.toString()


const options = {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${typeof accessToken === 'function' ? await accessToken() : accessToken}`
                },
                body: JSON.stringify(ObjectSerializer.serialize(cardUpdateRequest, "CardUpdateRequest"))
            }

            if (typeof logger === 'function') logger('FETCH', resource.toString(), options)

            const response = await fetch(resource, options)

            if (typeof logger === 'function') logger('RESPONSE', response)

            let bodyAsJson: unknown
            try {
                bodyAsJson = await response.json()
            } catch (err) {
                // Body doesn't have valid json
            }

            if (!response.ok) {
                throw new HttpError(response, bodyAsJson, response.status)
            }

            const body = ObjectSerializer.deserialize(bodyAsJson, "CardItem");

            return({response, body})
        },
    }
}
