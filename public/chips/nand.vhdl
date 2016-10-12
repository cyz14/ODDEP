LIBRARY IEEE;
USE IEEE.STD_LOGIC_1164.ALL;
USE IEEE.STD_LOGIC_ARITH.ALL;
USE IEEE.STD_LOGIC_UNSIGNED.ALL;

ENTITY nand IS 
	PORT (
		pin1: IN STD_LOGIC;
		pin2: IN STD_LOGIC;
		pout: OUT STD_LOGIC
	);
END nand;

ARCHITECTURE bhv OF nand IS
BEGIN
	pout <= not (pin1 and pin2);
END bhv; 