#!/bin/bash

source env.sh
mv $1 ./sim/main.vhd || exit
mv $2 ./sim/testbench.vhd || exit

cd ./sim
vcom testbench.vhd main.vhd || exit
vsim -c -do sim.do testbench || exit

cd ..
mv ./sim/main.vcd $3 || exit