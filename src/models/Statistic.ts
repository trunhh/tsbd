export interface StatisticResource {
  date: string;
  total: number;
}

export interface StatisticStringNumber {
  criteria: string;
  total: number;
}


export interface StatisticResponse {
  totalCustomer: number;
  totalProduct: number;
  totalOrder: number;
  totalWaybill: number;
  totalReview: number;
  totalActivePromotion: number;
  totalSupplier: number;
  totalBrand: number;
  statisticRegistration: StatisticResource[];
  statisticReview: StatisticResource[];
  statisticWaybill: StatisticResource[];

  // Báo cáo bán hàng
  statisticOrder: StatisticResource[];
  statisticOrderByResource: StatisticResource[];
  statisticRevenueByDate: StatisticResource[];
  statisticRevenueByProduct: StatisticStringNumber[];
  statisticProfitByDate: StatisticResource[];
  statisticProfitByProduct: StatisticResource[];

  //Báo cáo nhập hàng 
  totalPurchaseQuantity: number;
  totalPurchaseValue: number;
  statisticPurchaseBySupplier: StatisticResource[];
  statisticPurchaseByVariant: StatisticResource[];
  statisticPurchaseValueByDate: StatisticResource[];
  statisticPurchaseQuantityByDate: StatisticResource[];

  //Báo cáo tồn kho
  totalInventoryQuantity: number;
  totalInventoryValue: number;
  movingAverageCost: number;
  inventoryProportion: number;
}
