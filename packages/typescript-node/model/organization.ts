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

export class Organization {
  /**
   * Purchased FULL licenses
   */
  'fullLicensesPurchased'?: number
  /**
   * Id of the organization
   */
  'id'?: string
  /**
   * Name of the organization
   */
  'name'?: string
  /**
   * Organization plan type
   */
  'plan'?: string | typeof Organization.PlanEnum[keyof typeof Organization.PlanEnum]
  'type'?: string

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'fullLicensesPurchased',
      baseName: 'fullLicensesPurchased',
      type: 'number',
    },
    {
      name: 'id',
      baseName: 'id',
      type: 'string',
    },
    {
      name: 'name',
      baseName: 'name',
      type: 'string',
    },
    {
      name: 'plan',
      baseName: 'plan',
      type: 'Organization.PlanEnum',
    },
    {
      name: 'type',
      baseName: 'type',
      type: 'string',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return Organization.attributeTypeMap
  }
}

export namespace Organization {
  export const PlanEnum = {
    Unknown: 'UNKNOWN',
    Company: 'COMPANY',
    Consultant: 'CONSULTANT',
    ConsultantSlf: 'CONSULTANT_SLF',
    Business: 'BUSINESS',
    PaidTeamOrg: 'PAID_TEAM_ORG',
    IntegrationOrg: 'INTEGRATION_ORG',
    Professional2022: 'PROFESSIONAL_2022',
    EduTeamOrg: 'EDU_TEAM_ORG',
    FreeTeamOrg: 'FREE_TEAM_ORG',
  } as const
}
