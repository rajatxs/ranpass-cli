#!/usr/bin/env node
const { generatePassword, showPassword, copyPassword } = require("./password");
const { Command } = require("commander");
const { version } = require("../package.json");

const cmd = new Command();
let password;
let opts;

cmd.name("Ranpass CLI");
cmd.helpOption('-h, --help', "Show the command help");
cmd.version(version, '-v, --version', "Show the current version");

cmd.option('-l, --length <number>', "Password length", "12");
cmd.option("-nu, --no-uppercase", "Remove uppercase characters");
cmd.option("-nl, --no-lowercase", "Remove lowercase characters");
cmd.option("-nn, --no-numbers", "Remove number");
cmd.option("-ns, --no-symbols", "Remove symbols");
cmd.option("-nc, --no-copy", "Do not copy generated password");

cmd.parse();

opts = cmd.opts();
password = generatePassword(opts);

showPassword(password);

if (opts.copy) {
   copyPassword(password);
}

