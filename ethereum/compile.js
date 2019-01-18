const path = require('path')
const solc = require('solc')
const fs = require('fs-extra')

const buildPath = path.resolve(__dirname, 'build')
fs.removeSync(buildPath)

const campaignPath = path.resolve(__dirname, 'contracts', 'passx.sol')
const source = fs.readFileSync(campaignPath, 'utf8')
const output = solc.compile(source, 1).contracts;
// console.log(output);

fs.ensureDirSync(buildPath)

for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':', '') + '.json'),
    output[contract]
  )
}


// Attempting to deploy from account 0xE74dA3F4664EfE8A4F2A7dD78a1d9E521904E5bE
// Contract deployed to 0xfE4cc28992246feb73011BC07bfC5b80285E7c1a
