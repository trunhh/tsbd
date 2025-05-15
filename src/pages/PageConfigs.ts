import { EntityPropertySchema, EntityPropertyType, SelectOption } from 'types';
import { ListResponse } from 'utils/FetchUtils';
import {
  IconBox,
  IconBrandPaypal,
  IconCash,
  // DeviceTablet,
  // DeviceWatch,
  Icon,
  IconShoppingBag,
  IconHandSanitizer,
  IconCup,
  IconToolsKitchen3

} from '@tabler/icons-react';
import { PaymentMethodType } from 'models/PaymentMethod';

class PageConfigs {
  static properties = {
    id: {
      label: 'ID',
      type: EntityPropertyType.NUMBER,
    },
    createdAt: {
      label: 'Ngày tạo',
      type: EntityPropertyType.DATE,
    },
    updatedAt: {
      label: 'Ngày cập nhật',
      type: EntityPropertyType.DATE,
    },
    createdBy: {
      label: 'Người tạo',
      type: EntityPropertyType.NUMBER,
    },
    updatedBy: {
      label: 'Người cập nhật',
      type: EntityPropertyType.NUMBER,
    },
  };

  static getProperties = (...isShowInTable: boolean[]): EntityPropertySchema => {
    const properties = JSON.parse(JSON.stringify(PageConfigs.properties)) as EntityPropertySchema;
    Object.values(properties).forEach(
      (value, index) => isShowInTable[index] && (value.isShowInTable = isShowInTable[index])
    );
    return properties;
  };

  static initialListResponse: ListResponse = {
    content: [],
    page: 1,
    size: 5,
    totalElements: 0,
    totalPages: 0,
    last: false,
  };

  static initialPageSizeSelectList: SelectOption[] = [
    {
      value: '5',
      label: '5',
    },
    {
      value: '10',
      label: '10',
    },
    {
      value: '25',
      label: '25',
    },
    {
      value: '50',
      label: '50',
    },
  ];

  static categorySlugIconMap: Record<string, Icon> = new Proxy(
    {
      'tui-va-bao-bi': IconShoppingBag,
      'san-pham-lam-sach': IconHandSanitizer,
      'dung-cu-hang-ngay': IconCup,
      'dung-cu-bep': IconToolsKitchen3,
      // 'tablet': DeviceTablet,
      // 'smartwatch': DeviceWatch,
    },
    {
      get: function (target: Record<string, Icon>, name: string) {
        return Object.prototype.hasOwnProperty.call(target, name) ? target[name] : IconBox;
      },
    }
  );

  static paymentMethodIconMap: Record<PaymentMethodType, Icon> = {
    [PaymentMethodType.CASH]: IconCash,
    [PaymentMethodType.PAYPAL]: IconBrandPaypal,
  };

  static paymentMethodNameMap: Record<PaymentMethodType, string> = {
    [PaymentMethodType.CASH]: 'Thanh toán tiền mặt',
    [PaymentMethodType.PAYPAL]: 'Thanh toán PayPal',
  };
}

export default PageConfigs;
