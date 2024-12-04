INSERT INTO Hotel (Hotel_Name, Address, City, Postal_Code, Phone_Number, Manager_Name) 
VALUES ('Hotel Dhaka Delight', '12/A, Gulshan Avenue', 'Dhaka', '1212', '+8801712345678', 'Abdul Karim');

INSERT INTO Hotel (Hotel_Name, Address, City, Postal_Code, Phone_Number, Manager_Name) 
VALUES ('Chittagong Comfort', '22/B, Agrabad', 'Chittagong', '4000', '+8801719876543', 'Mariam Akter');

INSERT INTO Hotel (Hotel_Name, Address, City, Postal_Code, Phone_Number, Manager_Name) 
VALUES ('Sylhet Serenity', '45/A, Zindabazar', 'Sylhet', '3100', '+8801911234567', 'Rashid Khan');


INSERT INTO Guest (First_Name, Last_Name, National_ID, Phone_Number, Email, Address) 
VALUES ('Rahim', 'Ahmed', '12345678901234567', '+8801712233445', 'rahim.ahmed@example.com', '45/A, Mirpur, Dhaka');

INSERT INTO Guest (First_Name, Last_Name, National_ID, Phone_Number, Email, Address) 
VALUES ('Fatema', 'Begum', NULL, '+8801811122233', 'fatema.begum@example.com', '23/B, Kotwali, Chittagong');

INSERT INTO Guest (First_Name, Last_Name, National_ID, Phone_Number, Email, Address) 
VALUES ('Kamal', 'Hossain', '98765432109876543', '+8801512345678', 'kamal.hossain@example.com', '89/A, Kazitula, Sylhet');


INSERT INTO Room (Hotel_ID, Room_Number, Room_Type, Price_Per_Night, Availability_Status) 
VALUES (1, '101', 'Deluxe', 5000.00, 'Available');

INSERT INTO Room (Hotel_ID, Room_Number, Room_Type, Price_Per_Night, Availability_Status) 
VALUES (1, '102', 'Standard', 3000.00, 'Occupied');

INSERT INTO Room (Hotel_ID, Room_Number, Room_Type, Price_Per_Night, Availability_Status) 
VALUES (2, '201', 'Suite', 8000.00, 'Available');

INSERT INTO Room (Hotel_ID, Room_Number, Room_Type, Price_Per_Night, Availability_Status) 
VALUES (2, '202', 'Standard', 3000.00, 'Under Maintenance');

INSERT INTO Room (Hotel_ID, Room_Number, Room_Type, Price_Per_Night, Availability_Status) 
VALUES (3, '301', 'Deluxe', 4500.00, 'Available');


INSERT INTO Booking (Guest_ID, Room_ID, Booking_Date, Check_In_Date, Check_Out_Date, Total_Amount) 
VALUES (1, 1, TO_DATE('2024-11-25', 'YYYY-MM-DD'), TO_DATE('2024-11-28', 'YYYY-MM-DD'), TO_DATE('2024-12-01', 'YYYY-MM-DD'), 15000.00);

INSERT INTO Booking (Guest_ID, Room_ID, Booking_Date, Check_In_Date, Check_Out_Date, Total_Amount) 
VALUES (2, 3, TO_DATE('2024-11-26', 'YYYY-MM-DD'), TO_DATE('2024-11-30', 'YYYY-MM-DD'), TO_DATE('2024-12-05', 'YYYY-MM-DD'), 40000.00);

INSERT INTO Booking (Guest_ID, Room_ID, Booking_Date, Check_In_Date, Check_Out_Date, Total_Amount) 
VALUES (3, 5, TO_DATE('2024-11-27', 'YYYY-MM-DD'), TO_DATE('2024-12-01', 'YYYY-MM-DD'), TO_DATE('2024-12-03', 'YYYY-MM-DD'), 13500.00);



INSERT INTO Staff (Hotel_ID, Staff_Name, Role, Salary, Joining_Date) 
VALUES (1, 'Sajid Khan', 'Receptionist', 25000.00, TO_DATE('2024-01-10', 'YYYY-MM-DD'));

INSERT INTO Staff (Hotel_ID, Staff_Name, Role, Salary, Joining_Date) 
VALUES (1, 'Mitu Akter', 'Manager', 50000.00, TO_DATE('2023-12-01', 'YYYY-MM-DD'));

INSERT INTO Staff (Hotel_ID, Staff_Name, Role, Salary, Joining_Date) 
VALUES (2, 'Rifat Jahan', 'Housekeeping', 20000.00, TO_DATE('2023-05-15', 'YYYY-MM-DD'));

INSERT INTO Staff (Hotel_ID, Staff_Name, Role, Salary, Joining_Date) 
VALUES (3, 'Tariq Rahman', 'Chef', 35000.00, TO_DATE('2023-08-01', 'YYYY-MM-DD'));