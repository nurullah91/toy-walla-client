import { Helmet } from "react-helmet";

const Blog = () => {
    return (
        <div className="custom-bg">

            {/* dynamic title */}
            <Helmet>
                <title>Blog-Toy wala</title>
            </Helmet>

            <div className="p-10">
                <div className="w-11/12 lg:-9/12 mx-auto">
                    <div className="bg-blue-50 my-8 p-5 rounded-md">
                        <h2 className="text-2xl font-bold my-3 text-rose-500">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                        <p className="text-green-700">An access token and a refresh token are commonly used in authentication systems to secure and manage user sessions. Its crucial to implement appropriate security measures when storing and transmitting tokens. Ensure the tokens are transmitted over secure HTTPS connections and properly validate and verify them on the server-side to prevent token-based attacks.

                        </p>
                    </div>



                    <div className="bg-blue-50 my-8 p-5 rounded-md">
                        <h2 className="text-2xl font-bold my-3 text-rose-500">Who is better?Compare SQL and NoSQL databases.</h2>
                        <p className="text-green-700">
                            SQL and NoSQL databases differ in their data models, query languages, scalability, and use cases.

                            <strong className="block text-rose-500">SQL Databases:</strong>
                            <li>Data Model: SQL databases use a structured, tabular data model with predefined schemas. They have tables with rows and columns, and relationships between tables are established using foreign keys.</li>
                            <li>Query Language: SQL databases use the Structured Query Language (SQL) to query and manipulate data. SQL provides a standardized way to interact with relational databases.</li>
                            <li>Schema: SQL databases enforce a schema, which defines the structure, data types, and constraints for the data in the tables. Changes to the schema often require modifying the database structure.</li>

                            <strong className="block text-rose-500">NoSQL Databases:</strong>

                            <li>Schema: NoSQL databases offer schema flexibility, allowing for schema-less or dynamic schemas. Data can be added without predefined structures or strict constraints.</li>
                            <li>Query Language: NoSQL databases may use different query languages specific to their data model. For example, MongoDB uses a query language similar to JSON for document-based querying.</li>
                            <li>Data Model: NoSQL databases use various data models, such as key-value, document, columnar, or graph-based. They provide flexible schemas or no schemas at all, allowing for dynamic and unstructured data.</li>
                        </p>
                    </div>

                    <div className="bg-blue-50 my-8 p-5 rounded-md">
                        <h2 className="text-2xl font-bold my-3 text-rose-500">What is express js? What is Nest JS?</h2>
                        <p className="text-green-700">Express.js is a minimalistic web application framework for Node.js, offering simplicity and flexibility. It focuses on handling HTTP requests and responses, routing, middleware, and view rendering. Nest.js, built on top of Express.js, is a progressive framework that adds additional features and architectural patterns. It leverages TypeScript, promotes modular architecture, and provides out-of-the-box support for routing, middleware, and more. Nest.js is suitable for building scalable and maintainable server-side applications.

                        </p>
                    </div>

                    <div className="bg-blue-50 my-8 p-5 rounded-md">
                        <h2 className="text-2xl font-bold my-3 text-rose-500">What is MongoDB aggregate and how does it work?</h2>
                        <p className="text-green-700">The aggregate method in MongoDB allows for complex data analysis and transformation operations on collections.
                            It works by utilizing a pipeline of stages, where each stage represents a specific data processing operation.
                            Stages can include filtering, grouping, sorting, projecting, joining, and aggregating data.
                            The pipeline stages are executed sequentially, with the output of one stage serving as the input to the next.
                            The method utilizes MongoDB&apos;s Aggregation Framework, providing powerful operators and expressions for data manipulation.
                            The result is a cursor that can be iterated to retrieve the processed data, including grouped, aggregated, and transformed documents.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;