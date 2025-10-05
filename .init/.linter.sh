#!/bin/bash
cd /tmp/kavia/workspace/code-generation/0510tictactestcode/TicTacToeWebApp
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

