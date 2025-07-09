# Architecture 
```
restful-api/
├── src/
│ ├── controllers/ # Request handlers for each resource
│ │ ├── userController.js # User CRUD operations
│ │ ├── productController.js # Product CRUD operations
│ │ └── orderController.js # Order CRUD operations
│ │
│ ├── routes/ # API endpoint definitions
│ │ ├── index.js # Main router aggregator
│ │ ├── userRoutes.js # /api/users endpoints
│ │ ├── productRoutes.js # /api/products endpoints
│ │ └── orderRoutes.js # /api/orders endpoints
│ │
│ ├── models/ # Data models and schemas
│ │ ├── userModel.js # User data structure
│ │ ├── productModel.js # Product data structure
│ │ └── orderModel.js # Order data structure
│ │
│ ├── middleware/ # Express middleware functions
│ │ ├── errorHandler.js # Global error handling
│ │ ├── notFound.js # 404 handler
│ │ ├── requestLogger.js # Custom logging middleware
│ │ ├── validateRequest.js # Request validation
│ │ └── rateLimiter.js # Rate limiting middleware
│ │
│ ├── services/ # Business logic layer
│ │ ├── userService.js # User-related operations
│ │ ├── productService.js # Product business logic
│ │ └── orderService.js # Order processing logic
│ │
│ ├── utils/ # Utility functions
│ │ ├── logger.js # Winston logger configuration
│ │ ├── validators.js # Data validation helpers
│ │ ├── responseFormatter.js # API response standardization
│ │ └── constants.js # Application constants
│ │
│ ├── config/ # Configuration files
│ │ ├── index.js # Main config aggregator
│ │ ├── database.js # Database configuration
│ │ ├── server.js # Server settings
│ │ └── security.js # Security configurations
│ │
│ ├── data/ # Data layer (file-based for simplicity)
│ │ ├── users.json # User data storage
│ │ ├── products.json # Product data storage
│ │ └── orders.json # Order data storage
│ │
│ └── app.js # Express app initialization
│
├── tests/ # Test suite
│ ├── unit/ # Unit tests
│ │ ├── controllers/ # Controller tests
│ │ ├── services/ # Service tests
│ │ └── utils/ # Utility tests
│ │
│ ├── integration/ # Integration tests
│ │ ├── routes/ # API endpoint tests
│ │ └── middleware/ # Middleware tests
│ │
│ └── fixtures/ # Test data
│ └── testData.js # Sample test data
│
├── logs/ # Application logs
│ ├── error.log # Error logs
│ ├── combined.log # All logs
│ └── http.log # HTTP request logs
│
├── docs/ # Documentation
│ ├── API.md # API endpoint documentation
│ ├── ARCHITECTURE.md # Architecture overview
│ └── examples/ # Request/Response examples
│ ├── users.md # User endpoint examples
│ ├── products.md # Product endpoint examples
│ └── orders.md # Order endpoint examples
│
├── scripts/ # Utility scripts
│ ├── seed.js # Database seeding script
│ ├── clean.js # Data cleanup script
│ └── generateDocs.js # API documentation generator
│
├── .env.example # Environment variables template
├── .gitignore # Git ignore configuration
├── .eslintrc.json # ESLint configuration
├── .prettierrc # Prettier configuration
├── nodemon.json # Nodemon configuration
├── package.json # Dependencies and scripts
├── server.js # Application entry point
└── README.md # Project documentation


```





## Component Interaction Architecture

### Request Flow Architecture

```

Client Request
↓
Express Server (server.js)
↓
Global Middleware (Morgan, Helmet, CORS)
↓
Route Handler (routes/)
↓
Validation Middleware
↓
Controller (controllers/)
↓
Service Layer (services/)
↓
Data Layer (models/ → data/)
↓
Response Formatter
↓
Client Response

```

---

### Error Handling Flow

```

Error Occurrence
↓
Try-Catch in Controller
↓
Next(error) called
↓
Error Handler Middleware
↓
Logger Service
↓
Formatted Error Response

```

---

