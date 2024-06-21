#!/usr/bin/env node


const [,,yourName] =process.argv;

if (!yourName) {
    console.log('Usage : cleanit <yourName>');
    process.exit(1);
}

console.log(`hello, ${yourName}`);