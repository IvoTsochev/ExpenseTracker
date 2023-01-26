import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { ExpensesList } from "./ExpensesList";
import { ExpensesSummary } from "./ExpensesSummary";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    amount: 94.12,
    description: "This is the first expense",
    date: new Date("2021-01-14"),
  },
  {
    id: "e2",
    amount: 99.99,
    description: "This is the second expense",
    date: new Date("2021-02-15"),
  },
  {
    id: "e3",
    amount: 29.99,
    description: "This is the third expense",
    date: new Date("2021-02-16"),
  },
  {
    id: "e4",
    amount: 59.99,
    description: "This is the fourth expense",
    date: new Date("2021-02-17"),
  },
  {
    id: "e5",
    amount: 19.99,
    description: "This is the fifth expense",
    date: new Date("2021-02-18"),
  },
  {
    id: "e6",
    amount: 49.99,
    description: "This is the sixth expense",
    date: new Date("2021-02-19"),
  },
  {
    id: "e7",
    amount: 79.99,
    description: "This is the seventh expense",
    date: new Date("2021-02-20"),
  },
];

export const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
