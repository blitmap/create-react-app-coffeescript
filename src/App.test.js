import {
  render,
  screen
} from '@testing-library/react';

import App from './App';

test('renders learn react link', function() {
  var linkElement;
  render(<App />);
  linkElement = screen.getByText(/learn react/i);
  return expect(linkElement).toBeInTheDocument();
});

//# sourceMappingURL=App.test.js.map
