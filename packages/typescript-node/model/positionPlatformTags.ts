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

/**
 * Contains location information about the item, such as its x coordinate, y coordinate, and theorigin of the x and y coordinates.
 */
export class PositionPlatformTags {
  /**
   * Area of the item that is referenced by its x and y coordinates. For example, an item with a center origin will have its x and y coordinates point to its center. The center point of the board has x: 0 and y: 0 coordinates. Currently, only one option is supported. Possible values: `center`
   */
  'origin'?: string | typeof PositionPlatformTags.OriginEnum[keyof typeof PositionPlatformTags.OriginEnum] =
    PositionPlatformTags.OriginEnum.Center
  'relativeTo'?: string | typeof PositionPlatformTags.RelativeToEnum[keyof typeof PositionPlatformTags.RelativeToEnum]
  /**
   * X-axis coordinate of the location of the item on the board. By default, all items have absolute positioning to the board, not the current viewport. The center point of the board has `x: 0` and `y: 0` coordinates.
   */
  'x'?: number = 0
  /**
   * Y-axis coordinate of the location of the item on the board. By default, all items have absolute positioning to the board, not the current viewport. The center point of the board has `x: 0` and `y: 0` coordinates.
   */
  'y'?: number = 0

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'origin',
      baseName: 'origin',
      type: 'PositionPlatformTags.OriginEnum',
    },
    {
      name: 'relativeTo',
      baseName: 'relativeTo',
      type: 'PositionPlatformTags.RelativeToEnum',
    },
    {
      name: 'x',
      baseName: 'x',
      type: 'number',
    },
    {
      name: 'y',
      baseName: 'y',
      type: 'number',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return PositionPlatformTags.attributeTypeMap
  }
}

export namespace PositionPlatformTags {
  export const OriginEnum = {
    Center: 'center',
  } as const
  export const RelativeToEnum = {
    CanvasCenter: 'canvas_center',
    ParentTopLeft: 'parent_top_left',
  } as const
}
