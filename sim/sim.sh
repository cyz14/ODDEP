#!/bin/bash

source ./sim/env.sh
cp $1 ./sim/main.vhd || exit
cp $2 ./sim/testbench.vhd || exit

cd ./sim
test -d work || vlib work
vcom testbench.vhd main.vhd || exit
vsim -c -do sim.do testbench || exit

cd ..
cp ./sim/main.vcd $3 || exit