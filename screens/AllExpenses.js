import { StyleSheet, Text, View } from "react-native";
import { ExpensesOutput } from "../components/ExpensesOutput/ExpensesOutput";

export const AllExpenses = (props) => {
  return <ExpensesOutput expensesPeriod="Total" />;
};

const styles = StyleSheet.create({});
