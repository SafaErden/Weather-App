import _ from 'lodash';
import './style.css';
import './search';
import './cities';

function component() {
	const element = document.createElement('div');

	// Lodash, currently included via a script, is required for this line to work
	element.innerHTML = _.join([ 'You are', 'too hot ;)' ], ' ');
	element.classList.add('hello', 'h1');

	return element;
}

document.body.appendChild(component());
