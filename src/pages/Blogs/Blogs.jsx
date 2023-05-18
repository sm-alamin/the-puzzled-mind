const Blogs = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-12">
          <div className="p-12 md:w-1/2 flex flex-col items-start">
            <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
              Question:
            </span>
            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
              <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                Answer:
              </span>
            </h2>
            <p className="leading-relaxed mb-8">
              <span className="text-gray-700 font-bold">Access Token:</span> An
              access token is a credential that is issued to a client (such as a
              web or mobile application) after successful authentication. It
              contains information about the client's identity and permissions
              and is typically used to authorize access to protected APIs or
              resources. Access tokens have a limited lifespan, usually ranging
              from a few minutes to a few hours, and they need to be included in
              each request to the protected resource.
            </p>
            <p className="leading-relaxed mb-8">
              <span className="text-gray-700 font-bold">Refresh Token:</span> A
              refresh token is a long-lived credential that is also issued to a
              client during the authentication process. Unlike access tokens,
              refresh tokens are not meant to be included in each request to the
              protected resource. Instead, they are used to obtain a new access
              token when the current access token expires. Refresh tokens are
              typically kept secure on the client-side and are sent to the
              authentication server to request a new access token.
            </p>
            <p className="leading-relaxed mb-8">
              <span className="text-gray-700 font-bold">
                The flow of using access and refresh tokens typically works as
                follows:
              </span>{" "}
            </p>
            <ul>
              <li>
                <a href="">
                  The client sends the user's credentials (such as username and
                  password) to the authentication server.
                </a>
              </li>
              <li>
                <a href="">
                  If the credentials are valid, the server generates an access
                  token and a refresh token and sends them back to the client.
                </a>
              </li>
              <li>
                <a href="">
                  The client stores the refresh token securely (e.g., in a
                  secure cookie or local storage) and includes the access token
                  in each request to the protected resource.
                </a>
              </li>
              <li>
                <a href="">
                  When the access token expires, the client can use the refresh
                  token to request a new access token from the authentication
                  server without requiring the user to reauthenticate.
                </a>
              </li>
              <li>
                <a href="">
                  The server verifies the refresh token and issues a new access
                  token to the client.
                </a>
              </li>
              <li>
                <a href="">
                  The client continues making requests to the protected resource
                  using the new access token.
                </a>
              </li>
            </ul>
            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
              <a className="text-indigo-500 inline-flex items-center">
                Read More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
            <a className="inline-flex items-center">
              <img
                alt="blog"
                src="https://dummyimage.com/104x104"
                className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
              />
              <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-medium text-gray-900">
                  Mohammd Al-Amin
                </span>
                <span className="text-gray-400 text-xs tracking-widest mt-0.5">
                  Frontend Web Developer
                </span>
              </span>
            </a>
          </div>
          <div className="p-12 md:w-1/2 flex flex-col items-start">
            <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
              Question:
            </span>
            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
              Compare SQL and NoSQL databases?
            </h2>
            <p className="leading-relaxed mb-8">
              SQL and NoSQL databases are two distinct types of database
              management systems, each with its own characteristics and use
              cases. Here's a comparison between SQL and NoSQL databases:
            </p>
            <p className="leading-relaxed mb-8">
              Data Model: SQL: SQL databases use a structured data model known
              as the relational model. Data is organized into tables with
              predefined schemas, and relationships between tables are
              established using keys. NoSQL: NoSQL databases use various data
              models, such as key-value pairs, documents, columnar, or graphs.
              They provide flexibility in storing unstructured or
              semi-structured data without enforcing a fixed schema.
            </p>
            <p className="leading-relaxed mb-8">
              Scalability: SQL: SQL databases traditionally scale vertically by
              increasing hardware resources, such as CPU and memory, of a single
              server. Scaling horizontally across multiple servers can be
              complex. NoSQL: NoSQL databases are designed to scale horizontally
              by adding more servers to the database cluster. They can handle
              large amounts of data and high traffic loads more easily.
            </p>
            <p className="leading-relaxed mb-8">
              Schema and Flexibility: SQL: SQL databases have a predefined
              schema, and data must conform to the specified structure. Changes
              to the schema often require modifications to the existing data.
              NoSQL: NoSQL databases are schema-less or have flexible schemas,
              allowing for dynamic and evolving data structures. They can easily
              handle changes in data requirements without strict schema
              constraints.
            </p>
            <p className="leading-relaxed mb-8">
              Query Language: SQL: SQL databases use structured query language
              (SQL) for defining and manipulating data. SQL provides powerful
              capabilities for complex queries, joins, and aggregations. NoSQL:
              NoSQL databases typically have their own query languages or APIs
              specific to their data model. The query capabilities may be more
              limited compared to SQL, focusing on key-based retrieval or
              document-oriented queries.
            </p>
            <p className="leading-relaxed mb-8">
              Use Cases: SQL: SQL databases are well-suited for applications
              that require complex transactions, strong data integrity, and
              structured data. They are commonly used in financial systems, ERP
              systems, and applications with predefined schemas. NoSQL: NoSQL
              databases are suitable for handling large amounts of unstructured
              or semi-structured data, as well as applications with flexible and
              evolving data requirements. They are often used in real-time
              analytics, content management systems, IoT applications, and
              social networks.
            </p>
            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
              <a className="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
            <a className="inline-flex items-center">
              <img
                alt="blog"
                src="https://dummyimage.com/103x103"
                className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
              />
              <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-medium text-gray-900">
                  Mohammad Al-Amin
                </span>
                <span className="text-gray-400 text-xs tracking-widest mt-0.5">
                  WEB DESIGNER
                </span>
              </span>
            </a>
          </div>
          <div className="p-12 md:w-1/2 flex flex-col items-start">
            <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
              Question:
            </span>
            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
            What is express js? What is Nest JS
            </h2>
            <p className="leading-relaxed mb-8">
            Express.js is a popular web application framework for Node.js. It provides a simple and minimalistic approach to building web applications and APIs. Express.js is known for its flexibility and extensibility, allowing developers to create robust server-side applications with ease. It provides a set of features and middleware that simplify tasks such as routing, handling HTTP requests and responses, managing sessions, and serving static files. Express.js is widely adopted in the Node.js ecosystem and is used to build various types of web applications, ranging from small projects to large-scale enterprise applications.
            </p>
            <p className="leading-relaxed mb-8">
            Nest.js, on the other hand, is a progressive Node.js framework for building scalable and efficient server-side applications. It is built on top of Express.js and provides an additional layer of abstraction and structure. Nest.js follows the architectural principles of modularity, dependency injection, and decorators to enable developers to create highly maintainable and testable applications. It incorporates concepts from object-oriented programming, functional programming, and reactive programming to provide a solid foundation for building complex server-side applications. Nest.js also offers built-in support for features like routing, middleware, authentication, caching, and more. It aims to enhance developer productivity and code maintainability by providing a structured and opinionated approach to application development.
            </p>
            
            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
              <a className="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
            <a className="inline-flex items-center">
              <img
                alt="blog"
                src="https://dummyimage.com/103x103"
                className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
              />
              <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-medium text-gray-900">
                  Mohammad Al-Amin
                </span>
                <span className="text-gray-400 text-xs tracking-widest mt-0.5">
                  Web Developer
                </span>
              </span>
            </a>
          </div>
          <div className="p-12 md:w-1/2 flex flex-col items-start">
            <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
              Question:
            </span>
            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
            What is MongoDB aggregate and how does it work
            </h2>
            <p className="leading-relaxed mb-8">
            In MongoDB, the aggregate operation is used to perform advanced data processing and analysis tasks on the data stored in a collection. It allows you to perform various operations, such as grouping, filtering, sorting, transforming, and joining data, in a single query.
            </p>
            <p className="leading-relaxed mb-8">
            The MongoDB aggregate operation works by taking an array of pipeline stages as input. Each stage represents a specific operation to be performed on the data. The stages are executed in the order they appear in the pipeline, and the output of one stage serves as the input for the next stage.
            </p>
            <p className="leading-relaxed mb-8">
            The aggregate operation in MongoDB provides powerful capabilities for data analysis and aggregation, allowing you to perform complex operations and transformations on your data directly within the database. It is a flexible and efficient way to process and analyze large volumes of data stored in MongoDB collections.
            </p>
            
            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
              <a className="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
            <a className="inline-flex items-center">
              <img
                alt="blog"
                src="https://dummyimage.com/103x103"
                className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
              />
              <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-medium text-gray-900">
                  Mohammad Al-Amin
                </span>
                <span className="text-gray-400 text-xs tracking-widest mt-0.5">
                  Mern Stack Web Developer
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
