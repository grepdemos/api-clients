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

import {RelativeOffset} from './relativeOffset'

export class ItemConnectionCreationData {
  /**
   * Unique identifier (ID) of the item to which you want to attach the connector. Note that Frames are not supported at the moment.
   */
  'id'?: string
  'position'?: RelativeOffset
  /**
   * The side of the item connector should be attached to, the connection point will be placed in the middle of that side. Option `auto` allows to pick a connection point automatically. Only either `position` or `snapTo` parameter is allowed to be set, if neither provided `snapTo: auto` will be used by default. Possible values: `auto`, `top`, `right`, `bottom`, `left`
   */
  'snapTo'?: string | typeof ItemConnectionCreationData.SnapToEnum[keyof typeof ItemConnectionCreationData.SnapToEnum]

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'id',
      baseName: 'id',
      type: 'string',
    },
    {
      name: 'position',
      baseName: 'position',
      type: 'RelativeOffset',
    },
    {
      name: 'snapTo',
      baseName: 'snapTo',
      type: 'ItemConnectionCreationData.SnapToEnum',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return ItemConnectionCreationData.attributeTypeMap
  }
}

export namespace ItemConnectionCreationData {
  export const SnapToEnum = {
    Auto: 'auto',
    Top: 'top',
    Right: 'right',
    Bottom: 'bottom',
    Left: 'left',
  } as const
}
