export const APP_NAME        =  process.env.NEXT_PUBLIC_APP_NAME || "NextAmzn"
export const APP_SLOGAN      =  process.env.NEXT_PUBLIC_APP_SLOGAN || "Spend less, enjoy more"
export const APP_DESCRIPTION =  process.env.NEXT_PUBLIC_APP_DESCRIPTION || "An Amazon clone built with Next.js and MongoDB"
export const PAGE_SIZE       =Number(process.env.PAGE_SIZE || 9) 
export const APP_COPYRIGHT   =process.env.NEXT_PUBLIC_APP_COPYRIGHT || `Copyright c 2025 ${APP_NAME} All rights reserved`
export const FREE_SHIPPING_MIN_PRICE =Number(process.env.FREE_SHIPPING_MIN_PRICE || 35)
export const AVAILABLE_PAYMENT_METHODS = [
      {
            name:"Paypal",
            commission:0,
            isDefault:true
      },
      {
            name:"Stripe",
            commission:0,
            isDefault:false
      },
      {
            name:"Cash On Delivery",
            commission:0,
            isDefault:false
      }
]

export const DEFAULT_PAYMENT_METHOD = process.env.DEFAULT_PAYMENT_METHOD || "Paypal"

export const AVAILABLE_DELIVERY_DATES = [
      {
            name:"Today",
            daysToDeliver:1,
            shippingPrice:12.9,
            freeShippingMinPrice:0,
      },
      {
            name:"Next 3 Days",
            daysToDeliver:3,
            shippingPrice:6.9,
            freeShippingMinPrice:0,
      },
      {
            name:"Next 5 Days",
            daysToDeliver:5,
            shippingPrice:4.9,
            freeShippingMinPrice:35,
      }
]
