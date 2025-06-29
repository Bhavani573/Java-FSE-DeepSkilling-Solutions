class Logger {
    private static Logger instance;
    private Logger() {}
    public static Logger getInstance() 
    {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }
    public void log(String message) {
        System.out.println("Log: " + message);
    }
}

public class Excercise1{
    public static void main(String[] args)
    {
        Logger logger1 = Logger.getInstance();
        logger1.log("First message");
        Logger logger2 = Logger.getInstance();
        logger2.log("Second message");
        if (logger1 == logger2)
        {
            System.out.println("Both logger instances are the same (Singleton works!).");
        } else
        {
            System.out.println("Logger instances are different (Singleton failed).");
        }
    }
}