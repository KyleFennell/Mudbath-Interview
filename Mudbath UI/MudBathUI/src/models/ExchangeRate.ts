import { Currency } from "./Currency"

export interface ExchangeRate{
    base: Currency;
    rates: Object;
}