import { ClientCategoryResponse, ClientListedProductResponse } from 'types';
import { MessageResponse } from 'models/Message';

class MockUtils {
  static featuredCategories: ClientCategoryResponse[] = [
    {
      categoryName: 'Bao bì xanh',
      categorySlug: 'tui-va-bao-bi',
      categoryChildren: [],
    },
    {
      categoryName: 'Làm sạch tự nhiên',
      categorySlug: 'san-pham-lam-sach',
      categoryChildren: [],
    },
    {
      categoryName: 'Dụng cụ hàng ngày',
      categorySlug: 'dung-cu-hang-ngay',
      categoryChildren: [],
    },
    {
      categoryName: 'Dụng cụ bếp tái sử dụng',
      categorySlug: 'dung-cu-bep',
      categoryChildren: [],
    },
  ];
  

  static allCategories: ClientCategoryResponse[] = [
    {
      categoryName: 'Túi và bao bì thân thiện môi trường',
      categorySlug: 'tui-va-bao-bi',
      categoryChildren: [],
    },
    {
      categoryName: 'Sản phẩm làm sạch tự nhiên',
      categorySlug: 'san-pham-lam-sach',
      categoryChildren: [],
    },
    {
      categoryName: 'Dụng cụ hàng ngày',
      categorySlug: 'dung-cu-hang-ngay',
      categoryChildren: [],
    },
    {
      categoryName: 'Dụng cụ bếp tái sử dụng',
      categorySlug: 'dung-cu-bep',
      categoryChildren: [],
    },
  ];


  static sampleCategory: ClientCategoryResponse = {
    categoryName: 'MacBook',
    categorySlug: 'laptop-macbook',
    categoryChildren: [
      {
        categoryName: 'MacBook Air',
        categorySlug: 'laptop-macbook-air',
        categoryChildren: [],
      },
    ],
    categoryParent: {
      categoryName: 'Apple',
      categorySlug: 'laptop-apple',
      categoryChildren: [],
      categoryParent: {
        categoryName: 'Laptop',
        categorySlug: 'laptop',
        categoryChildren: [],
      },
    },
  };

  static sampleProduct: ClientListedProductResponse = {
    productId: 1,
    productName: 'Lenovo Legion 5 Pro 2022',
    productSlug: 'lenovo-legion-5-pro-2022',
    productThumbnail: 'https://dummyimage.com/400x400/e8e8e8/6e6e6e.png',
    productPriceRange: [10_000_000, 12_000_000],
    productVariants: [],
    productSaleable: true,
    productPromotion: {
      promotionId: 1,
      promotionPercent: 10,
    },
  };

  static sampleMessages: MessageResponse[] = [
    {
      id: 2,
      createdAt: '',
      updatedAt: '',
      content: 'This is a content',
      status: 1,
      user: {
        id: 1,
        username: 'dtreat3',
        fullname: 'Admin',
        email: '',
      },
    },
    {
      id: 1,
      createdAt: '',
      updatedAt: '',
      content: 'This is a content',
      status: 1,
      user: {
        id: 4,
        username: 'dtreat3',
        fullname: 'Daniel',
        email: '',
      },
    },
  ];
}

export default MockUtils;
