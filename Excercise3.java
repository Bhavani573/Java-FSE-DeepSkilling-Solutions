import java.util.Arrays;

class Product implements Comparable<Product> {
    int productId;
    String productName;
    String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    @Override
    public int compareTo(Product other) {
        return Integer.compare(this.productId, other.productId);
    }

    @Override
    public String toString() {
        return "Product ID: " + productId + ", Name: " + productName + ", Category: " + category;
    }
}

public class Excercise3{

    public static Product linearSearch(Product[] products, int targetId) {
        for (Product product : products) {
            if (product.productId == targetId) {
                return product;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, int targetId) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (products[mid].productId == targetId) {
                return products[mid];
            } else if (products[mid].productId < targetId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }

    public static void main(String[] args) {
        System.out.println("=== Big O Notation ===");
        System.out.println("Big O describes how the time or space complexity of an algorithm grows with input size.");
        System.out.println("Linear Search: O(n) - Worst case is when the target is not found.");
        System.out.println("Binary Search: O(log n) - Requires sorted data. Much faster for large datasets.");
        System.out.println();

        Product[] unsortedProducts = {
            new Product(103, "Shoes", "Footwear"),
            new Product(101, "Phone", "Electronics"),
            new Product(104, "T-shirt", "Apparel"),
            new Product(102, "Laptop", "Electronics")
        };

        int searchId = 104;
        System.out.println("=== Linear Search ===");
        Product foundLinear = linearSearch(unsortedProducts, searchId);
        System.out.println(foundLinear != null ? "Found: " + foundLinear : "Product not found.");

        Product[] sortedProducts = Arrays.copyOf(unsortedProducts, unsortedProducts.length);
        Arrays.sort(sortedProducts);  // Sorts by productId because of Comparable implementation

        System.out.println("\n=== Binary Search ===");
        Product foundBinary = binarySearch(sortedProducts, searchId);
        System.out.println(foundBinary != null ? "Found: " + foundBinary : "Product not found.");

        System.out.println("\n=== Analysis Summary ===");
        System.out.println("Linear Search: Best - O(1), Average - O(n/2), Worst - O(n)");
        System.out.println("Binary Search: Best - O(1), Average/Worst - O(log n), but requires sorted input.");
        System.out.println("Binary Search is more suitable for large, sorted datasets due to faster performance.");
    }
}
