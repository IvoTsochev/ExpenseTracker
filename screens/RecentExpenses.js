import { StyleSheet, Text, View } from "react-native";
import { ExpensesOutput } from "../components/ExpensesOutput/ExpensesOutput";

export const RecentExpenses = (props) => {
  return <ExpensesOutput expensesPeriod="Last 7 Days" />;
};

const styles = StyleSheet.create({});
