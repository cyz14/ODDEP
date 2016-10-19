LIBRARY IEEE;
USE IEEE.STD_LOGIC_1164.ALL;
USE IEEE.STD_LOGIC_ARITH.ALL;
USE IEEE.STD_LOGIC_UNSIGNED.ALL;

Entity C74LS74 IS 
    PORT (
        port1: IN STD_LOGIC;
        port2: IN STD_LOGIC;
        port3: IN STD_LOGIC;
        port4: IN STD_LOGIC;
        port5: OUT STD_LOGIC;
        port6: OUT STD_LOGIC;
        port7: IN STD_LOGIC; -- GND
        port8: OUT STD_LOGIC;
        port9: OUT STD_LOGIC;
        port10: IN STD_LOGIC;
        port11: IN STD_LOGIC;
        port12: IN STD_LOGIC;
        port13: IN STD_LOGIC;
        port14: IN STD_LOGIC -- VCC 5V
    );
END C74LS74;

ARCHITECTURE rt9 OF C74LS74 IS
    COMPONENT nand IS 
        PORT (
            pin1: IN STD_LOGIC;
            pin2: IN STD_LOGIC;
			pin3: IN STD_LOGIC;
			pin4: IN STD_LOGIC;
            pin5: OUT STD_LOGIC;
			pin6: OUT STD_LOGIC;
        );
    END COMPONENT;

BEGIN
	IF (port1 ='1' and port4 = '0')THEN
		port5 <='1';
		port6 <='0';
	ELSIF (port1 ='0' and port4 = '1')THEN
		port5 <='0';
		port6 <='1';
	ELSIF (port1 ='1' and port4 = '1')THEN
		IF(port3'event and port3='1' and port2 ='1')THEN
			port5<= '1';
			port6<='0';
		ELSIF(port3'event and port3='1' and port2 ='0')THEN
			port5<= '0';
			port6 <='1';
		END IF;
	END IF;
	IF (port13 ='1' and port10 = '0')THEN
		port9 <='1';
		port8 <='0';
	ELSIF (port13 ='0' and port10 = '1')THEN
		port9 <='0';
		port8 <='1';
	ELSIF (port13 ='1' and port10 = '1')THEN
		IF(port11'event and port11='1' and port12 ='1')THEN
			port9<= '1';
			port8 <='0';
		ELSIF(port11'event and port11='1' and port12 ='0')THEN
			port9<= '0';
			port8 <='1';
		END IF;
	END IF;
	

END;