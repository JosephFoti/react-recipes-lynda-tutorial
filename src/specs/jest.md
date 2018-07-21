## Testing with Jest and Enzyme

#### Config notes

  - Requires javascript module.exports config object
  - name jest.config.js
  - example:

  ```javascript

  testRegex: '/src/.*?(Spec)\\.js$',
  modulePathIgnorePatterns: ['node_modules', 'dist'],
  moduleNameMapper: {
    '\\.(jpeg|jpg|png)$': '<rootDir>/src/utils/fileMock.js',
  },
  setupFiles: ['<rootDir>/src/specs/index.js'],

  ```  

  - package.json config
    -  "test": "./node_modules/.bin/jest"
  - testRegex
    - defines what files are queued to be run with yarn test
  - modulePathIgnorePatterns
    - like a gitignore for testing params
  - moduleNameMapper
    - allows jest to see image files and replace them with whatever is defined in the fileMock js export nested in a 'utils' file in src

    ```javascript

    module.exports = 'test-file-stub';

    ```
  - setupFiles
    - directs jest to enzyme config file 'specs/index.js'

    ```javascript

    import polyfill from './polyfill';
    import Enzyme from 'enzyme';
    import Adapter from 'enzyme-adapter-react-16';

    Enzyme.configure({ adapter: new Adapter() });

    ```

    
