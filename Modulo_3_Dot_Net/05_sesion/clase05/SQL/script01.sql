Create DataBase TiendaDB;
Go
Use TiendaDB;
Go
Create Table Productos(
Id Int Identity(1,1) Primary Key,
Nombre nVarChar(1000) Not Null,
Precio Decimal(18,2) Not Null
);
Insert Into Productos(Nombre, Precio)
Values('iPhone 16 Pro',20000.00), ('Samsung Galaxy 25 Edge',20000.00);
Select * From Productos;
