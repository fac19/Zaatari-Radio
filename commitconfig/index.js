const inquirer = require('inquirer');

// By default, we'll de-indent your commit
// template and will keep empty lines.
function exists(input) {
	if (input) {
		return true;
	}
	return 'input required';
}

const questions = [
	{
		type: 'input',
		name: 'issues',
		message: 'Jira Issue ID(s) (required) e.g. ZTRI-1 ZTRI-2:\n',
		validate: exists,
	},
	{
		type: 'input',
		name: 'workflow',
		message: 'Workflow command (in-progress, done) (optional):\n',
	},
	{
		type: 'input',
		name: 'time',
		message: 'Time spent (i.e. 3h 15m) (optional):\n',
	},
	{
		type: 'input',
		name: 'comment',
		message: 'Comment (required):\n',
		validate: exists,
	},
	{
		type: 'input',
		name: 'coauthorName',
		message: 'co-author username\n',
	},
	{
		type: 'input',
		name: 'coauthorEmail',
		message: 'co-author email\n',
	},
];

function filter(array) {
	return array.filter((item) => {
		return !!item;
	});
}

function formatCommit(commit, answers) {
	commit(
		filter([
			answers.issues,
			answers.workflow ? `#${answers.workflow}` : undefined,
			answers.time ? `#time ${answers.time}` : undefined,
			answers.comment ? `#comment ${answers.comment}` : undefined,
			answers.coauthorName ? `\n\nCo-authored-by: ${answers.coauthorName}` : undefined,
			answers.coauthorEmail ? `<${answers.coauthorEmail}>` : undefined,
		]).join(' '),
	);
}

function prompter(cz, commit) {
	inquirer.prompt(questions).then((answers) => {
		formatCommit(commit, answers);
	});
}

module.exports = { prompter, formatCommit };
