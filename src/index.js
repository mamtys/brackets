const BracketManager = require('./Manager');
const Stack = require('./Stack');

module.exports = function check(str, bracketsConfig) {
	const manager = new BracketManager(Stack);
	const brackets = bracketsConfig.flat();

	for (let char of str) {
		let bracketIndex = brackets.findIndex(el => el === char);
        if (bracketIndex === -1) {
            continue;
		}

		//key is a string of open and closed bracket
		let key;
		//even index stands for open bracket
		if (bracketIndex % 2 === 0) {
			key = [char, brackets[bracketIndex + 1]].join(',');

			//destribution for equal open/closed pairs
			if (char === brackets[bracketIndex + 1]){
				try {
					manager.close(key);
				} catch (err) {
					manager.open(key);
				}
				continue;
			}

			manager.open(key);
			continue;
		}

		if (bracketIndex % 2 !== 0) {
			key = String([brackets[bracketIndex - 1], char]);
			try {
				manager.close(key);
			} catch (err) {
				return false;
			}
		}
	}
	if (manager.hasUnclosedBracket()) {
		return false;
	}
	return true;
}