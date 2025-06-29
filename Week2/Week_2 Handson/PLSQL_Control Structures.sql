-- Enable output for DBMS_OUTPUT
SET SERVEROUTPUT ON;

-- Drop existing tables (optional)
BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE LOANS';
  EXECUTE IMMEDIATE 'DROP TABLE CUSTOMERS';
EXCEPTION
  WHEN OTHERS THEN NULL;
END;
/

-- Create Customers Table
CREATE TABLE CUSTOMERS (
  CustID NUMBER PRIMARY KEY,
  Name VARCHAR2(50),
  Age NUMBER,
  Balance NUMBER,
  IsVIP VARCHAR2(5),
  InterestRate NUMBER
);

-- Create Loans Table
CREATE TABLE LOANS (
  LoanID NUMBER PRIMARY KEY,
  CustID NUMBER REFERENCES CUSTOMERS(CustID),
  DueDate DATE
);

-- Insert Sample Data
INSERT INTO CUSTOMERS VALUES (1, 'John', 65, 20000, 'FALSE', 10);
INSERT INTO CUSTOMERS VALUES (2, 'Alice', 30, 8000, 'FALSE', 12);
INSERT INTO CUSTOMERS VALUES (3, 'Raj', 70, 15000, 'FALSE', 11);
INSERT INTO CUSTOMERS VALUES (4, 'Meena', 40, 12000, 'FALSE', 13);

INSERT INTO LOANS VALUES (101, 1, SYSDATE + 10); -- Due soon
INSERT INTO LOANS VALUES (102, 2, SYSDATE + 45); -- Not due soon
INSERT INTO LOANS VALUES (103, 3, SYSDATE + 5);  -- Due soon

COMMIT;

-- ====================================
-- Scenario 1: Apply 1% Interest Discount for Age > 60
-- ====================================
BEGIN
  FOR rec IN (SELECT CustID, InterestRate FROM CUSTOMERS WHERE Age > 60) LOOP
    UPDATE CUSTOMERS
    SET InterestRate = rec.InterestRate - 1
    WHERE CustID = rec.CustID;
  END LOOP;

  DBMS_OUTPUT.PUT_LINE('✅ Scenario 1: Interest rate discounted for customers over 60.');
  COMMIT;
END;
/

-- ====================================
-- Scenario 2: Set VIP for Balance > 10000
-- ====================================
BEGIN
  FOR rec IN (SELECT CustID, IsVIP FROM CUSTOMERS WHERE Balance > 10000) LOOP
    UPDATE CUSTOMERS
    SET IsVIP = 'TRUE'
    WHERE CustID = rec.CustID;
  END LOOP;

  DBMS_OUTPUT.PUT_LINE('✅ Scenario 2: VIP status updated for high-balance customers.');
  COMMIT;
END;
/

-- ====================================
-- Scenario 3: Loan Reminders for Due in 30 Days
-- ====================================
BEGIN
  FOR rec IN (
    SELECT L.LoanID, C.Name, L.DueDate
    FROM LOANS L
    JOIN CUSTOMERS C ON C.CustID = L.CustID
    WHERE L.DueDate <= SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE('🔔 Reminder: Loan ID ' || rec.LoanID || 
                         ' for customer ' || rec.Name || 
                         ' is due on ' || TO_CHAR(rec.DueDate, 'DD-MON-YYYY'));
  END LOOP;
END;
/

-- View final data
SELECT * FROM CUSTOMERS;
SELECT * FROM LOANS;
