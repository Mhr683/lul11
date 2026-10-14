import { Product, Category, Coupon, Review, StoreSettings } from '../types/store';

export const HERO_IMAGE_PATH = '';
export const IMG_HANDBAG = '';
export const IMG_WATCH = '';
export const IMG_FRAGRANCE = '';

export const INITIAL_SETTINGS: StoreSettings = {
  id: 'store_config',
  storeName: 'My Store',
  tagline: 'Quality Products & Reliable Delivery',
  logoUrl: '',
  contactEmail: '',
  supportEmail: '',
  address: '',
  // Central Merchant & Currency Settings
  merchantCountry: 'PK',
  currency: 'PKR',
  secondaryDisplayCurrency: 'USD',
  usdToPkrRate: 278.5,
  isRateStatic: true,
  taxRate: 0,
  // Domestic Logistics
  domesticBaseFee: 250,
  domesticIncludedWeightKg: 1.0,
  domesticAdditionalPerKg: 120,
  domesticFreeShippingThreshold: 5000,
  domesticVolumetricDivisor: 5000,
  domesticSupportedCouriers: ['TCS', 'Leopards Courier', 'M&P Courier', 'Pakistan Post'],
  internationalZones: [],
  allowInternationalManualQuotes: true,
  // Payment Providers
  easypaisaEnabled: false,
  easypaisaStoreId: '',
  easypaisaHashKey: '',
  easypaisaAccountNum: '',
  easypaisaEnvironment: 'sandbox',
  jazzcashEnabled: false,
  jazzcashMerchantId: '',
  jazzcashPassword: '',
  jazzcashIntegritySalt: '',
  jazzcashEnvironment: 'sandbox',
  googleMapsApiKey: '',
  cardEnabled: true,
  installmentsEnabled: false,
  bankAccountEnabled: true,
  sadapayEnabled: false,
  codEnabled: true,
  codMinOrder: 0,
  codMaxOrder: 500000,
  nayapayEnabled: true,
  nayapayAccountTitle: '',
  nayapayNumber: '',
  nayapayInstructions: 'Transfer order amount via NayaPay and submit your Transaction ID (TID) below.',
  raastEnabled: true,
  raastAccountTitle: '',
  raastIban: '',
  bankName: '',
  bankAccountTitle: '',
  bankAccountNumber: '',
  bankIban: '',
  bankTransferInstructions: 'Transfer via Bank or Raast to store account and submit your Transaction ID (TID) below.',
  guestCheckoutEnabled: true,
  aiTone: 'Professional',
  // Client Helpline
  helplinePhone: '',
  helplineWhatsApp: '',
  helplineWhatsAppFormatted: '',
  helplineEmail: '',
  helplineHours: 'Customer Support Desk',
  updatedAt: new Date().toISOString(),
};

export const INITIAL_CATEGORIES: Category[] = [];

export const INITIAL_PRODUCTS: Product[] = [];

export const INITIAL_COUPONS: Coupon[] = [];

export const INITIAL_REVIEWS: Review[] = [];

export const SAMPLE_CSV_TEMPLATE = `sku,name,price,stock,category,brand,shortDescription
SKU-001,Premium Cotton Shirt,2500,50,Apparel,Store Brand,Breathable high quality cotton shirt.
SKU-002,Classic Leather Wallet,1800,30,Accessories,Store Brand,Handcrafted bifold leather wallet.
SKU-003,Stainless Steel Water Bottle,1200,45,Home & Living,Store Brand,Double-walled insulated water bottle.`;
