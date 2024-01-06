import ParasutApiV4 from '../parasut-api-v4'

class InventoryLevels {
  constructor(private parasut: ParasutApiV4) {}

  async index({ queryParams: params, pagination }: ApiRequest<any, any>) {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
      pagination,
    }

    return this.parasut.send<any>('GET', `${this.parasut.options.firmaNo}/inventory_levels`, request)
  }
}

export default InventoryLevels
