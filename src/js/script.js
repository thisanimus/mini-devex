// Import from a local module
import Example from './modules/example.js';

// Import from a node module, this will be rolled-up
// so you don't need to include a node_modules dir in prod
import Cookies from 'js-cookie';

// instntiate a new class instance
new Example('Logged from the main script.');

// use an imported method from a node_module
Cookies.set('foo', 'bar');
