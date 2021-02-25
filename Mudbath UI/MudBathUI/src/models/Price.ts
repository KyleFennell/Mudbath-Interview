import { Currency } from "./Currency";

export  interface Price{
    base: Currency;
    amount: Number;
}