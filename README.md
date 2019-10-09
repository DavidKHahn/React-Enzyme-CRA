To get started with **enzyme**, you can simply install it via npm. You will need to install enzyme along with an Adapter corresponding to the version of react (or other UI Component library) you are using. For instance, if you are using enzyme with React 16, you can run:

``
npm i --save-dev enzyme enzyme-adapter-react-16
``

Each adapter may have additional peer dependencies which you will need to install as well. For instance, enzyme-adapter-react-16 has peer dependencies on react and react-dom.

Source: https://github.com/airbnb/enzyme



**USEFUL LINKS:**

 - https://blog.usejournal.com/lean-testing-or-why-unit-tests-are-worse-than-you-think-b6500139a009
 - https://www.npmjs.com/package/nock (setup for mock pretend url calls for asynchronous tests)
 - https://www.npmjs.com/package/supertest (API testing)
