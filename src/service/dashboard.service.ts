import { IBaseService, BaseService } from "./base.service";

export interface IDashboardService extends IBaseService<any, any> {

}
export class DashboardService extends BaseService<any, any> implements IDashboardService {
    constructor() {
        super("");
    }

}