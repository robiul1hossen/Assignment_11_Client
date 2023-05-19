import React from "react";

const Blog = () => {
  return (
    <div className="space-y-7">
      <div>
        <h2 className="font-semibold text-2xl">
          1. What is an access token and refresh token? How do they work and where should we store them on the
          client-side?
        </h2>
        <p>
          An access token is a short-lived credential used to access protected resources on behalf of a user.
          It is included with each request to the server to validate and authorize actions. A refresh token is
          a long-lived token used to obtain a new access token when the current one expires, allowing the user
          to refresh their authentication session without re-entering credentials. Access tokens are typically
          stored in memory on the client-side, while refresh tokens are securely stored, often in an HTTP-only
          secure cookie. Adhering to security best practices is crucial for protecting these tokens and
          ensuring the overall security of the authentication system.
        </p>
      </div>
      <div>
        {" "}
        <h2 className="font-semibold text-2xl">2. Compare SQL and NoSQL databases?</h2>
        <p>
          SQL databases are structured, relational databases that follow a predefined schema. They use the
          relational model, SQL language for querying, and enforce ACID compliance for data integrity. They
          are vertically scalable and prioritize data consistency.
        </p>
      </div>
      <div>
        <h2 className="font-semibold text-2xl">3. What is express js? What is Nest JS</h2>
        <p>
          Express.js is a popular web application framework for Node.js. It provides a simple and minimalistic
          approach to building web servers and APIs. Express.js allows developers to handle routing,
          middleware, and HTTP request/response handling with ease. It offers a flexible and modular structure
          that enables the creation of robust and scalable web applications. With a rich ecosystem of
          middleware and extensions, Express.js allows developers to customize and extend the functionality of
          their applications as per their specific needs. NestJS is a progressive, TypeScript-based web
          application framework that is built on top of Node.js and Express.js. It is designed to provide an
          efficient and scalable architecture for building server-side applications. NestJS utilizes
          decorators, dependency injection, and object-oriented programming principles to create highly
          modular and testable code. It supports a wide range of features like routing, authentication,
          caching, database integration, and more. NestJS emphasizes the use of TypeScript, which enables
          developers to leverage static typing and other advanced language features to enhance productivity
          and maintainability.
        </p>
      </div>
      <div>
        <h2 className="font-semibold text-2xl">4. What is MongoDB aggregate and how does it work</h2>
        <p>
          The aggregate method in MongoDB is used for advanced data aggregation operations on collections. It
          takes an array of stages as input, where each stage represents a specific operation or
          transformation to be applied to the documents. The stages are executed in sequence, with the output
          of one stage serving as the input for the next. The stages include matching, grouping, projection,
          and sorting, allowing you to filter, group, reshape, and sort the documents to produce aggregated
          results based on your requirements.
        </p>
      </div>
    </div>
  );
};

export default Blog;
