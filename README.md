# Burguer Menu App
![image](https://github.com/user-attachments/assets/2f970316-3155-4c07-9afc-0337afd7ca7f)

## Tecnologies
- Vite
- React
- Typescript
- Redux RTK
- Tailwindcss
- Shadcn

## About the Project

The project was created with the aim of putting into practice skills in state management and high-performance requests, as well as applying good coding practices, maintaining readable and componentized code, and utilizing advanced technology in its development.

## Running the Project

After cloning the project, simply use the command npm install or yarn to install the necessary packages. Remember to also create a .env file in the root of the project using the keys and values from the .env.example file. This information is crucial for the project to function. Then, just access the route "http://localhost:5173/menu/9". Note that the project uses dynamic routing to fetch data about the menu and the restaurant from an external API using the ID in the page URL.

## About the Global Context

It is important to remember that the project uses a global context. If you need to understand how it is structured, here is a basic explanation of how it works. The structure is divided into three parts: store (where we configure data persistence and the distribution of each store upon initialization), features (where we store each created slice, with its files for slices, initial states, reducers, and actions), and services (where we use Redux RTK query tools to manage async requests, transforming them into queries and mutations when necessary).

This type of abstraction aids in code maintenance and readability and is very efficient in projects that involve a large number of files and data to be managed.

## About Page and Template Files

I chose to use a single-responsibility structure for each layer. In the page files layer, I handled the responsibility of dealing with the layout HOC (Higher-Order Component), where we can manage templates and, in the future, middlewares for authentication management at this first layer. In the template layer, I handled the business logic, including requests and state management, as well as assembling the template for each screen.

## About Dynamic Filtering Items

![image](https://github.com/user-attachments/assets/c6516152-d138-4272-886f-7f57164342a3)

Each item filters its respective section in the menu. If the user clicks on the item again, the listing will revert to showing all menu items.

## Final Considerations

This project aims to put into practice some of the implementations and patterns used daily in large projects. It is always beneficial to practice these skills and share new solutions for everyday problems with the development community. In this case, all ideas and suggestions are very welcome. Feel free to send me a message so we can discuss further about potential integrations for this project.
