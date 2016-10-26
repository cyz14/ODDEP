LIBRARY IEEE;
USE IEEE.STD_LOGIC_1164.ALL;
USE IEEE.STD_LOGIC_ARITH.ALL;
USE IEEE.STD_LOGIC_UNSIGNED.ALL;

ENTITY C74LS90 is
	port(
	port1:in std_logic;   --~cpB
	port2:in std_logic;   --R1
	port3:in std_logic;   --R2
	port4:in std_logic;   --NC
	port5:in std_logic;   --VCC 5v
	port6:in std_logic;   --S1
	port7:in std_logic;   --S2
	q1: BUFFER std_logic;   --QA
	q2:buffer std_logic_vector(2 downto 0);  --qD,QC,QB
	port10:in std_logic;  --GND
	port14:in std_logic;  --~cpa
	port13:in std_logic   --NC
);
END C74LS90;
architecture two OF C74LS90 IS
BEGIN
	PROCESS(port14,port2,port3,port6,port7) begin
		if(port6='1' and port7='1')then
			q1<='1';
			q2<="100";
		end if;
		if(port2='1' and port3='1' and port6='0')then
			q1<='0';
			q2<="000";
		end if;
		if(port2='1' and port3='1' and port7='1')then
			q1<='0';
			q2<="000";
		end if;
	    if(port14'event and port14='0')then
			if(q1='1') then
				q1<='0';
			end if;
			if(q1='0')then
				q1<= '1';
			end if;
		end if;
	end process;
	
	PROCESS(port1,port2,port3,port6,port7) begin
		if(port6='1' and port7='1')then
			q1<='1';
			q2<="100";
		end if;
		if(port2='1' and port3='1' and port6='0')then
			q1<='0';
			q2<="000";
		end if;
		if(port2='1' and port3='1' and port7='1')then
			q1<='0';
			q2<="000";
		end if;
	    if(port1'event and port14='0')then
			if(q2="100") then
				q2<="000";
			end if;
			if(q2="000")then
				q2<= "001";
			end if;
			if(q2="001")then
				q2<= "010";
			end if;
			if(q2="010")then
				q2<= "011";
			end if;
			if(q2="011")then
				q2<="100";
			end if;
		end if;
	end process;
end;