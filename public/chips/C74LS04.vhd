LIBRARY IEEE;
USE IEEE.STD_LOGIC_1164.ALL;
USE IEEE.STD_LOGIC_ARITH.ALL;
USE IEEE.STD_LOGIC_UNSIGNED.ALL;

Entity C74LS04 IS 
    PORT (
        port1: IN STD_LOGIC;
        port2: OUT STD_LOGIC;
        port3: IN STD_LOGIC;
        port4: OUT STD_LOGIC;
        port5: IN STD_LOGIC;
        port6: OUT STD_LOGIC;
        port7: IN STD_LOGIC; -- GND
        port8: OUT STD_LOGIC;
        port9: IN STD_LOGIC;
        port10: OUT STD_LOGIC;
        port11: IN STD_LOGIC;
        port12: OUT STD_LOGIC;
        port13: IN STD_LOGIC;
        port14: IN STD_LOGIC -- VCC 5V
    );
END C74LS04;

ARCHITECTURE rt3 OF C74LS00 IS
    COMPONENT nand IS 
        PORT (
            pin1: IN STD_LOGIC;
            pout: OUT STD_LOGIC
        );
    END COMPONENT;

BEGIN
    pin2 <= not port1;
    pin4 <= not port4;
    pin6 <= not port5;
    pin8 <= not port9;
	pin10<= not port11;
	pin12<= not port13;
END;