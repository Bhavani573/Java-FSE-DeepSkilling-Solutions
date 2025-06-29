-- Enable output
SET SERVEROUTPUT ON;

-- Drop tables if they already exist
BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE ACCOUNTS';
  EXECUTE IMMEDIATE 'DROP TABLE EMPLOYEES';
EXCEPTION WHEN OTHERS THEN NULL;
END;
/

-- Create ACCOUNTS table
CREATE TABLE ACCOUNTS (
    AccID NUMBER PRIMARY KEY,
    CustName VARCHAR2(50),
    Balance NUMBER,
    AccountType VARCHAR2(20)
);

-- Create EMPLOYEES table
CREATE TABLE EMPLOYEES (
    EmpID NUMBER PRIMARY KEY,
    Name VARCHAR2(50),
    Department VARCHAR2(30),
    Salary NUMBER
);

-- Insert sample data
INSERT INTO ACCOUNTS VALUES (1, 'Alice', 10000, 'Savings');
INSERT INTO ACCOUNTS VALUES (2, 'Bob', 8000, 'Savings');
INSERT INTO ACCOUNTS VALUES (3, 'Carol', 5000, 'Checking');

INSERT INTO EMPLOYEES VALUES (101, 'John', 'Sales', 40000);
INSERT INTO EMPLOYEES VALUES (102, 'Jane', 'Sales', 42000);
INSERT INTO EMPLOYEES VALUES (103, 'Mark', 'IT', 50000);

COMMIT;

-- ====================================
-- Scenario 1: Process Monthly Interest
-- ====================================
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
  FOR rec IN (
    SELECT AccID, Balance FROM ACCOUNTS WHERE AccountType = 'Savings'
  ) LOOP
    UPDATE ACCOUNTS
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccID = rec.AccID;
  END LOOP;

  DBMS_OUTPUT.PUT_LINE('✅ Interest processed for all savings accounts.');
END;
/

-- ====================================
-- Scenario 2: Update Employee Bonus
-- ====================================
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    deptName IN VARCHAR2,
    bonusPercent IN NUMBER
) IS
BEGIN
  UPDATE EMPLOYEES
  SET Salary = Salary + (Salary * bonusPercent / 100)
  WHERE Department = deptName;

  DBMS_OUTPUT.PUT_LINE('✅ Bonus applied to department: ' || deptName);
END;
/

-- ====================================
-- Scenario 3: Transfer Funds
-- ====================================
CREATE OR REPLACE PROCEDURE TransferFunds(
    fromAcc IN NUMBER,
    toAcc IN NUMBER,
    amount IN NUMBER
) IS
  fromBalance NUMBER;
BEGIN
  -- Check balance
  SELECT Balance INTO fromBalance FROM ACCOUNTS WHERE AccID = fromAcc;

  IF fromBalance < amount THEN
    DBMS_OUTPUT.PUT_LINE('❌ Transfer failed: insufficient balance.');
  ELSE
    -- Deduct from source
    UPDATE ACCOUNTS
    SET Balance = Balance - amount
    WHERE AccID = fromAcc;

    -- Add to target
    UPDATE ACCOUNTS
    SET Balance = Balance + amount
    WHERE AccID = toAcc;

    DBMS_OUTPUT.PUT_LINE('✅ ₹' || amount || ' transferred from AccID ' || fromAcc || ' to AccID ' || toAcc);
  END IF;
END;
/

-- ====================================
-- CALLING THE PROCEDURES
-- ====================================

-- Scenario 1: Apply interest
BEGIN
  ProcessMonthlyInterest;
END;
/

-- Scenario 2: Give 10% bonus to Sales department
BEGIN
  UpdateEmployeeBonus('Sales', 10);
END;
/

-- Scenario 3: Transfer ₹2000 from account 1 to 3
BEGIN
  TransferFunds(1, 3, 2000);
END;
/

-- Show final results
SELECT * FROM ACCOUNTS;
SELECT * FROM EMPLOYEES;
