const program = require('commander')

//可下 node app -h 查詢說
program
    .version('0.0.1') // 可下 -V 查詢版本
    .option('-a, --aArgv', '新增a參數') // 可下 -a 設定 program.aArgv 為 true
    .option('-b, --bArgv', '新增b參數') // 可下 -b 設定 program.bArgv 為 true
    .option('-c, --cArgv [type]', '新增c變數內容', 'cain') // 可下 -c 帶內容 設定 program.bArgv 預設值為 cain
    .parse(process.argv)

console.log('  - %s aArgv', program.aArgv)
console.log('  - %s bArgv', program.bArgv)
console.log('  - %s cArgv', program.cArgv)
