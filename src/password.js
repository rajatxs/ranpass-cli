
const chalk = require("chalk");
const clipboardy = require("clipboardy");
const { UPPER_ALPHA, LOWER_ALPHA, NUMBERS, SYMBOLS } = require("./values");

/**
 * Generate Password
 * @param {Ranpass.PasswordOptions} [options] - Password Options
 * @returns {string}
 */
exports.generatePassword = function(options = {}) {
   let length, chars = '', pswd = '';

   length = (options.length)? Number(options.length): 8;

   (options.uppercase)? (chars += UPPER_ALPHA): null;
   (options.lowercase)? (chars += LOWER_ALPHA): null;
   (options.numbers)? (chars += NUMBERS): null;
   (options.symbols)? (chars += SYMBOLS): null;

   for (let i = 0; i < length; ++i) {
      const charIndex = Math.floor(Math.random() * chars.length);
      pswd += chars.charAt(charIndex);
   }

   return pswd;
}

/**
 * Prints generated password on terminal
 * @param {string} pswd - Generated Password
 */
exports.showPassword = function(pswd) {
   const msg = chalk.greenBright("Password Generated: ").concat(chalk.bold(pswd));

   process.stdout.write(msg + "\n");
}

/**
 * Copy generated password to clipboard
 * @param {string} pswd - Generated Password
 * @returns {string}
 */
exports.copyPassword = function(pswd) {
   let msg;

   clipboardy.write(pswd)
      .then(function () {
         msg = chalk.blue("Copied to Clipboard");
      })
      .catch(function () {
         msg = chalk.red("Error while copying password");
      })
      .finally(function () {
         process.stdout.write(msg + '\n');
      })
}
