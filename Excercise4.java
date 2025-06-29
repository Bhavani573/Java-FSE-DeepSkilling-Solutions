public class Excercise4 {

   
    public static double predictFutureValue(double currentValue, double growthRate, int years) {
        
        if (years == 0) {
            return currentValue;
        }

        double newValue = currentValue * (1 + growthRate);
        return predictFutureValue(newValue, growthRate, years - 1);
    }

    public static double predictFutureValueMemo(double currentValue, double growthRate, int years, double[] memo) {
        if (years == 0) return currentValue;
        if (memo[years] != 0) return memo[years];
        memo[years] = predictFutureValueMemo(currentValue, growthRate, years - 1, memo) * (1 + growthRate);
        return memo[years];
    }

    public static void main(String[] args) {
        double initialValue = 1000.0; 
        double annualGrowthRate = 0.05; 
        int years = 5; 

        double forecastedValue = predictFutureValue(initialValue, annualGrowthRate, years);
        System.out.printf("Predicted Value after %d years (recursive): %.2f%n", years, forecastedValue);

        double[] memo = new double[years + 1];
        double forecastedMemo = predictFutureValueMemo(initialValue, annualGrowthRate, years, memo);
        System.out.printf("Predicted Value after %d years (memoized): %.2f%n", years, forecastedMemo);

        System.out.println("\n=== Analysis ===");
        System.out.println("Recursion simplifies problems like compound growth by expressing them in terms of smaller subproblems.");
        System.out.println("Time Complexity of naive recursion: O(n), where n is the number of years.");
        System.out.println("Memoization helps avoid redundant computations in overlapping recursive calls.");
        System.out.println("For this problem, since each year depends only on the previous year, memoization isn't strictly needed but useful in more complex models.");
    }
}
