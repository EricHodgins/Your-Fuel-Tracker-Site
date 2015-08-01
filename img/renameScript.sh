#!/bin/bash

num=1
for f in *.png
do
  echo "screen-$num.png"
  mv "$f" "screen-$num.png"
  let num=$num+1  
done
