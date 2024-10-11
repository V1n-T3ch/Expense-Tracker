export interface ExpenseType {
  id: string;
  name: string;
  amount: string
  percentage: string;
}

export interface IncomeType {
  id: string;
  name: string;
  amount: string;
}

export interface SpendingType {
  id: string;
  name: string;
  amount: string;
  date: string;
}

export interface CardType {
  id: string;
  name: string;
  creditCardNumber: string;
  balance: string;
}